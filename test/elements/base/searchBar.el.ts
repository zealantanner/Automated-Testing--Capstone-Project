import { str, waitForLoad } from "../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import MyElement from "../element"
import Typeahead from "./searchBar/typeahead.el"



export default class SearchBar extends MyElement {
    public get $base() { return $('.row-one-search') }
    
    public get Typeahead() { return new Typeahead(this.$base) }
    public get $inputField() { return this.$base.$('input[type="search"]') }
    public get $btnConfirm() { return this.$base.$('button[type="submit"]') }

    public async search(text:str="",pressEnterInstead=false) { //> click or press enter?
        await waitForLoad()
        await this.$inputField.waitForExist()
        await this.$inputField.setValue(text)
        await waitForLoad()
        await this.$btnConfirm.waitForExist()
        await this.$btnConfirm.click()
        await waitForLoad()
    }
}