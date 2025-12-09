import { bool, str, int, Int, _ } from "./utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/base/base"

class NavLinks {
    
}
class SearchBar {

}
class SearchPageCategories {

}
class SearchPageSortByDropdown {
    public async optionIsSelected(optionNum:int) {
        await base.waitForLoad()
        const option = SearchPage.SortByDropdown.options[optionNum]
        await expect(await option.isSelected()).toBe(true)
        await base.waitForLoad()
    }
    // public async relevance() {}
    
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
        await base.waitForLoad()
        await SearchPage.goToPage(pageNum)
        await base.waitForLoad()
        await SearchPage.SortByDropdown.waitFor()
        await (await SearchPage.items)[1].waitFor()
    }
    public async popularity() {
        // loosely sorts by review
        await base.waitForLoad()
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
        await base.waitForLoad()
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
        
        this.dropdownAssert(page1Total,page2ndToLastTotal)
    }
    public async nameAlphabetically(isReverse=false) {
        // loosely sorts by name
        function charScore(word:str):number {
            const char = word.trim().toLowerCase()[0];
            if (!char) return 0;
            return char.charCodeAt(0);
        }

        await base.waitForLoad()

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
    }
    public async price(isReverse=false) {
        // loosely sorts by price
        const page1Items = await SearchPage.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getPrice()
        }

        await this.goToPageAndWait(-2)
        await base.waitForLoad()

        const page2ndToLastItems = await SearchPage.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getPrice()
        }

        this.dropdownAssert(page1Total,page2ndToLastTotal,isReverse)
    } 
    // public async date() {}
}

class Assert {
    public get NavLinks() { return new NavLinks() }
    public get SearchBar() { return new SearchBar() }
    public get SearchPageCategories() { return new SearchPageCategories() }
    public get SearchPageSortByDropdown() { return new SearchPageSortByDropdown() }

    public async urlContains(path:str|RegExp|URL, isReverse=false) {
        if(path instanceof URL) {
            path = path.toString()
        }

        await base.waitForLoad()
        const currentUrl = await browser.getUrl()

        const expectUrl = (isReverse) ? expect(currentUrl).not : expect(currentUrl)
        
        await base.waitForLoad()
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
}

export default new Assert();
