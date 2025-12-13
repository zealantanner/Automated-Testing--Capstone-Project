import MyElement from "../element"
import { base } from "../../pages/base/base"


/** "Sort By" dropdown on search page */
export default class SortByDropdown extends MyElement {
    public get $base() { return $('select.facets-item-list-sort-selector') }
    /** Each sort by option on search page */
    public get $$options() { return this.$base.$$('option') }
    /** Currently chosen sort option */
    public get $selectedOption() { return this.$base.$('option[selected]') }

    /** Returns `$option` specified by index */
    public $option(index:number) {
        return this.$$options[index]
    }
    /** Selects specified sort option */
    public async selectOption(index:number) {
        await base.waitForLoad()
        await this.waitForThis()
        await this.$base.waitForClickable()
        await this.$option(index).waitForExist()
        await this.$base.selectByIndex(index)

        await base.waitForLoad()
    }
}
