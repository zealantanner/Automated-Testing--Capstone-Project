import { bool, str, int, getElementByText } from "../utils/utils"
import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


export default class SearchPageCategories extends AssertBase {
    /** Confirms the category dropdown is open */
    public async confirmOpen(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        
        const $topCategory = baseSearch.CategorySidebar.$$categories[0]
        if(reverse) {
            await expect($topCategory).not.toBeDisplayed()
        } else {
            await expect($topCategory).toBeDisplayed()
        }
    }

    /** Confirms category is active */
    public async confirmCategoryChosen(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        
        const $chosenCategory = baseSearch.CategorySidebar.$chosenCategory
        if(reverse) {
            await expect($chosenCategory).not.toBeDisplayed()
        } else {
            await expect($chosenCategory).toBeDisplayed()
        }
//> [firefox 146.0 windows #0-2] Expect $(`[data-facet-id="ss_category"]`).$(`.facets-faceted-navigation-item-facet-option.option-active`) to be displayed
//> Expected: "displayed"
//> Received: "not displayed"
    }

    /** Confirms items are filtered, should be less than before */
    public async confirmItemsFiltered(beforeItemAmount:int, ops:{reverse?:bool}={}) {
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
