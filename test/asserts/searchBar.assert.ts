import { base } from "../pageobjects/pages/base/base"
import AssertBase from "./assert.base"


/** Don't use this, use `Assert.SearchBar` instead */
export default class SearchBar extends AssertBase {
    /** Asserts typeahead is open */
    public async assertTypeaheadDisplayed(ops:{reverse?:boolean,timeout?:number}={}) {
        const {reverse=false,timeout} = ops;
        await base.waitForLoad()
        const $typeahead = base.SearchBar.Typeahead.$base
        await this.waitFor($typeahead, "Typeahead",{reverse,timeout})

        if(reverse) {
            await expect($typeahead).not.toExist()
        } else {
            await expect($typeahead).toExist()
        }
    }

    /** Asserts open typeahead shows results */
    public async assertTypeaheadShowsResults(ops:{reverse?:boolean}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const $typeahead = base.SearchBar.Typeahead.$base
        await this.waitFor($typeahead, "Typeahead")

        const $title = base.SearchBar.Typeahead.Results.$title
        const $$items = base.SearchBar.Typeahead.Results.$$items
        if(reverse) {
            await expect($title).toHaveText(/No results for/)
            await expect($$items).toBeElementsArrayOfSize(0)
        } else {
            await expect($title).toHaveText(/Search results for/)
            await expect($$items).toBeElementsArrayOfSize({gte:1})
        }
    }

    /** Asserts search bar text length is `charAmount` */
    public async assertTextLength(charAmount:number,ops:{reverse?:boolean}={}) {
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
