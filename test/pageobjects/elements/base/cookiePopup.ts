import { str } from "../../../utils/utils"
import element from "../element"
import { $, $ as $x} from "@wdio/globals"


export default class cookiePopup extends element {
    public get base() { return $('.fixed.bottom-0') }
    public get btnAcceptCookies() { return this.base.$('#btn-cookie-allow') }
    public async close() {
        if(await this.isVisible()) {
            await this.btnAcceptCookies.click()
        }
    }
}


