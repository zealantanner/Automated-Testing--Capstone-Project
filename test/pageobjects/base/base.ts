import { str, waitForLoad } from '../../utils/utils'
import { browser, expect, $, $ as $x } from '@wdio/globals'
import SearchBar from '../../elements/base/searchBar.el'
import Popup from '../../elements/base/popup.el'
import NavBar from '../../elements/base/navBar.el'



export default abstract class Base {
    public abstract get subUrl():str

    /** https://www.parts-express.com */
    public get baseUrl() { return new URL(this.subUrl,"https://www.parts-express.com") }
    
    public get $logo() { return $('#site-logo') }
    public get Popup() { return new Popup() }
    public get SearchBar() { return new SearchBar() }
    public get NavBar() { return new NavBar() }


    /** https://www.parts-express.com/ `subUrl` */
    public async open(path:str|URL= this.baseUrl) {
        await waitForLoad()
        await browser.url(path.toString())
        await waitForLoad()
    }
}

export const base = new class extends Base {
    public get subUrl() { return "" }
}