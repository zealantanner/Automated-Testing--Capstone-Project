import { bool, str, int, Int, _, getElementByText } from "../utils/utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/pages/base/base"
import AssertBase from "./assert.base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


export default class SearchPageCategories extends AssertBase {
    public async confirmClosed() {
        await base.waitForLoad()
        const isOpen = await baseSearch.CategorySidebar.isOpen()
        await expect(isOpen).toBe(false)
        await base.waitForLoad()
    }
    public async confirmOpened() {
        await base.waitForLoad()
        const isOpen = await baseSearch.CategorySidebar.isOpen()
        await expect(isOpen).toBe(true)
        await base.waitForLoad()
    }

    public async confirmCategoryDisplayed(isReverse=false) {
        await base.waitForLoad()

        const isCategoryDisplayed = await baseSearch.CategorySidebar.$chosenCategory.isDisplayed()
        await expect(isCategoryDisplayed).not.toBe(isReverse)

        await base.waitForLoad()
    }
    public async confirmItemsFiltered(beforeItemAmount:int, isReverse=false) {
        await base.waitForLoad()

        const itemAmount = await baseSearch.getresultAmount()
        if(isReverse) {
            await expect(itemAmount).toBeGreaterThan(beforeItemAmount)
        } else {
            await expect(itemAmount).toBeLessThan(beforeItemAmount)
        }
        await base.waitForLoad()
    }


    // public async optionIsSelected(optionNum:int) {
    //     await base.waitForLoad()
    //     const option = SearchPage.SortByDropdown.$$options[optionNum]
    //     await expect(await option.isSelected()).toBe(true)
    //     await base.waitForLoad()
    // }
    // private dropdownAssert(value1:int,value2ndToLast:int,isReverse=false) {
    //     if(isReverse) {
    //         expect(value1).toBeGreaterThan(value2ndToLast)
    //     } else {
    //         expect(value1).toBeLessThan(value2ndToLast)
    //     }
    // }
    // private async goToPageAndWait(pageNum:int) {
    //     await base.waitForLoad()
    //     await SearchPage.goToPage(pageNum)
    //     await base.waitForLoad()
    //     await SearchPage.SortByDropdown.waitFor()
    //     await (await SearchPage.items)[1].waitFor()
    // }

}
