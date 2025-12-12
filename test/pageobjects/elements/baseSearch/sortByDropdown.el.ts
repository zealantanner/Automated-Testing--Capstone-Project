import { int } from "../../../utils/utils"
import { $ } from "@wdio/globals"
import MyElement from "../element"


/** "Sort By" dropdown on search page */
export default class SortByDropdown extends MyElement {
    public get $base() { return $('select.facets-item-list-sort-selector') }
    /** Each sort option for the search page */
    public get $$options() { return this.$base.$$('option') }
    /** Currently chosen sort option */
    public get $selectedOption() { return this.$base.$('option[selected]') }

    /** Selects specified option */
    public async selectOption(optionNum:int) {
        await this.waitForLoad()
        await this.$base.waitForExist()
        
        await this.$base.click()

        await this.$$options[optionNum].waitForExist()
        await this.$$options[optionNum].click()
        await this.waitForLoad()
    }
}
