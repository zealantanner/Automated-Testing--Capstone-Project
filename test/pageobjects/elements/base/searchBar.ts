import { str } from "../../../utils/utils"
import element from "../element"
import { $, $ as $x } from "@wdio/globals"


export default class searchBar extends element {
    public get base() { return $('#elasticsuite-search-container') }
    public get inputField() { return this.base.$('input#search') }
    public get btnConfirm() { return this.base.$('button[type="submit"]') }
    public get btnClear() { return this.base.$('svg[aria-label="close"]') }
    
    public async search(text:str="") { //> click or press enter?
        await this.inputField.setValue(text)
        await this.btnConfirm.click()
    }
}


