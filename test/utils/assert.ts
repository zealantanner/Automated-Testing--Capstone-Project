import { bool, str, int, Int, _, getElementByText } from "./utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/base/base"

class Asserters {
    public async waitForLoad() {
        await base.waitForLoad()
    }
    public async urlContains(path:str|RegExp|URL, isReverse=false) {
        if(path instanceof URL) {
            path = path.toString()
        }

        await this.waitForLoad()
        const currentUrl = await browser.getUrl()

        const expectUrl = (isReverse) ? expect(currentUrl).not : expect(currentUrl)
        
        await this.waitForLoad()
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
    public async href($element:ChainablePromiseElement, path:str|RegExp, isReverse=false) {
        await this.waitForLoad()
        const linkText = await $element.getAttribute("href")
        
        const expectUrl = (isReverse) ? expect(linkText).not : expect(linkText)
        
        await this.waitForLoad()
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
}

class NavLinks extends Asserters {
    public async confirmDropdownOpen(menuName:str) {
        await this.waitForLoad()
        const $dropdown = getElementByText(menuName,base.NavBar.$base)
        // const dropdownName = base.NavBar.dropdownLinks[menuName]
        const isOpen = (await $dropdown.getAttribute("aria-expanded")) === "true"
        await expect(isOpen).toBe(true)
    }
    public async confirmNavLink(menuName:str, link:{text:str,url:str}, isReverse=false) {
        await this.waitForLoad()
        const $dropdown = getElementByText(menuName,base.NavBar.$base)
        const $link = getElementByText(link.text,$dropdown)
        const linkText = await $link.getAttribute("href")
        await this.href($link, linkText, isReverse)
        await expect(linkText).toBe(link.url)
    }
}

class SearchBar extends Asserters {

}

class SearchPageCategories extends Asserters {

}

class SearchPageSortByDropdown extends Asserters {
    public async optionIsSelected(optionNum:int) {
        await this.waitForLoad()
        const option = SearchPage.SortByDropdown.$$options[optionNum]
        await expect(await option.isSelected()).toBe(true)
        await this.waitForLoad()
    }
    private dropdownAssert(value1:int,value2ndToLast:int,isReverse=false) {
        if(isReverse) {
            // expect(value1).toBe(value2ndToLast)
            expect(value1).toBeGreaterThan(value2ndToLast)
        } else {
            // expect(value1).toBe(value2ndToLast)
            expect(value1).toBeLessThan(value2ndToLast)
        }
    }
    private async goToPageAndWait(pageNum:int) {
        await this.waitForLoad()
        await SearchPage.goToPage(pageNum)
        await this.waitForLoad()
        await SearchPage.SortByDropdown.waitFor()
        await (await SearchPage.items)[1].waitFor()
    }
    public async popularity() {
        // loosely sorts by review
        await this.waitForLoad()
        const page1Items = await SearchPage.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getPrice()
        }

        await this.goToPageAndWait(-2)

        const page2ndToLastItems = await SearchPage.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getPrice()
        }
        
        this.dropdownAssert(page1Total,page2ndToLastTotal)
    }
    public async rating() {
        // loosely sorts by stars
        await this.waitForLoad()
        const page1Items = await SearchPage.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getStarRating()
        }

        const middlePage = Math.ceil((await SearchPage.getPageInfo()).totalPages/2)
        await this.goToPageAndWait(middlePage)

        const page2ndToLastItems = await SearchPage.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getStarRating()
        }
        
        this.dropdownAssert(page1Total,page2ndToLastTotal, true)
    }
    public async nameAlphabetically(isReverse=false) {
        // loosely sorts by name
        function charScore(word:str):number {
            const char = word.trim().toLowerCase()[0];
            if (!char) return 0;
            return char.charCodeAt(0);
        }

        await this.waitForLoad()

        const page1Items = await SearchPage.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += charScore(await item.getTitle())
        }

        await this.goToPageAndWait(-2)

        const page2ndToLastItems = await SearchPage.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += charScore(await item.getTitle())
        }
        
        this.dropdownAssert(page1Total,page2ndToLastTotal,isReverse)
        await this.waitForLoad()
    }
    public async price(isReverse=false) {
        // loosely sorts by price
        await this.waitForLoad()
        const page1Items = await SearchPage.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getPrice()
        }

        await this.goToPageAndWait(-2)

        const page2ndToLastItems = await SearchPage.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getPrice()
        }

        this.dropdownAssert(page1Total,page2ndToLastTotal,isReverse)
        await this.waitForLoad()
    } 
}

class Assert extends Asserters {
    public get NavLinks() { return new NavLinks() }
    public get SearchBar() { return new SearchBar() }
    public get SearchPageCategories() { return new SearchPageCategories() }
    public get SearchPageSortByDropdown() { return new SearchPageSortByDropdown() }
}

export default new Assert();
