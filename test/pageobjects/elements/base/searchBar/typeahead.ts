import { str } from "../../../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import Element from "../../element"


export default class Typeahead extends Element {
    constructor(private searchBarBase: ChainablePromiseElement) {
        super()
    }
    public get base() { return this.searchBarBase.$('*[data-type="typeahead"]') }
    public get terms() { return this.base.$('typehaead-searchspring-terms')}
    public get facets() { return this.base.$('typehaead-searchspring-facets')}
    public get results() { return this.base.$('typehaead-searchspring-results')}
}


