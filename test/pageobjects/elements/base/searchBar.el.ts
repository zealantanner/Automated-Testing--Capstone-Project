import { bool, str, int, _, pickRandomFrom, pickRandom$From } from "../../../utils/utils"
import { browser, expect, $, $ as $x } from '@wdio/globals'
import MyElement from "../element"



export default class SearchBar extends MyElement {
    public get $base() { return $('.row-one-search') }
    
    public get $inputField() { return this.$base.$('.itemssearcher-input') }
    public get $btnConfirm() { return this.$base.$('.itemssearcher-button') }
    public get Typeahead() {
        return {
            $base: this.$base.$('.typeahead-searchspring-container'),
            $$terms: this.$base.$$('.typehaead-searchspring-term'),
            Results: {
                $title: this.$base.$('typehaead-searchspring-results-title'),
                $$items: this.$base.$$('.typehaead-searchspring-item'),
                $footer: this.$base.$('.typehaead-searchspring-searchresult-link'),
            },
        }
    }

    public async clearText() {
        await this.waitForLoad()
        await this.$inputField.clearValue()
    }
    public async inputText(text:str) {
        await this.waitForLoad()
        await this.$inputField.setValue(text)
    }
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

    public async search(text:str="",ops:{pressEnterInstead?:bool}={}) {
        const {pressEnterInstead=false} = ops;
        await this.waitForLoad()

        await this.inputText(text)
        await this.activateSearch({pressEnterInstead})
    }
}