import { bool, str, int, _, pickRandomFrom, pickRandom$From } from "../../../utils/utils"
import { browser, expect, $, $ as $x } from '@wdio/globals'
import MyElement from "../element"
import Typeahead from "../baseSearch/typeahead.el"



export default class SearchBar extends MyElement {
    public get $base() { return $('.row-one-search') }
    
    public get $inputField() { return this.$base.$('.itemssearcher-input') }
    public get $btnConfirm() { return this.$base.$('.itemssearcher-button') }
    public get Typeahead() { return new Typeahead(this.$base) }

    public async clearText() {
        await this.waitForLoad()
        
        await this.$inputField.click()
        await browser.keys(['Control', 'a'])
        await browser.keys('Backspace')
    }
    public async inputText(text:str) {
        await this.waitForLoad()
        await this.$inputField.setValue(text)
    }
    public async inputTextViaTyping(text:str) {
        await this.waitForLoad()
        await this.$inputField.waitForExist()

        await this.$inputField.click()
        for(const char of text) {
            await browser.keys(char)
        }
    }
    public async clearAndInput(text:str) {
        await this.waitForLoad()
        await this.clearText()
        
        await this.waitForLoad()
        await this.inputText(text)
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
        await this.waitForLoad()
    }

    public async search(text:str="",ops:{pressEnterInstead?:bool}={}) {
        const {pressEnterInstead=false} = ops;
        await this.waitForLoad()

        await this.inputText(text)
        await this.activateSearch({pressEnterInstead})
    }
}