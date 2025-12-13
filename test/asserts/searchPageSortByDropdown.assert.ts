import { charScore } from "../utils/utils"
import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


/** Don't use this, use `Assert.SearchPageSortByDropdown` instead */
export default class SearchPageSortByDropdown extends AssertBase {
    /** Asserts a "Sort By" option is selected */
    public async assertOptionIsSelected(index:number) {
        await base.waitForLoad()
        
        const $option = baseSearch.SortByDropdown.$option(index)
        await expect($option).toBeSelected()
        await base.waitForLoad()
    }

    /** Goes to page `pageNum` and waits for everything load */
    private async goToPageAndWait(pageNum:number) {
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
        await expect(page1Total).toBeGreaterThan(page2ndToLastTotal)
    }
    /** Asserts "Highest Rated" by stars */
    public async assertRating() {
        await base.waitForLoad()

        const page1Items = await baseSearch.items
        let page1Total = 0
        for(const item of page1Items) {
            page1Total += await item.getStarRating()
        }

        const middlePage = Math.ceil((await baseSearch.getPageInfo()).totalPagesNumber/2)
        await this.goToPageAndWait(middlePage)

        const page2ndToLastItems = await baseSearch.items
        let page2ndToLastTotal = 0
        for(const item of page2ndToLastItems) {
            page2ndToLastTotal += await item.getStarRating()
        }
        await expect(page1Total).toBeGreaterThan(page2ndToLastTotal)
    }
    /** Asserts "Name" by letter score */
    public async assertNameAlphabetically(ops:{reverse?:boolean}={}) {
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
        if(reverse) {
            await expect(page1Total).toBeGreaterThan(page2ndToLastTotal)
        } else {
            await expect(page1Total).toBeLessThan(page2ndToLastTotal)
        }
    }
    /** Asserts "Price" by price */
    public async assertPrice(ops:{reverse?:boolean}={}) {
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
        if(reverse) {
            await expect(page1Total).toBeGreaterThan(page2ndToLastTotal)
        } else {
            await expect(page1Total).toBeLessThan(page2ndToLastTotal)
        }
    } 
}
