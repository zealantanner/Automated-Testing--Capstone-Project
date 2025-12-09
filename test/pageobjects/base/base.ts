import { str } from '../../utils/utils'
import { browser, expect, $, $ as $x } from '@wdio/globals'
import SearchBar from '../../elements/base/searchBar.el'
import Popup from '../../elements/base/popup.el'



export default abstract class Base {
    public abstract get subUrl():str

    /** https://www.parts-express.com */
    public get baseUrl() { return new URL(this.subUrl,"https://www.parts-express.com") }
    
    public get logo() { return $('#site-logo') }
    public get Popup() { return new Popup() }
    public get SearchBar() { return new SearchBar() }

    private get loadingIcon() { return $('#loadingIndicator') }
    /** waits to stop loading */
    public async waitForLoad() {
        await this.loadingIcon.waitForDisplayed({reverse:true})
        // await this.loadingIcon.waitForExist({reverse:true})
    }


    /** https://www.parts-express.com/ `subUrl` */
    public async open(path:str|URL= this.baseUrl) {
        await this.waitForLoad()
        await browser.url(path.toString())
        await this.waitForLoad()
    }
}

export const base = new class extends Base {
    public get subUrl() { return "" }
}