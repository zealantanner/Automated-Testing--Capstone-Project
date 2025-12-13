import { browser } from '@wdio/globals'
import MyElement from "../element"
import Typeahead from "./typeahead.el"
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

    /** Sets value of `$inputField` to "" */
    public async clearText() {
        await base.waitForLoad()
        await this.$inputField.setValue("")
    }
    /** Sets value of `$inputField` to `text` */
    public async inputText(text:string) {
        await base.waitForLoad()
        await this.$inputField.setValue(text)
    }
    /** Types each character from `text` to `$inputField` */
    public async typeText(text:string) {
        await base.waitForLoad()

        await this.$inputField.click()
        for(const char of text) {
            await browser.keys(char)
        }
    }

    /** Activates search by clicking search button or pressing `enter` */
    public async activateSearch(ops:{submitWithEnter?:boolean}={}) {
        const {submitWithEnter=false} = ops;
        await base.waitForLoad()
        
        if(submitWithEnter) {
            await this.$inputField.click()
            await browser.keys('Enter')
        } else {
            await this.$btnConfirm.click()
        }
    }
    /** Inputs `text` and activates search */
    public async search(text:string="",ops:{pressEnterInstead?:boolean}={}) {
        const {pressEnterInstead=false} = ops;
        await base.waitForLoad()

        await this.inputText(text)
        await this.activateSearch({submitWithEnter: pressEnterInstead})
    }
}
