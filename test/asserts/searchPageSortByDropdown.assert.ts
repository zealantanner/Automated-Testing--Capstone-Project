import { bool, str, int, getElementByText, charScore } from "../utils/utils"
import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


export default class SearchPageSortByDropdown extends AssertBase {
    /** Confirms a "Sort By" option is selected */
    public async confirmOptionIsSelected(optionNum:int) {
        await base.waitForLoad()
        const $option = baseSearch.SortByDropdown.$$options[optionNum]
        await expect(await $option.isSelected()).toBe(true)
        await base.waitForLoad()
    }

    /** Asserts `value1`>`value2` */
    private async dropdownAssert(value1:int,value2:int,ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        if(reverse) {
            await expect(value1).toBeLessThan(value2)
        } else {
            await expect(value1).toBeGreaterThan(value2)
        }
    }

    /** Goes to page `pageNum` and waits for everything load */
    private async goToPageAndWait(pageNum:int) {
        await base.waitForLoad()
        await baseSearch.goToPage(pageNum)
        await base.waitForLoad()
        await baseSearch.SortByDropdown.waitFor()
        await (await baseSearch.items)[1].waitFor()
    }

    /** Confirms "Highest Rating" by total reviews */
    public async confirmPopularity() {
        await base.waitForLoad()

        const page1Items = await baseSearch.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getPrice()
        }
        await this.goToPageAndWait(-2)

        const page2ndToLastItems = await baseSearch.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getPrice()
        }
        await this.dropdownAssert(page1Total,page2ndToLastTotal)
    }

    /** Confirms "Highest Rating" by total stars */
    public async confirmRating() {
        await base.waitForLoad()

        const page1Items = await baseSearch.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getStarRating()
        }
        
        const middlePage = Math.ceil((await baseSearch.getPageInfo()).totalPages/2)
        await this.goToPageAndWait(middlePage)

        const page2ndToLastItems = await baseSearch.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getStarRating()
        }

        await this.dropdownAssert(page1Total,page2ndToLastTotal)
    }

    /** Confirms "Name" by total letter score */
    public async confirmNameAlphabetically(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const page1Items = await baseSearch.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += charScore(await item.getTitle())
        }
        await this.goToPageAndWait(-2)

        const page2ndToLastItems = await baseSearch.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += charScore(await item.getTitle())
        }

        await this.dropdownAssert(page1Total,page2ndToLastTotal,{reverse:!reverse})
    }

    /** Confirms "Price" by total price */
    public async confirmPrice(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        const page1Items = await baseSearch.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getPrice()
        }
        await this.goToPageAndWait(-2)

        const page2ndToLastItems = await baseSearch.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getPrice()
        }

        await this.dropdownAssert(page1Total,page2ndToLastTotal,{reverse:!reverse})
    } 
}
