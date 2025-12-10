import { bool, str, int, Int, _, getElementByText, waitForLoad } from "../utils/utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/base/base"
import NavLinks from "./assert/navLinks.assert"
import SearchBar from "./assert/searchBar.assert"
import SearchPageCategories from "./assert/searchPageCategories.assert"
import SearchPageSortByDropdown from "./assert/searchPageSortByDropdown.assert"


export class Asserters {
    public async confirmUrlContains(path:str|RegExp|URL, isReverse=false) {
        if(path instanceof URL) {
            path = path.toString()
        }

        await waitForLoad()
        const currentUrl = await browser.getUrl()

        const expectUrl = (isReverse) ? expect(currentUrl).not : expect(currentUrl)
        
        await waitForLoad()
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
    public async href($element:ChainablePromiseElement, path:str|RegExp, isReverse=false) {
        await waitForLoad()
        const linkText = await $element.getAttribute("href")
        
        const expectUrl = (isReverse) ? expect(linkText).not : expect(linkText)
        
        await waitForLoad()
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
}


class Assert extends Asserters {
    public get NavLinks() { return new NavLinks() }
    public get SearchBar() { return new SearchBar() }
    public get SearchPageCategories() { return new SearchPageCategories() }
    public get SearchPageSortByDropdown() { return new SearchPageSortByDropdown() }
}

export default new Assert();
