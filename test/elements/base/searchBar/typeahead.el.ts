import { str } from "../../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import MyElement from "../../element"


export default class Typeahead extends MyElement {
    constructor(private $searchBarBase:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this.$searchBarBase.$('*[data-type="typeahead"]') }
    
    public get $terms() {return this.$base.$('typehaead-searchspring-terms')}
    public get $brands() { return this.$base.$('typehaead-searchspring-facets')}
    public get $results() { return this.$base.$('typehaead-searchspring-results')}
}


