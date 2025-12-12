import { bool, int } from "../utils/utils"
import { base } from "../pageobjects/pages/base/base"
import AssertBase from "./assert.base"


/** Testing the search bar */
export default class SearchBar extends AssertBase {
    /** Asserts the typeahead is open */
    public async assertTypeaheadDisplayed(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        const $typeahead = base.SearchBar.Typeahead.$base
        await this.waitFor($typeahead, "Typeahead")

        if(reverse) {
            await expect($typeahead).not.toExist()
        } else {
            await expect($typeahead).toExist()
        }
    }

    /** Asserts the open typeahead has results */
    public async assertTypeaheadShowsResults(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const $typeahead = base.SearchBar.Typeahead.$base
        await this.waitFor($typeahead, "Typeahead")

        const $title = base.SearchBar.Typeahead.Results.$title
        const $$items = base.SearchBar.Typeahead.Results.$$items
        if(reverse) {
            // Typeahead title starts with "No results for"
            await expect($title).toHaveText(/No results for/)
            // Has no items in the results
            await expect($$items).toBeElementsArrayOfSize(0)
        } else {
            // Typeahead title starts with "Search results for"
            await expect($title).toHaveText(/Search results for/)
            // Has an item in the results
            await expect($$items).toBeElementsArrayOfSize({gte:1})
        }
    }

    /** Asserts search bar text length is `charAmount` */
    public async assertTextLength(charAmount:int,ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const $inputField = base.SearchBar.$inputField
        await $inputField.waitForExist()

        const text = await $inputField.getValue()

        if(reverse) {
            expect(text).not.toHaveLength(charAmount)
        } else {
            expect(text).toHaveLength(charAmount)
        }
    }
}
