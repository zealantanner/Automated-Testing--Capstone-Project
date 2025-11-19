import { str } from "../../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import Element from "../element"
import Typeahead from "./searchBar/typeahead"





export default class SearchBar extends Element {
    public get base() { return $('.row-one-search') }
    
    public get inputField() { return this.base.$('input[type="search"]')  }
    public get btnConfirm() { return this.base.$('button[type="submit"]') }
    public get Typeahead() { return new Typeahead(this.base) }

    // private static typeahead = class typeahead extends element {
    //     constructor(private searchBarBase: ChainablePromiseElement) {
    //         super();
    //     }

    //     public get base() {
    //         return this.searchBarBase.$('*[data-type="typeahead"]');
    //     }

    //     public get terms() {
    //         return this.base.$('typehaead-searchspring-terms');
    //     }

    //     public get facets() {
    //         return this.base.$('typehaead-searchspring-facets');
    //     }

    //     public get results() {
    //         return this.base.$('typehaead-searchspring-results');
    //     }
    // };
    
    public async search(text:str="") { //> click or press enter?
        await browser.pause(2000)
        await this.inputField.setValue(text)
        await browser.pause(2000)
        await this.btnConfirm.click()
        await browser.pause(2000)
    }
    
}


