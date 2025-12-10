import { bool, str, int, Int, _, getElementByText, waitForLoad } from "../../utils/utils"
import SearchPage from "../../pageobjects/pages/search.page"
import { base } from "../../pageobjects/base/base"
import { Asserters } from "../assert"
import { baseSearch } from "../../pageobjects/base/baseSearch"


export default class SearchPageCategories extends Asserters {
    public async confirmClosed() {
        await waitForLoad()
        const isOpen = await baseSearch.CategorySidebar.isOpen()
        await expect(isOpen).toBe(false)
        await waitForLoad()
    }
    public async confirmOpened() {
        await waitForLoad()
        const isOpen = await baseSearch.CategorySidebar.isOpen()
        await expect(isOpen).toBe(true)
        await waitForLoad()
    }

    public async confirmCategoryDisplayed(isReverse=false) {
        await waitForLoad()
        await baseSearch.CategorySidebar.$chosenCategory.waitForExist()
        const isCategoryDisplayed = await baseSearch.CategorySidebar.$chosenCategory.isDisplayed()
        if(!isReverse) {
            await expect(isCategoryDisplayed).toBe(true)
        } else {
            await expect(isCategoryDisplayed).toBe(false)
        }
        await waitForLoad()
    }
    public async confirmItemsFiltered(beforeItemAmount:int, isReverse=false) {
        await waitForLoad()
        const itemAmount = await baseSearch.getresultAmount()
        if(!isReverse) {
            await expect(itemAmount).toBeLessThan(beforeItemAmount)
        } else {
            await expect(itemAmount).toBeGreaterThan(beforeItemAmount)
        }
        await waitForLoad()
    }


    // public async optionIsSelected(optionNum:int) {
    //     await waitForLoad()
    //     const option = SearchPage.SortByDropdown.$$options[optionNum]
    //     await expect(await option.isSelected()).toBe(true)
    //     await waitForLoad()
    // }
    // private dropdownAssert(value1:int,value2ndToLast:int,isReverse=false) {
    //     if(isReverse) {
    //         expect(value1).toBeGreaterThan(value2ndToLast)
    //     } else {
    //         expect(value1).toBeLessThan(value2ndToLast)
    //     }
    // }
    // private async goToPageAndWait(pageNum:int) {
    //     await waitForLoad()
    //     await SearchPage.goToPage(pageNum)
    //     await waitForLoad()
    //     await SearchPage.SortByDropdown.waitFor()
    //     await (await SearchPage.items)[1].waitFor()
    // }

}
