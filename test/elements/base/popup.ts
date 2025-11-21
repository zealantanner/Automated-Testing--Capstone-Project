import { customTimeout, str } from "../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import Element from "../element"


export default class Popup extends Element {
    public get base() { return $('*[data-testid="POPUP"]') }
    public get btnClose() { return this.base.$('button[aria-label="Close dialog"]') }
    public async dismissPopupIfPresent() {
        if(await this.base.isDisplayed()) {
            await this.btnClose.click()
            await this.base.waitForDisplayed({
                reverse: true,
                timeout: customTimeout,
            })
        }
    }
    public async dismissPopupViaLocalStorage() {
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

// await browser.execute(() => {
//     const now = Math.floor(Date.now() / 1000); // Unix timestamp in seconds
//     const storage = {
//         viewedForms: {
//             modal: {
//                 disabledForms: {
//                     "V6Vcns": { lastCloseTime: now }
//                 },
//                 viewedForms: {
//                     "SJhXNt": 17938578,
//                     "V6Vcns": 18109314
//                 },
//                 disabledTeasers: {
//                     "V6Vcns": { lastCloseTime: now }
//                 }
//             }
//         }
//     };

//     localStorage.setItem("viewedForms", JSON.stringify(storage));
// });