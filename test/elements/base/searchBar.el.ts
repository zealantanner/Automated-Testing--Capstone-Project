import { str } from "../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import Element from "../element"
import Typeahead from "./searchBar/typeahead.el"





export default class SearchBar extends Element {
    public get base() { return $('.row-one-search') }
    
    public get Typeahead() { return new Typeahead(this.base) }
    public get inputField() { return this.base.$('input[type="search"]')  }
    public get btnConfirm() { return this.base.$('button[type="submit"]') }

    public async search(text:str="") { //> click or press enter?
        await this.waitFor()
        await this.inputField.waitForExist()
        await this.inputField.setValue(text)
        await this.btnConfirm.waitForExist()
        await this.btnConfirm.click()
    }
}


