import { bool, str, int, Int, _, getElementByText, charScore } from "../utils/utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/pages/base/base"
import AssertBase from "./assert.base"


export default class SearchPageSortByDropdown extends AssertBase {
    public async confirmOptionIsSelected(optionNum:int) {
        await base.waitForLoad()
        const option = SearchPage.SortByDropdown.$$options[optionNum]
        await expect(await option.isSelected()).toBe(true)
        await base.waitForLoad()
    }
    private dropdownAssert(value1:int,value2ndToLast:int,isReverse=false) {
        if(isReverse) {
            expect(value1).toBeGreaterThan(value2ndToLast)
        } else {
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
    public async confirmPopularity() {
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
    public async confirmRating() {
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
        
        this.dropdownAssert(page1Total,page2ndToLastTotal, true)
    }
    public async confirmNameAlphabetically(isReverse=false) {
        // loosely sorts by name
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
        await base.waitForLoad()
    }
    public async confirmPrice(isReverse=false) {
        // loosely sorts by price
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

        this.dropdownAssert(page1Total,page2ndToLastTotal,isReverse)
        await base.waitForLoad()
    } 
}
