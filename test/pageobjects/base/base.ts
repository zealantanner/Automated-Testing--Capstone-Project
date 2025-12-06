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
    
    public async assertUrlContains(path:str|RegExp|URL, reverse=false) {
        if(path instanceof URL) path = path.toString()

        const currentUrl = await browser.getUrl()
        
        if(path instanceof RegExp) {
            if(reverse) {
                // Assert current url is not path
                await expect(currentUrl).not.toMatch(path)
            } else {
                // Assert current url is path
                await expect(currentUrl).toMatch(path)
            }
        } else {
            // path is a string
            if(reverse) {
                // Assert current url is not path
                await expect(currentUrl).not.toContain(path)
            } else {
                // Assert current url is path
                await expect(currentUrl).toContain(path)
            }
        }
    }


    /** https://www.parts-express.com/ `subUrl` */
    public async open(path:str|URL= this.baseUrl) {
        await browser.url(path.toString())
    }
}

export const base = new class extends Base {
    public get subUrl() { return "" }
}