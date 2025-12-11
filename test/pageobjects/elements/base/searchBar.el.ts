import { bool, str } from "../../../utils/utils"
import { browser, $ } from '@wdio/globals'
import MyElement from "../element"
import Typeahead from "../baseSearch/typeahead.el"


/** The search bar on the top of the page */
export default class SearchBar extends MyElement {
    public get $base() { return $('.row-one-search') }
    public get $inputField() { return this.$base.$('.itemssearcher-input') }
    public get $btnConfirm() { return this.$base.$('.itemssearcher-button') }

    /** Typeahead that appears when using the search bar */
    public get Typeahead() { return new Typeahead(this.$base) }

    /** Sets the value of the input field to `text` */
    public async inputText(text:str) {
        await this.waitForLoad()
        await this.$inputField.setValue(text)
    }

    /** Types each character from `text` in the input field */
    public async typeText(text:str) {
        await this.waitForLoad()
        await this.$inputField.waitForExist()

        await this.$inputField.click()
        for(const char of text) {
            await browser.keys(char)
        }
    }

    /** Activates search by clicking search button or pressing `enter` */
    public async activateSearch(ops:{pressEnterInstead?:bool}={}) {
        const {pressEnterInstead=false} = ops;
        await this.waitForLoad()
        
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
        await this.waitForLoad()

        await this.inputText(text)
        await this.activateSearch({pressEnterInstead})
    }
}
