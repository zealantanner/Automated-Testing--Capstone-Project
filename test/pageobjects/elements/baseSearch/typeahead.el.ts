import MyElement from "../element"


/** Typeahead that appears when using the search bar */
export default class Typeahead extends MyElement {
    constructor(private $parentBase:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this.$parentBase.$('.typeahead-searchspring-container') }
    public get $$terms() {return this.$base.$$('.typehaead-searchspring-term') }
    public get Results() {
        return {
            $title: this.$base.$('.typehaead-searchspring-results-title'),
            $$items: this.$base.$$('.typehaead-searchspring-item'),
            $footer: this.$base.$('.typehaead-searchspring-searchresult-link'),
        }
    }
}
