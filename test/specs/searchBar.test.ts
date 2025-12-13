import { browser } from '@wdio/globals'
import { randChars, randLetters, searchQueries, shuffle } from "../utils/utils"
import Assert from "../asserts/assert"
import HomePage from "../pageobjects/pages/home.page"
import SearchPage from "../pageobjects/pages/search.page"




describe(`Search Bar [MTQA-4227]`, () => {
    const randomizedQueries = shuffle(searchQueries)
    before(async () => {
        await HomePage.openPage()
        await HomePage.Popup.dismissPopupViaLocalStorage()
        await HomePage.SearchBar.search(randomizedQueries[0])
    })
    describe(`Input field`, () => {
        const validText = randomizedQueries[1]
        describe(`Input valid text "${validText}"`, () => {
            it(`Assert typeahead appears`, async () => {
                await SearchPage.SearchBar.inputText(validText)

                await Assert.SearchBar.assertTypeaheadDisplayed({timeout:1000})
            })
            it(`Assert pressing enter activates search function`, async () => {
                const beforeUrl = await browser.getUrl()
                await SearchPage.SearchBar.activateSearch({submitWithEnter:true})

                await Assert.assertCurrentUrlIs(beforeUrl,{reverse:true})
            })
        })
        describe(`(Negative) Input too many characters`, () => {
            it(`Assert text box is limited to 100 characters`, async () => {
                const almostTooMuchText = randLetters(98)
                await SearchPage.SearchBar.inputText(almostTooMuchText)
                await SearchPage.SearchBar.typeText(randLetters(5))

                await Assert.SearchBar.assertTextLength(100)
                await Assert.SearchBar.assertTextLength(103,{reverse:true})
            })
        })
        describe(`(Negative) Input nonsense text`, () => {
            it(`Assert typeahead appears with no results`, async () => {
                const randomCharacters = randChars(15)
                await SearchPage.SearchBar.inputText(randomCharacters)

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
                await SearchPage.SearchBar.inputText(text)
                await SearchPage.SearchBar.activateSearch()

                await Assert.assertCurrentUrlIs(beforeUrl,{reverse:true})
            })
        })
        describe(`(Negative) When search bar has no text inputted it doesn't search`, () => {
            it(`Assert nothing happens on click when there's no text in input field`, async () => {
                const beforeUrl = await browser.getUrl()
                await SearchPage.SearchBar.clearText()
                await SearchPage.SearchBar.activateSearch()

                await Assert.assertCurrentUrlIs(beforeUrl)
                await Assert.SearchBar.assertTypeaheadDisplayed({reverse:true})
            })
        })
    })
})
