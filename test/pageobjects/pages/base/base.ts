import { bool, str, int, pickRandomFrom, pickRandom$From } from "../../../utils/utils"
import { browser, expect, $ } from '@wdio/globals'
import SearchBar from '../../elements/base/searchBar.el'
import Popup from '../../elements/base/popup.el'
import NavBar from '../../elements/base/navBar.el'


/** The base page */
export default abstract class Base {
    /** @param subUrl https://www.parts-express.com/ `subUrl` */
    public abstract get subUrl():str

    /** https://www.parts-express.com/ `subUrl` */
    public get baseUrl() { return new URL(this.subUrl,"https://www.parts-express.com") }
    
    /** Annoying popup that interrupts the test, disable with `dismissPopupViaLocalStorage` */
    public get Popup() { return new Popup() }

    /** The search bar on the top of the page */
    public get SearchBar() { return new SearchBar() }

    /** The navigation bar under the header of the page */
    public get NavBar() { return new NavBar() }

    /** Waits until the page is done loading */
    public async waitForLoad() {
        const $loadingIcon = $('#loadingIndicator')
        await $loadingIcon.waitForDisplayed({reverse:true})
    }

    /** Opens `baseUrl` */
    public async open(path:str|URL= this.baseUrl) {
        await this.waitForLoad()
        await browser.url(path.toString())
        await this.waitForLoad()
    }
}

/** The base page */
export const base = new class extends Base {
    public get subUrl() { return "" }
}