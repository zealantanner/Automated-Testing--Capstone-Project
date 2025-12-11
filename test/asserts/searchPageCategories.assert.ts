import { bool, int } from "../utils/utils"
import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


export default class SearchPageCategories extends AssertBase {
    /** Asserts the category dropdown is open */
    public async assertOpen(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        
        const $topCategory = baseSearch.CategorySidebar.$$categories[0]
        if(reverse) {
            await expect($topCategory).not.toBeDisplayed()
        } else {
            await expect($topCategory).toBeDisplayed()
        }
    }

    /** Asserts category is active */
    public async assertCategoryChosen(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        
        const $chosenCategory = baseSearch.CategorySidebar.$chosenCategory
        await $chosenCategory.waitForExist()
        if(reverse) {
            await expect($chosenCategory).not.toBeDisplayed()
        } else {
            await expect($chosenCategory).toBeDisplayed()
        }
    }

    /** Asserts items are filtered, should be less than before */
    public async assertItemsFiltered(beforeItemAmount:int, ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const itemAmount = await baseSearch.getTotalResultAmount()
        if(reverse) {
            expect(itemAmount).toBeGreaterThan(beforeItemAmount)
        } else {
            expect(itemAmount).toBeLessThan(beforeItemAmount)
        }
    }
}
