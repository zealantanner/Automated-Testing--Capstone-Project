import { bool, str, int, getElementByText, customTimeout } from "../utils/utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/pages/base/base"
import AssertBase from "./assert.base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


export default class SearchBar extends AssertBase {
    /** Waits for the typeahead to show up */
    private async waitForTypeahead(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        return base.SearchBar.Typeahead.$base
            .waitForDisplayed({timeout:customTimeout,reverse,timeoutMsg:`Typeahead did${reverse?``:`n't`} appear`})
            .catch(() => {})
    }

    /** Confirms the typeahead is open */
    public async confirmTypeaheadDisplayed(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        await this.waitForTypeahead()

        const $typeahead = base.SearchBar.Typeahead.$base
        if(reverse) {
            await expect($typeahead).not.toBeDisplayed()
        } else {
            await expect($typeahead).toBeDisplayed()
        }
    }

    /** Confirms the open typeahead has results */
    public async confirmTypeaheadShowsResults(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        await this.waitForTypeahead()

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

    /** Confirms search bar text length is `charAmount` */
    public async confirmTextLength(charAmount:int,ops:{reverse?:bool}={}) {
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
