import { str } from '../../utils/utils'
import { browser, $, $ as $x } from '@wdio/globals'
import SearchBar from '../../elements/base/searchBar'
import Popup from '../../elements/base/popup'



export default class Base {
    /** https://www.parts-express.com */
    public get baseUrl() { return new URL("https://www.parts-express.com") }

    public get logo() { return $('#site-logo') }
    public get Popup() { return new Popup() }
    public get SearchBar() { return new SearchBar() }

    protected async open(path:str|URL= this.baseUrl) {
        await browser.url(path.toString())
    }
}

export const base = new Base() 
