import HomePage from "../pageobjects/pages/home.page"
import SearchPage from "../pageobjects/pages/search.page"
import Assert from "../asserts/assert"
import { randChars, randLetters, searchQueries, shuffle } from "../utils/utils"




describe(`Search Bar [MTQA-4227]`, () => {
    const randomizedQueries = shuffle(searchQueries)
    before(async () => {
        // Go to https://www.parts-express.com
        await HomePage.open()
        // Dismiss popup modal via local storage
        await HomePage.Popup.dismissPopupViaLocalStorage()
        // Go to search page
        await HomePage.SearchBar.search(randomizedQueries[0])
    })
    describe(`Input field`, () => {
        const validText = randomizedQueries[1]
        describe(`Input text "${validText}"`, () => {
            it(`Makes the typeahead appear`, async () => {
                // Input some valid text into search box
                await SearchPage.SearchBar.inputText(validText)
                // Assert typeahead appears
                await Assert.SearchBar.assertTypeaheadDisplayed()
            })
            it(`Activates search on enter`, async () => {
                const beforeUrl = await browser.getUrl()
                // Press enter to search
                await SearchPage.SearchBar.activateSearch({pressEnterInstead:true})
                // Assert search activates on enter
                await Assert.assertUrlIs(beforeUrl,{reverse:true})
            })
        })
        describe(`(Negative) Input too many characters`, () => {
            it(`Is limited to 100 characters`, async () => {
                const almostTooMuchText = randLetters(98)
                // Input more than 100 characters into search box
                await SearchPage.SearchBar.inputText(almostTooMuchText)
                await SearchPage.SearchBar.typeText(randLetters(5))
                // Assert only 100 characters are able to be in the text box
                await Assert.SearchBar.assertTextLength(100)
                await Assert.SearchBar.assertTextLength(103,{reverse:true})
            })
        })
        describe(`(Negative) Input nonsense text`, () => {
            it(`Shows no results in the typeahead`, async () => {
                const randomCharacters = randChars(15)
                // Input random text into search box
                await SearchPage.SearchBar.inputText(randomCharacters)
                // Assert typeahead appears with no results
                await Assert.SearchBar.assertTypeaheadDisplayed()
                await Assert.SearchBar.assertTypeaheadShowsResults({reverse:true})
            })
        })
    })
    describe(`Submit Button`, () => {
        describe(`URL changes with valid text inputted`, () => {
            const text = randomizedQueries[2]
            it(`Changes URL according to text inputted "${text}"`, async () => {
                const beforeUrl = await browser.getUrl()
                // Input text into search box
                await SearchPage.SearchBar.inputText(text)
                // Click the search button
                await SearchPage.SearchBar.activateSearch()
                // Assert URL changes
                await Assert.assertUrlIs(beforeUrl,{reverse:true})
            })
        })
        describe(`(Negative) When the search bar has no text inputted it doesn't search`, () => {
            it(`Should make nothing happen on click with no text in input field`, async () => {
                const beforeUrl = await browser.getUrl()
                // Have no text inputted in the search box
                await SearchPage.SearchBar.inputText("")
                // Click the search button
                await SearchPage.SearchBar.activateSearch()
                // Assert the URL stays and no results
                await Assert.assertUrlIs(beforeUrl)
                await Assert.SearchBar.assertTypeaheadDisplayed({reverse:true})
            })
        })
    })
})
