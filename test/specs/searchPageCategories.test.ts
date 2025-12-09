import { customTimeout, getElementByText, int, pickRandomFrom, searchQueries } from "../utils/utils";
import Assert from "../utils/assert"
import { base } from "../pageobjects/base/base";
import HomePage from "../pageobjects/pages/home.page";





describe(`Search Page Categories [MTQA-4229]`, () => {
    before(async () => {
        // Go to https://www.parts-express.com
        await HomePage.open()
        // Dismiss popup modal via local storage
        await HomePage.Popup.dismissPopupViaLocalStorage()
        //Search for an item in the search bar
        await HomePage.SearchBar.search(pickRandomFrom(searchQueries))
        // Be on the search page
    })
    describe(`The category dropdown opens and closes`, () => {
        it(`Opens and closes on click`, async () => {
            // Click the category dropdown button
            // Confirm it closes
            await Assert.SearchPageCategories.confirmClose()
            // Click the category dropdown button again
            // Confirm it opens
            await Assert.SearchPageCategories.confirmOpen()
        })
    })
    describe(`Adding and removing categories`, () => {
        describe(`Adding a category filters and changes URL`, () => {
            it(`Adds a category`, async () => {
                // Click to add a category
                await 
                // Confirm URL changes accordingly
                await Assert.SearchPageCategories.confirmUrlChanges()
                // Confirm category is displayed as chosen
                await Assert.SearchPageCategories.confirmCategoryDisplayed()
                // Confirm items are filtered accordingly
                await Assert.SearchPageCategories
            })
        })
        describe(`Removing a category`, () => {
            it(`Removes a category`, async () => {
                // Click to remove a category
                // Confirm URL changes accordingly
                await Assert.SearchPageCategories.confirmUrlChanges()
                // Confirm category is not displayed as chosen
                await Assert.SearchPageCategories.confirmCategoryDisplayed(true)
                // Confirm items are filtered accordingly
                await Assert.SearchPageCategories
            })
        })
    })
})