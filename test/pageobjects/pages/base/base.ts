import { str } from "../../../utils/utils"
import { browser, $ } from '@wdio/globals'
import SearchBar from '../../elements/base/searchBar.el'
import Popup from '../../elements/base/popup.el'
import NavBar from '../../elements/base/navBar.el'


/** Base page */
export default abstract class Base {
    /** @param subUrl https://www.parts-express.com/ `subUrl` */
    public abstract get subUrl():str
    /** https://www.parts-express.com/ `subUrl` */
    public get baseUrl() { return new URL(this.subUrl,"https://www.parts-express.com") }

    /** Annoying popup that interrupts the test, disable with `dismissPopupViaLocalStorage` */
    public get Popup() { return new Popup() }
    /** Search bar on top of page */
    public get SearchBar() { return new SearchBar() }
    /** Navigation bar under header of page */
    public get NavBar() { return new NavBar() }

    /** Icon that appears when website is loading */
    private get $loadingIcon() { return $('#loadingIndicator') }
    /** Waits until page is done loading */
    public async waitForLoad() {
        await this.$loadingIcon.waitForDisplayed({reverse:true})
    }

    /** Opens `baseUrl` */
    public async open(path:str|URL= this.baseUrl) {
        await this.waitForLoad()
        await browser.url(path.toString())
        await this.waitForLoad()
    }
}

/** Base page */
export const base = new class extends Base {
    public get subUrl() { return "" }
}
