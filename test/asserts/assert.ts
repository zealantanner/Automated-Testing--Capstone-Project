import { expect, browser } from '@wdio/globals'
import { base } from "../pageobjects/pages/base/base"
import NavBar from "./navLinks.assert"
import SearchBar from "./searchBar.assert"
import SearchPageCategories from "./searchPageCategories.assert"
import SearchPageSortByDropdown from "./searchPageSortByDropdown.assert"


/** Main class for testing */
class Assert {
    /** Testing navbar menus */
    public get NavBar() { return new NavBar() }
    /** Testing search bar */
    public get SearchBar() { return new SearchBar() }
    /** Testing categories on search page */
    public get SearchPageCategories() { return new SearchPageCategories() }
    /** Testing "Sort By" dropdown on search page */
    public get SearchPageSortByDropdown() { return new SearchPageSortByDropdown() }

    /** Asserts current url contains `path` */
    public async assertCurrentUrlContains(path:string|RegExp|URL, ops:{reverse?:boolean}={}) {
        if(path instanceof URL) {
            path = path.toString()
        }
        const {reverse=false} = ops;
        await base.waitForLoad()

        const expectBrowser = (reverse) ? expect(browser).not : expect(browser)
        if(path instanceof RegExp) {
            await expectBrowser.toHaveUrl(expect.stringMatching(path))
        } else {
            await expectBrowser.toHaveUrl(expect.stringContaining(path))
        }
    }
    
    /** Asserts current url is exactly `path` */
    public async assertCurrentUrlIs(path:string|URL, ops:{reverse?:boolean}={}) {
        if(path instanceof URL) {
            path = path.toString()
        }
        const {reverse=false} = ops;
        await base.waitForLoad()
        
        const expectBrowser = (reverse) ? expect(browser).not : expect(browser)
        
        await expectBrowser.toHaveUrl(path)
    }
}

/** Main class for testing */
export default new Assert();
