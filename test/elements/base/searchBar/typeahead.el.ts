import { str } from "../../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import MyElement from "../../element"


export default class Typeahead extends MyElement {
    constructor(private $searchBarBase:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this.$searchBarBase.$('.typeahead-searchspring-container') }
    
    private get $termsBox() { return this.$base.$('.typehaead-searchspring-terms') }
    public get $$terms() { return this.$termsBox.$$('.typehaead-searchspring-term') }

    private get $brandsBox() { return this.$base.$('.typehaead-searchspring-facets') }
    public get $$brands() { return this.$brandsBox.$$('.typehaead-searchspring-facet') }

    private get $resultsBox() { return this.$base.$('.typehaead-searchspring-results') }
    public get $resultsTitle() { return this.$resultsBox.$('.typehaead-searchspring-results-title')}
    public get $$results() { return this.$resultsBox.$$('.typehaead-searchspring-item') }
    public get $resultsFooter() { return this.$resultsBox.$('.typehaead-searchspring-searchresult-link')}
}


