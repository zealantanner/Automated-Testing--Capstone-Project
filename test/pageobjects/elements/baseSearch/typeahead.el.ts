import MyElement from "../element"


/** Typeahead that appears when using the search bar */
export default class Typeahead extends MyElement {
    constructor(private $parentBase:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this.$parentBase.$('.typeahead-searchspring-container') }
    
    /** List of related search terms on top of typeahead */
    public get $$terms() {return this.$base.$$('.typehaead-searchspring-term') }
    /** Lower bit of typeahead, contains title, item results, and footer link */
    public get Results() {
        return {
            /** Usually says "Search results for `search term`" */
            $title: this.$base.$('.typehaead-searchspring-results-title'),
            /** Result items for this search */
            $$items: this.$base.$$('.typehaead-searchspring-item'),
            /** Bottom of the typeahead, usually says "See `x` results for `search term`" */
            $footer: this.$base.$('.typehaead-searchspring-searchresult-link'),
        }
    }
}
//> finish comments elsewhere