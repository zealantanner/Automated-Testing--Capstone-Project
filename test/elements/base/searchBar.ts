import { str } from "../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import Element from "../element"
import Typeahead from "./searchBar/typeahead"





export default class SearchBar extends Element {
    //> use something like the python library for finding closest word for tpyoes... maybe
    public get base() { return $('.row-one-search') }
    
    public get inputField() { return this.base.$('input[type="search"]')  }
    public get btnConfirm() { return this.base.$('button[type="submit"]') }
    public get Typeahead() { return new Typeahead(this.base) }

    public async search(text:str="") { //> click or press enter?
        await this.waitFor()
        // await browser.pause(2000)
        await this.inputField.setValue(text)
        // await browser.pause(2000)
        await this.btnConfirm.click()
        // await browser.pause(2000)
    }
    
}


