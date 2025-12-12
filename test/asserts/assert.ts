import { bool, str } from "../utils/utils"
import { base } from "../pageobjects/pages/base/base"
import NavLinks from "./navLinks.assert"
import SearchBar from "./searchBar.assert"
import SearchPageCategories from "./searchPageCategories.assert"
import SearchPageSortByDropdown from "./searchPageSortByDropdown.assert"


/** Parent class for testing */
class Assert {
    /** Testing nav bar */
    public get NavLinks() { return new NavLinks() }
    /** Testing search bar */
    public get SearchBar() { return new SearchBar() }
    /** Testing categories on search page */
    public get SearchPageCategories() { return new SearchPageCategories() }
    /** Testing "Sort By" dropdown on search page */
    public get SearchPageSortByDropdown() { return new SearchPageSortByDropdown() }

    /** Asserts current url contains `path` */
    public async assertUrlContains(path:str|RegExp|URL, ops:{reverse?:bool}={}) {
        if(path instanceof URL) {
            path = path.toString()
        }
        const {reverse=false} = ops;
        await base.waitForLoad()

        const currentUrl = await browser.getUrl()
        const expectUrl = (reverse) ? expect(currentUrl).not : expect(currentUrl)
        
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
    
    /** Asserts current url is exactly `path` */
    public async assertUrlIs(path:str|URL, ops:{reverse?:bool}={}) {
        if(path instanceof URL) {
            path = path.toString()
        }
        const {reverse=false} = ops;
        await base.waitForLoad()

        const currentUrl = await browser.getUrl()
        const expectUrl = (reverse) ? expect(currentUrl).not : expect(currentUrl)
        
        await expectUrl.toBe(path)
    }
}

/** Parent class for testing */
export default new Assert();
