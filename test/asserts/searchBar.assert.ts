import { bool, str, int, _, getElementByText } from "../utils/utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/pages/base/base"
import AssertBase from "./assert.base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


export default class SearchBar extends AssertBase {
    public async confirmTypeaheadDisplayed(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const isTypeaheadDisplayed = await base.SearchBar.Typeahead.$base.isDisplayed()
        await expect(isTypeaheadDisplayed).toBe(!reverse)
    }
    public async confirmTypeaheadShowsResults(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const isAnItemDisplayed = await base.SearchBar.Typeahead.Results.$$items[0].isDisplayed()
        const titleText = await base.SearchBar.Typeahead.Results.$title.getText()

        if(reverse) {
            // typeahead title starts with "No results for"
            await expect(titleText.toLowerCase()).toContain("no results for")
        } else {
            // typeahead title starts with "search results for"
            // and has an item in the results
            await expect(titleText.toLowerCase()).toContain("search results for")
        }
        await expect(isAnItemDisplayed).toBe(reverse)
    }
    public async confirmTextLength(charAmount:int,ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const text = await base.SearchBar.$inputField.getValue()
        if(reverse) {
            await expect(text.length).not.toBe(charAmount)
        } else {
            await expect(text.length).toBe(charAmount)
        }
    }
}
