import { bool, str, int, Int, _, waitForLoad, pickRandomFrom, pickRandom$From } from "../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import MyElement from "../element"




export default class CategorySidebar extends MyElement {
    public get $base() { return $('[data-facet-id="ss_category"]') }
    
    public get $btnExpander() { return this.$base.$('.facets-faceted-navigation-item-facet-group-expander') }
    
    public get $$categories() { return this.$base.$$('li a') }
    public get $chosenCategory() { return this.$base.$('.option-active') }
    
    public async isOpen() {
        await waitForLoad()
        await this.$$categories[0].waitForExist()
        return this.$$categories[0].isDisplayed()
    }
    public async open() {
        await waitForLoad()
        await this.$btnExpander.waitForExist()
        if(!await this.isOpen()) {
            await this.$btnExpander.click()
        }
        await this.$$categories[0].waitForDisplayed()
        await waitForLoad()
    }
    public async close() {
        await waitForLoad()
        if(await this.isOpen()) {
            await this.$btnExpander.click()
        }
        await this.$$categories[0].waitForDisplayed({reverse:true})
        await waitForLoad()
    }
    
    public async addCategory(index?:int) {
        await waitForLoad()
        const $category = (index)
            ? this.$$categories[index]
            : await pickRandom$From(this.$$categories)
        await $category.click()
        await waitForLoad()
    }
    public async removeCategory() {
        await waitForLoad()
        await this.$chosenCategory.click()
        await waitForLoad()
    }
}
