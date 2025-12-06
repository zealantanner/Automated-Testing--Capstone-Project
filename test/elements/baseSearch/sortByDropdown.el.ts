import { bool, str, int, Int, _ } from "../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import Element from "../element"
import Category from "./categorySidebar/category.els"



export default class SortByDropdown extends Element {
    public get base() { return $('select.facets-item-list-sort-selector') }

    public get options() { return this.base.$$('option') }
    // public get selectedOption() { return this.base.$('option[selected]') }

    public async selectOption(optionNum:int) {
        await this.waitFor()
        await this.base.click()
        await this.options[optionNum].click()
        await this.waitFor()
    }
    public async assertOptionIsSelected(optionNum:int) {
        const option = this.options[optionNum]
        // await option.waitForExist()
        // const optionToAssertText = await option.getText()
        await expect(await option.isSelected()).toBe(true)
        // await expect(optionToAssertText).toBe("bug")

        // options[optionNum].getAttribute("selected")
        // const thing = await options[optionNum].issele
        // const optionToAssertText = await this.options[optionNum].getText()
        // const selectedOptionText = await this.selectedOption.getAttribute("selected")
        // await expect(optionToAssertText).toEqual(selectedOptionText+"1")
    }
}

