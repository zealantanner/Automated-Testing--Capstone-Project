import { bool, int, charScore } from "../utils/utils"
import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


/** Testing "Sort By" dropdown on search page */
export default class SearchPageSortByDropdown extends AssertBase {
    /** Asserts a "Sort By" option is selected */
    public async assertOptionIsSelected(optionNum:int) {
        await base.waitForLoad()
        const $option = baseSearch.SortByDropdown.$$options[optionNum]
        await expect(await $option.isSelected()).toBe(true)
        await base.waitForLoad()
    }

    /** Goes to page `pageNum` and waits for everything load */
    private async goToPageAndWait(pageNum:int) {
        await base.waitForLoad()
        await baseSearch.goToPage(pageNum)
        await base.waitForLoad()
        await baseSearch.SortByDropdown.waitForThis()
        await (await baseSearch.items)[1].waitForThis()
    }

    /** Asserts "Most Popular" by reviews */
    public async assertPopularity() {
        await base.waitForLoad()

        const page1Items = await baseSearch.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getReviewCount()
        }

        await this.goToPageAndWait(-2)

        const page2ndToLastItems = await baseSearch.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getReviewCount()
        }
        await this.assertCompareValues(page1Total,page2ndToLastTotal)
    }

    /** Asserts "Highest Rating" by stars */
    public async assertRating() {
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
        await this.assertCompareValues(page1Total,page2ndToLastTotal)
    }

    /** Asserts "Name" by letter score */
    public async assertNameAlphabetically(ops:{reverse?:bool}={}) {
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
        await this.assertCompareValues(page1Total,page2ndToLastTotal,{reverse:!reverse})
    }

    /** Asserts "Price" by price */
    public async assertPrice(ops:{reverse?:bool}={}) {
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
        await this.assertCompareValues(page1Total,page2ndToLastTotal,{reverse:!reverse})
    } 
}
