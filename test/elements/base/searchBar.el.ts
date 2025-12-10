import { str, waitForLoad } from "../../utils/utils"
import { browser, expect, $, $ as $x } from '@wdio/globals'
import MyElement from "../element"
import Typeahead from "./searchBar/typeahead.el"



export default class SearchBar extends MyElement {
    public get $base() { return $('.row-one-search') }
    
    public get Typeahead() { return new Typeahead(this.$base) }
    public get $inputField() { return this.$base.$('input[type="search"]') }
    public get $btnConfirm() { return this.$base.$('button[type="submit"]') }


    public async clearText() {
        await waitForLoad()
        await this.$inputField.waitForExist()
        await this.$inputField.clearValue()
        await waitForLoad()
    }
    public async inputText(text:str) {
        await waitForLoad()
        await this.$inputField.waitForExist()
        await this.$inputField.setValue(text)
        await waitForLoad()
    }
    public async activateSearch(pressEnterInstead=false) {
        await waitForLoad()
        if(pressEnterInstead) {
            await this.$inputField.waitForExist()
            await this.$inputField.click()
            await waitForLoad()
            await browser.keys('Enter')
        } else {
            await this.$btnConfirm.waitForExist()
            await this.$btnConfirm.click()
        }
        await waitForLoad()
    }

    public async search(text:str="",pressEnterInstead=false) {
        await waitForLoad()
        this.inputText(text)
        this.activateSearch(pressEnterInstead)
        await waitForLoad()
    }


}