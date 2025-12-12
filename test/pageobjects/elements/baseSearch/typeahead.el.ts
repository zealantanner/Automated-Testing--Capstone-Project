import MyElement from "../element"


/** Typeahead that appears when using search bar */
export default class Typeahead extends MyElement {
    constructor(private $parentBase:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this.$parentBase.$('.typeahead-searchspring-container') }
    
    /** List of related search terms on top section of typeahead */
    public get $$terms() {return this.$base.$$('.typehaead-searchspring-term') }
    /** Title, item results, and footer on lower section of typeahead */
    public get Results() {
        return {
            /** Above item results in typeahead
             * 
             *  Usually says "Search results for `search term`" */
            $title: this.$base.$('.typehaead-searchspring-results-title'),
            /** Result items for current search */
            $$items: this.$base.$$('.typehaead-searchspring-item'),
            /** Bottom of typeahead
             * 
             *  Usually says "See `x` results for `search term`" */
            $footer: this.$base.$('.typehaead-searchspring-searchresult-link'),
        }
    }
}
