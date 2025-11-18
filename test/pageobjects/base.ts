import { browser } from '@wdio/globals'



export default class Base {
    /** @param baseUrl https://www.taydaelectronics.com */
    public get baseUrl() { return new URL("https://www.taydaelectronics.com").toString() }
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public open (path: string) {
        return browser.url(`https://www.taydaelectronics.com/${path}`)
    }
}

export const base = new Base() 
