import { bool, str, int, _, getElementByText, customTimeout } from "../utils/utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/pages/base/base"
import AssertBase from "./assert.base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"


export default class SearchBar extends AssertBase {
    private async waitForTypeahead(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        return base.SearchBar.Typeahead.$base
            .waitForDisplayed({timeout:customTimeout,reverse,timeoutMsg:"Typeahead didn't appear"})
            .catch(() => {})
    }
    public async confirmTypeaheadDisplayed(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        
        await this.waitForTypeahead()
        
        if(reverse) {
            await expect(base.SearchBar.Typeahead.$base).not.toBeDisplayed()
        } else {
            await expect(base.SearchBar.Typeahead.$base).toBeDisplayed()
        }
    }
    public async confirmTypeaheadShowsResults(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        await this.waitForTypeahead()
        // const isTypeaheadDisplayed = await base.SearchBar.Typeahead.$base.isDisplayed()

        const isAnItemDisplayed = (await base.SearchBar.Typeahead.Results.$$items.length) > 0
        const titleText = await base.SearchBar.Typeahead.Results.$title.getText()
        await base.SearchBar.Typeahead.Results.$title.waitForDisplayed()//> exist

        if(reverse) {
            // typeahead title starts with "No results for"
            await expect(titleText.toLowerCase()).toContain("no results for")
        } else {
            // typeahead title starts with "search results for"
            // and has an item in the results
            await expect(titleText.toLowerCase()).toContain("search results for")
        }
        await expect(isAnItemDisplayed).toBe(!reverse)
    }
    /** confirms search bar text length is `charAmount` */
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
