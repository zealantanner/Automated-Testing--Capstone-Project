import { bool, str, int, Int, _ } from "./utils"
import SearchPage from "../pageobjects/pages/search.page"

class NavLinks {
    
}
class SearchBar {

}
class SearchPageCategories {

}
class SearchPageSortByDropdown {
    public async optionIsSelected(optionNum:int) {
        const option = SearchPage.SortByDropdown.options[optionNum]
        await expect(await option.isSelected()).toBe(true)
    }
    // public async relevance() {}
    
    private async goToPage2ndToLast() {
        await SearchPage.goToPage(-2)
        await SearchPage.SortByDropdown.waitFor()
        await (await SearchPage.items)[1].waitFor()
    }
    public async popularity() {
        // loosely sorts by review
        const page1Items = await SearchPage.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getPrice()
        }

        await this.goToPage2ndToLast()

        const page2ndToLastItems = await SearchPage.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getPrice()
        }
        
        await expect(page1Total).toBeGreaterThan(page2ndToLastTotal)
    }
    public async rating() {
        // loosely sorts by stars
        const page1Items = await SearchPage.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getStarRating()
        }

        await this.goToPage2ndToLast()

        const page2ndToLastItems = await SearchPage.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getStarRating()
        }
        
        await expect(page1Total).toBeGreaterThan(page2ndToLastTotal)
    }
    public async nameAlphabetically(isReverse=false) {
        // loosely sorts by name
        function letterScore(word:str):number {
            const char = word.trim().toLowerCase()[0];
            if (!char || char < 'a' || char > 'z') return 0;
            return char.charCodeAt(0) - 96; // a=1, b=2, ...
        }

        const page1Items = await SearchPage.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += letterScore(await item.getTitle())
        }

        await this.goToPage2ndToLast()

        const page2ndToLastItems = await SearchPage.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += letterScore(await item.getTitle())
        }
        
        if(isReverse) {
            await expect(page1Total).toBeLessThan(page2ndToLastTotal)
        } else {
            await expect(page1Total).toBeGreaterThan(page2ndToLastTotal)
        }
    }
    public async price(isReverse=false) {
        // loosely sorts by price
        const page1Items = await SearchPage.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getPrice()
        }

        await this.goToPage2ndToLast()

        const page2ndToLastItems = await SearchPage.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getPrice()
        }

        if(isReverse) {
            await expect(page1Total).toBeLessThan(page2ndToLastTotal)
        } else {
            await expect(page1Total).toBeGreaterThan(page2ndToLastTotal)
        }
    } 
    // public async date() {}
}

class Assert {
    public get NavLinks() { return new NavLinks() }
    public get SearchBar() { return new SearchBar() }
    public get SearchPageCategories() { return new SearchPageCategories() }
    public get SearchPageSortByDropdown() { return new SearchPageSortByDropdown() }

    public async urlContains(path:str|RegExp|URL, isReverse=false) {
        if(path instanceof URL) path = path.toString()

        const currentUrl = await browser.getUrl()

        const expectUrl = (isReverse) ? expect(currentUrl).not : expect(currentUrl)
        
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
}

export default new Assert();
