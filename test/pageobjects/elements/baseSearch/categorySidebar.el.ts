import { random$From } from "../../../utils/utils"
import { base } from "../../pages/base/base"
import MyElement from "../element"


/** Category sidebar menu on search page */
export default class CategorySidebar extends MyElement {
    public get $base() { return $('[data-facet-id="ss_category"]') }
    /** Category dropdown button */
    public get $btnExpander() { return this.$base.$('.facets-faceted-navigation-item-facet-group-expander') }
    /** Categories in category sidebar */
    public get $$categories() { return this.$base.$$('li a') }
    /** Currently applied category. Top in category sidebar */
    public get $chosenCategory() { return this.$base.$('.facets-faceted-navigation-item-facet-option.option-active') }
    
    /** Returns a `boolean` for if category dropdown is open */
    public async isOpen() {
        await base.waitForLoad()
        return this.$$categories[0].isDisplayed()
    }
    /** Clicks to open category dropdown */
    public async clickToOpen() {
        await base.waitForLoad()
        // await this.$btnExpander.waitForExist()
        if(!await this.isOpen()) {
            await this.$btnExpander.click()
        }
        // await this.$$categories[0].waitForDisplayed()
    }
    /** Clicks to close category dropdown */
    public async clickToClose() {
        await base.waitForLoad()
        if(await this.isOpen()) {
            await this.$btnExpander.click()
        }
        await this.$$categories[0].waitForDisplayed({reverse:true})
    }
    /** Clicks to add a random category unless specified by `index?` */
    public async addCategory(ops:{index?:number,preferFirstHalf?:boolean}={}) {
        const {index,preferFirstHalf=false} = ops;
        await base.waitForLoad()
        const $category = (index)
            ? this.$$categories[index]
            : await random$From(this.$$categories, {preferFirstHalf})
        await $category.click()
    }
    /** Clicks added category to remove it */
    public async removeCategory() {
        await base.waitForLoad()
        await this.$chosenCategory.waitForExist()
        await this.$chosenCategory.click()
    }
}
