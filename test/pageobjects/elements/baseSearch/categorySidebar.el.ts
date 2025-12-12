import { bool, int, random$From } from "../../../utils/utils"
import MyElement from "../element"


/** Category menu on search page */
export default class CategorySidebar extends MyElement {
    public get $base() { return $('[data-facet-id="ss_category"]') }
    public get $btnExpander() { return this.$base.$('.facets-faceted-navigation-item-facet-group-expander') }
    public get $$categories() { return this.$base.$$('li a') }
    public get $chosenCategory() { return this.$base.$('.facets-faceted-navigation-item-facet-option.option-active') }
    
    /** Returns a `bool` for if the category dropdown is open */
    public async isOpen() {
        await this.waitForLoad()
        return this.$$categories[0].isDisplayed()
    }

    /** Clicks to open the category dropdown */
    public async open() {
        await this.waitForLoad()
        await this.$btnExpander.waitForExist()
        if(!await this.isOpen()) {
            await this.$btnExpander.click()
        }
        await this.$$categories[0].waitForDisplayed()
    }

    /** Clicks to close the category dropdown */
    public async close() {
        await this.waitForLoad()
        if(await this.isOpen()) {
            await this.$btnExpander.click()
        }
        await this.$$categories[0].waitForDisplayed({reverse:true})
    }

    /** Clicks to add a random category unless specified by `index?` */
    public async addCategory(ops:{index?:int,preferFirstHalf?:bool}={}) {
        const {index,preferFirstHalf=false} = ops;
        await this.waitForLoad()
        const $category = (index)
            ? this.$$categories[index]
            : await random$From(this.$$categories, {preferFirstHalf})
        await $category.click()
    }

    /** Clicks the added category to remove it */
    public async removeCategory() {
        await this.waitForLoad()
        await this.$chosenCategory.waitForExist()
        await this.$chosenCategory.click()
    }
}
