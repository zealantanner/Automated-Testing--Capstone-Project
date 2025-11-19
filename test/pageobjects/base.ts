import { str } from '../utils/utils'
import { browser, $, $ as $x } from '@wdio/globals'
import searchBar from './elements/base/searchBar'
import cookiePopup from './elements/base/cookiePopup'



export default class Base {
    public get searchBar() { return new searchBar() }
    public get cookiePopup() { return new cookiePopup() }

    /** @param baseUrl https://www.taydaelectronics.com */
    public get baseUrl() { return new URL("https://www.taydaelectronics.com").toString() }

    public async open(path?:str) {
        path = path ?? this.baseUrl
        await browser.url(path)
    }
}

export const base = new Base() 
