import { $ } from "@wdio/globals"
import MyElement from "../element"
import { base } from "../../pages/base/base"


/** Annoying interrupting popup, disable with `dismissPopupViaLocalStorage` */
export default class Popup extends MyElement {
    public get $base() { return $('*[data-testid="POPUP"]') }

    /** Closes popup by changing local storage */
    public async dismissPopupViaLocalStorage() {
        await base.waitForLoad()
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
