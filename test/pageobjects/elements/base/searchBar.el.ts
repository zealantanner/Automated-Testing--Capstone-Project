import { bool, str, int, Int, _, pickRandomFrom, pickRandom$From } from "../../../utils/utils"
import { browser, expect, $, $ as $x } from '@wdio/globals'
import MyElement from "../element"



export default class SearchBar extends MyElement {
    public get $base() { return $('.row-one-search') }
    
    
    
    public get $inputField() { return this.$base.$('.itemssearcher-input') }
    public get $btnConfirm() { return this.$base.$('.itemssearcher-button') }
    public get Typeahead() {
        return {
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
        // await this.$inputField.waitForExist()
        await this.$inputField.clearValue()
        await this.waitForLoad()
    }
    public async inputText(text:str) {
        await this.waitForLoad()
        // await this.$inputField.waitForExist()
        await this.$inputField.setValue(text)
        // await this.waitForLoad()
    }
    public async activateSearch(pressEnterInstead=false) {
        // await this.waitForLoad()
        if(pressEnterInstead) {
            // await this.$inputField.waitForExist()
            await this.$inputField.click()
            // await this.waitForLoad()
            await browser.keys('Enter')
        } else {
            // await this.$btnConfirm.waitForExist()
            await this.$btnConfirm.click()
        }
        await this.waitForLoad()
    }

    public async search(text:str="",pressEnterInstead=false) {
        await this.waitForLoad()
        await this.inputText(text)
        await this.activateSearch(pressEnterInstead)
        await this.waitForLoad()
    }
}