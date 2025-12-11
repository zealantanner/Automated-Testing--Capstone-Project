import { customTimeout, str } from "../../../utils/utils"
import { $ } from "@wdio/globals"
import MyElement from "../element"


/** Annoying interrupting popup, disable with `dismissPopupViaLocalStorage` */
export default class Popup extends MyElement {
    public get $base() { return $('*[data-testid="POPUP"]') }
    public get $btnClose() { return this.$base.$('button[aria-label="Close dialog"]') }

    /** Closes popup by clicking the `X` */
    public async dismissPopupIfPresent() {
        if(await this.$base.isDisplayed()) {
            await this.$btnClose.click()
            await this.$base.waitForDisplayed({
                reverse: true,
                timeout: customTimeout,
            })
        }
    }

    /** Closes popup by changing local storage */
    public async dismissPopupViaLocalStorage() {
        await this.waitForLoad()
        const now = Math.floor(Date.now()/1000)
        const storage = {
            viewedForms: {
                modal: {
                    disabledForms: { V6Vcns: { lastCloseTime: now } },
                    viewedForms: { SJhXNt: 17938578, V6Vcns: 18109314 },
                    disabledTeasers: { V6Vcns: { lastCloseTime: now } }
                }
            }
        }
        await browser.execute((storage) => {
            localStorage.setItem(
                "klaviyoOnsite",
                JSON.stringify(storage)
            )
        },storage)
    }
}