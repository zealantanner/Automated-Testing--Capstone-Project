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
            it(`Assert typeahead appears`, async () => {
                // Input some valid text into search box
                await SearchPage.SearchBar.inputText(validText)
                // Assert typeahead appears
                await Assert.SearchBar.assertTypeaheadDisplayed()
            })
            it(`Assert pressing enter activates search function`, async () => {
                const beforeUrl = await browser.getUrl()
                // Press enter to search
                await SearchPage.SearchBar.activateSearch({pressEnterInstead:true})
                // Assert search function activates on enter
                await Assert.assertUrlIs(beforeUrl,{reverse:true})
            })
        })
        describe(`(Negative) Input too many characters`, () => {
            it(`Assert text box is limited to 100 characters`, async () => {
                const almostTooMuchText = randLetters(98)
                // Input more than 100 characters into search box
                await SearchPage.SearchBar.inputText(almostTooMuchText)
                await SearchPage.SearchBar.typeText(randLetters(5))
                // Assert text box is limited to 100 characters
                await Assert.SearchBar.assertTextLength(100)
                await Assert.SearchBar.assertTextLength(103,{reverse:true})
            })
        })
        describe(`(Negative) Input nonsense text`, () => {
            it(`Assert typeahead appears with no results`, async () => {
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
            it(`Assert URL changes according to text inputted "${text}"`, async () => {
                const beforeUrl = await browser.getUrl()
                // Input text into search box
                await SearchPage.SearchBar.inputText(text)
                // Click search button
                await SearchPage.SearchBar.activateSearch()
                // Assert URL changes
                await Assert.assertUrlIs(beforeUrl,{reverse:true})
            })
        })
        describe(`(Negative) When search bar has no text inputted it doesn't search`, () => {
            it(`Assert nothing happens on click when there's no text in input field`, async () => {
                const beforeUrl = await browser.getUrl()
                // Have no text inputted in search bar
                await SearchPage.SearchBar.inputText("")
                // Click search button
                await SearchPage.SearchBar.activateSearch()
                // Assert URL stays the same with no typeahead
                await Assert.assertUrlIs(beforeUrl)
                await Assert.SearchBar.assertTypeaheadDisplayed({reverse:true})
            })
        })
    })
})
