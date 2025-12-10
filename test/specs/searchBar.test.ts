import HomePage from "../pageobjects/pages/home.page"
import SearchPage from "../pageobjects/pages/search.page"
import Assert from "../asserts/assert"
import { pickRandomFrom, randChars, randLetters, range, searchQueries } from "../utils/utils"





describe(`Search Bar [MTQA-4227]`, () => {
    before(async () => {
        // Go to https://www.parts-express.com
        await HomePage.open()
        // Dismiss popup modal via local storage
        await HomePage.Popup.dismissPopupViaLocalStorage()
    })
    describe(`Input field`, () => {
        beforeEach(async () => {
            // Clear input field
            await SearchPage.SearchBar.clearText()
        })
        describe(`(Negative) Input nonsense text`, () => {
            it(`Shows no results in the typeahead`, async () => {
                const text = randChars(15)
                // Input random text into search box
                await SearchPage.SearchBar.inputText(text)
                // Confirm typeahead appears with no results
                await Assert.SearchBar.confirmTypeaheadAppears()
                await Assert.SearchBar.confirmTypeaheadNoResults()
            })
        })
        describe(`(Negative) Input too many characters`, () => {
            it(`Is limited to 100 characters`, async () => {
                const text = randLetters(125)
                // Input more than 100 characters into search box
                await SearchPage.SearchBar.inputText(text)
                // Confirm only 100 characters are able to be in the text box
                await Assert.SearchBar.confirmTextLength(100)
            })
        })
        describe(`Input text`, () => {
            // const text = pickRandomFrom(searchQueries)
            it(`Makes the typeahead appear`, async () => {
                const text = pickRandomFrom(searchQueries)
                // Input some valid text into search box
                await SearchPage.SearchBar.inputText(text)
                // Confirm typeahead appears
                await Assert.SearchBar.confirmTypeaheadDisplayed()
            })
        })
    })
    describe(`Submit Button`, () => {
        describe(`URL changes with valid text inputted`, () => {
            it(`Changes URL according to text inputted`, async () => {
                // Input text into search box
                await SearchPage.SearchBar.inputText(randLetters(101))
                const beforeUrl = await browser.getUrl()
                // Click the search button
                await SearchPage.SearchBar.clickSearch()
                // Confirm URL changes
                await Assert.confirmUrlContains(beforeUrl,true)
            })
        })
        describe(`(Negative) When the search bar has no text inputted it doesn't search`, () => {
            it(`Should make nothing happen on click with no text in input field`, async () => {
                // Have no text inputted in the search box
                await SearchPage.SearchBar.clearText()
                const beforeUrl = await browser.getUrl()
                // Click the search button
                await Assert.SearchBar.saveResults()
                await SearchPage.SearchBar.activateSearch()
                // Confirm the URL and results don't change
                await Assert.confirmUrlContains(beforeUrl)
                await Assert.SearchBar.confirmResults(something)
            })
        })
    })
})


// describe(`Typeahead [MTQA-4221]`, () => {
//     describe(`Terms`, () => {
//         describe(`When a term in typeahead is clicked the URL changes accordingly`, () => {
//             it(`Changes URL according to chosen term`, async () => {
//                 // Input text into search box
//                 const text = pickRandomFrom(searchQueries)
//                 await SearchPage.SearchBar.inputText(text)
//                 // Click a term in the typeahead results
//                 await SearchPage.SearchBar.Typeahead.clickRandomTerm()
//                 // Confirm the URL changed accordingly
//                 await Assert.SearchBar.Typeahead.confirmUrl(text)
//             })
//         })
//         describe(`Typeahead terms change accordingly`, () => {
//             it(`Changes terms in typeahead results accordingly`, async () => {
//                 // Input text into search box
//                 const text1 = pickRandomFrom(searchQueries)
//                 await SearchPage.SearchBar.inputText(text1)
//                 // Confirm typeahead changes accordingly
//                 await Assert.SearchBar.Typeahead.confirmTerm(text1)
//                 // Input new text
//                 const text2 = pickRandomFrom(searchQueries)
//                 await SearchPage.SearchBar.inputText(text2)
//                 // Confirm typeahead changes accordingly
//                 await Assert.SearchBar.Typeahead.confirmTerm(text2)
//             })
//         })
//     })
//     describe(`Brands`, () => {
//         describe(`Brands is clicked`, () => {
//             it(`Clicks on a brand - (unsure of how to test this)`, async () => {
//                 // Input text into search box
//                 // Click a brand
//                 // ???
//             })
//             it(`Hovers over a brand - (unsure of how to test this)`, async () => {
//                 // Input text into search box
//                 // Hover on a brand
//                 // ???
//             })
//         })
//     })
//     describe(`Results`, () => {
//         describe(`URL changes when an item is clicked in the typeahead`, () => {
//             it(`Changes URL to match the corresponding item`, async () => {
//                 // Input text into search box
//                 await SearchPage.SearchBar.inputText(text)
//                 const beforeUrl = await browser.getUrl()
//                 // Click an item in the typeahead results
//                 await SearchPage.SearchBar.Typeahead.clickItem()
//                 // Confirm the URL changes
//                 await Assert.SearchBar.confirmUrlContains(beforeUrl,true)
//             })
//         })
//         describe(`Typeahead title and footer keywords match input`, () => {
//             it(`Shows correct keywords in the title and footer`, async () => {
//                 // Input text into search box
//                 const text = pickRandomFrom(searchQueries)
//                 await SearchPage.SearchBar.inputText(text)
//                 // Confirm title and footer show the same text in the search box
//                 await Assert.SearchBar.Typeahead.confirmTitleText(text)
//                 await Assert.SearchBar.Typeahead.confirmFooterText(text)
//             })
//         })
//         describe(`Typeahead footer is clicked and activates search`, () => {
//             it(`Changes URL according to text inputted`, async () => {
//                 // Input text into search box
//                 await SearchPage.SearchBar.inputText(pickRandomFrom(searchQueries))
//                 // Click the results footer in the typeahead
//                 await SearchPage.SearchBar.Typeahead.click
//                 // Confirm the URL changes to the search page
//                 await Assert.SearchBar.confirmUrl("")
//             })
//         })
//     })
// })
