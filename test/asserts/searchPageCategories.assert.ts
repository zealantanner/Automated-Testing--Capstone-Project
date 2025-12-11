import { bool, str, int, _, getElementByText } from "../utils/utils"
import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


export default class SearchPageCategories extends AssertBase {
    public async confirmClosed() {
        await base.waitForLoad()

        const isOpen = await baseSearch.CategorySidebar.isOpen()
        await expect(isOpen).toBe(false)
    }
    public async confirmOpened() {
        await base.waitForLoad()

        const isOpen = await baseSearch.CategorySidebar.isOpen()
        await expect(isOpen).toBe(true)
    }

    public async confirmCategoryDisplayed(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        if(reverse) {
            await expect(baseSearch.CategorySidebar.$chosenCategory).not.toBeDisplayed()
        } else {
            await expect(baseSearch.CategorySidebar.$chosenCategory).toBeDisplayed()
        }
    }
    public async confirmItemsFiltered(beforeItemAmount:int, ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const itemAmount = await baseSearch.getresultAmount()
        if(reverse) {
            await expect(itemAmount).toBeGreaterThan(beforeItemAmount)
        } else {
            await expect(itemAmount).toBeLessThan(beforeItemAmount)
        }
    }
}
