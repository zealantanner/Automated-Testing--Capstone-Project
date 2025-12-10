import { bool, str, int, Int, _, pickRandomFrom, pickRandom$From } from "../../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import MyElement from "../element"




export default class CategorySidebar extends MyElement {
    public get $base() { return $('[data-facet-id="ss_category"]') }
    
    public get $btnExpander() { return this.$base.$('.facets-faceted-navigation-item-facet-group-expander') }
    
    public get $$categories() { return this.$base.$$('li a') }
    public get $chosenCategory() { return this.$base.$('.facets-faceted-navigation-item-facet-option.option-active') }
    
    public async isOpen() {
        await this.waitForLoad()
        await this.$$categories[0].waitForExist()
        return this.$$categories[0].isDisplayed()
    }
    public async open() {
        await this.waitForLoad()
        await this.$btnExpander.waitForExist()
        if(!await this.isOpen()) {
            await this.$btnExpander.click()
        }
        await this.$$categories[0].waitForDisplayed()
        await this.waitForLoad()
    }
    public async close() {
        await this.waitForLoad()
        if(await this.isOpen()) {
            await this.$btnExpander.click()
        }
        await this.$$categories[0].waitForDisplayed({reverse:true})
        await this.waitForLoad()
    }
    
    public async addCategory(index?:int) {
        await this.waitForLoad()
        const $category = (index)
            ? this.$$categories[index]
            : await pickRandom$From(this.$$categories)
        await $category.click()
        await this.waitForLoad()
    }
    public async removeCategory() {
        await this.waitForLoad()
        await this.$chosenCategory.click()
        await this.waitForLoad()
    }
    public async clearCategories() {
        await this.waitForLoad()
        await this.$chosenCategory.click()
        await this.waitForLoad()
    }
}
