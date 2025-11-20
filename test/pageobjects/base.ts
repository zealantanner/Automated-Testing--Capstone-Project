import { str } from '../utils/utils'
import { browser, $, $ as $x } from '@wdio/globals'
import SearchBar from '../elements/base/searchBar'
import Popup from '../elements/base/popup'



export default class Base {
    /** @param baseUrl https://www.parts-express.com */
    public get baseUrl() { return new URL("https://www.parts-express.com") }

    public get logo() { return $('#site-logo') }
    public get Popup() { return new Popup() }
    public get SearchBar() { return new SearchBar() }

    
    public async open(path?:str) {
        path = path ?? this.baseUrl.toString()
        await browser.url(path)
        // this.SearchBar.Typeahead.base.click()
    }
}

export const base = new Base() 
