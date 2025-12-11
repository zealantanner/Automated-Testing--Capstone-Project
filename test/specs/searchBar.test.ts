import HomePage from "../pageobjects/pages/home.page"
import SearchPage from "../pageobjects/pages/search.page"
import Assert from "../asserts/assert"
import { pickRandomFrom, randChars, randLetters, range, searchQueries } from "../utils/utils"
import { base } from "../pageobjects/pages/base/base"





describe(`Search Bar [MTQA-4227]`, () => {
    before(async () => {
        // Go to https://www.parts-express.com
        await HomePage.open()
        // Dismiss popup modal via local storage
        await HomePage.Popup.dismissPopupViaLocalStorage()
        // Go to search page
        await HomePage.SearchBar.search(pickRandomFrom(searchQueries))
    })
    describe(`Input field`, () => {
        describe(`Input text`, () => {
            const validText = pickRandomFrom(searchQueries)
            it(`Makes the typeahead appear`, async () => {
                // Input some valid text into search box
                await SearchPage.SearchBar.inputText(validText)
                // Confirm typeahead appears
                await Assert.SearchBar.confirmTypeaheadDisplayed()
            })
            it(`Activates search on enter`, async () => {//> add to obsidian and jira
                const beforeUrl = await browser.getUrl()
                // Press enter to search
                await SearchPage.SearchBar.activateSearch({pressEnterInstead:true})
                // Confirm search activates on enter
                await Assert.confirmUrlIs(beforeUrl,{reverse:true})
            })
        })
        describe(`(Negative) Input too many characters`, () => {
            it(`Is limited to 100 characters`, async () => {
                const almostTooMuchText = randLetters(98)
                // Input more than 100 characters into search box
                // await SearchPage.SearchBar.clearText()
                await SearchPage.SearchBar.inputText(almostTooMuchText)
                await SearchPage.SearchBar.typeText(randLetters(5))
                // Confirm only 100 characters are able to be in the text box
                await Assert.SearchBar.confirmTextLength(100)
                await Assert.SearchBar.confirmTextLength(103,{reverse:true})
            })
        })
        describe(`(Negative) Input nonsense text`, () => {
            it(`Shows no results in the typeahead`, async () => {
                const randomCharacters = randChars(15)
                // Input random text into search box
                await SearchPage.SearchBar.inputText(randomCharacters)
                // Confirm typeahead appears with no results
                await Assert.SearchBar.confirmTypeaheadDisplayed()
                await Assert.SearchBar.confirmTypeaheadShowsResults({reverse:true})
            })
        })
    })
    describe(`Submit Button`, () => {
        describe(`URL changes with valid text inputted`, () => {
            it(`Changes URL according to text inputted`, async () => {
                const text = pickRandomFrom(searchQueries)
                const beforeUrl = await browser.getUrl()
                // Input text into search box
                await SearchPage.SearchBar.inputText(text)
                // Click the search button
                await SearchPage.SearchBar.activateSearch()
                // Confirm URL changes
                await Assert.confirmUrlIs(beforeUrl,{reverse:true})
            })
        })
        describe(`(Negative) When the search bar has no text inputted it doesn't search`, () => {
            it(`Should make nothing happen on click with no text in input field`, async () => {
                const beforeUrl = await browser.getUrl()
                // Have no text inputted in the search box
                // await SearchPage.SearchBar.inputText("")
                await SearchPage.SearchBar.clearText()
                // Click the search button
                await SearchPage.SearchBar.activateSearch()
                // Confirm the URL stays and no results
                await Assert.confirmUrlIs(beforeUrl)
                await Assert.SearchBar.confirmTypeaheadDisplayed({reverse:true})
                //> add if there's no items on the results page
            })
        })
    })
})

