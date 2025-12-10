import { bool, str, int, Int, _, waitForLoad } from "../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import MyElement from "../element"



export default class SortByDropdown extends MyElement {
    public get $base() { return $('select.facets-item-list-sort-selector') }

    public get $$options() { return this.$base.$$('option') }
    public get $selectedOption() { return this.$base.$('option[selected]') }

    public async selectOption(optionNum:int) {
        await waitForLoad()
        await this.$base.click()
        await waitForLoad()
        await this.$$options[optionNum].waitForExist()
        await this.$$options[optionNum].click()
        await waitForLoad()
    }
}

