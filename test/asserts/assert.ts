import { bool, str, int, _, getElementByText } from "../utils/utils"
import { base } from "../pageobjects/pages/base/base"
import NavLinks from "./navLinks.assert"
import SearchBar from "./searchBar.assert"
import SearchPageCategories from "./searchPageCategories.assert"
import SearchPageSortByDropdown from "./searchPageSortByDropdown.assert"




class Assert {
    public get NavLinks() { return new NavLinks() }
    public get SearchBar() { return new SearchBar() }
    public get SearchPageCategories() { return new SearchPageCategories() }
    public get SearchPageSortByDropdown() { return new SearchPageSortByDropdown() }

    public async confirmUrlContains(path:str|RegExp|URL, ops:{reverse?:bool}={}) {
        if(path instanceof URL) {
            path = path.toString()
        }
        const {reverse=false} = ops;
        await base.waitForLoad()

        const currentUrl = await browser.getUrl()

        const expectUrl = (reverse) ? expect(currentUrl).not : expect(currentUrl)
        
        await base.waitForLoad()
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
}

export default new Assert();
