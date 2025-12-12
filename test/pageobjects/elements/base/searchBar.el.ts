import { bool, str } from "../../../utils/utils"
import { browser, $ } from '@wdio/globals'
import MyElement from "../element"
import Typeahead from "../baseSearch/typeahead.el"
import { base } from "../../pages/base/base"


/** Search bar on top of page */
export default class SearchBar extends MyElement {
    public get $base() { return $('.row-one-search') }
    /** Text field for search bar */
    public get $inputField() { return this.$base.$('.itemssearcher-input') }
    /** Search button for search bar */
    public get $btnConfirm() { return this.$base.$('.itemssearcher-button') }

    /** Typeahead when using search bar */
    public get Typeahead() { return new Typeahead(this.$base) }

    /** Sets value of `$inputField` to `text` */
    public async inputText(text:str) {
        await base.waitForLoad()
        await this.$inputField.setValue(text)
    }

    /** Types each character from `text` to `$inputField` */
    public async typeText(text:str) {
        await base.waitForLoad()
        await this.$inputField.waitForExist()

        await this.$inputField.click()
        for(const char of text) {
            await browser.keys(char)
        }
    }

    /** Activates search by clicking search button or pressing `enter` */
    public async activateSearch(ops:{pressEnterInstead?:bool}={}) {
        const {pressEnterInstead=false} = ops;
        await base.waitForLoad()
        
        if(pressEnterInstead) {
            await this.$inputField.click()
            await browser.keys('Enter')
        } else {
            await this.$btnConfirm.click()
        }
    }

    /** Inputs `text` and activates search */
    public async search(text:str="",ops:{pressEnterInstead?:bool}={}) {
        const {pressEnterInstead=false} = ops;
        await base.waitForLoad()

        await this.inputText(text)
        await this.activateSearch({pressEnterInstead})
    }
}
