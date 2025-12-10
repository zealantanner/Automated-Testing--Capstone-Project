import { customTimeout, getElementByText, int, pickRandomFrom, searchQueries } from "../utils/utils";
import Assert from "../asserts/assert"
import { base } from "../pageobjects/base/base";
import HomePage from "../pageobjects/pages/home.page";
import SearchPage from "../pageobjects/pages/search.page";
import CategorySearchPage from "../pageobjects/pages/categorySearch.page";






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
            await SearchPage.CategorySidebar.close()
            // Confirm it closes
            await Assert.SearchPageCategories.confirmClosed()
            // Click the category dropdown button again
            await SearchPage.CategorySidebar.open()
            // Confirm it opens
            await Assert.SearchPageCategories.confirmOpened()
        })
    })
    describe(`Adding and removing categories`, () => {
        describe(`Adding a category filters and changes URL`, () => {
            it(`Adds a category`, async () => {
                const beforeUrl = await browser.getUrl()
                const beforeItemAmount = await SearchPage.getresultAmount()
                // Click to add a category
                await SearchPage.CategorySidebar.addCategory()
                // Confirm URL changes
                await Assert.confirmUrlContains(CategorySearchPage.subUrl)
                await Assert.confirmUrlContains(beforeUrl, true)
                // Confirm category is displayed as chosen
                await Assert.SearchPageCategories.confirmCategoryDisplayed()
                // Confirm items are filtered
                await Assert.SearchPageCategories.confirmItemsFiltered(beforeItemAmount)
            })
        })
        describe(`Removing a category`, () => {
            it(`Removes a category`, async () => {
                const beforeUrl = await browser.getUrl()
                const beforeItemAmount = await CategorySearchPage.getresultAmount()
                // Click to remove a category
                await SearchPage.CategorySidebar.removeCategory()
                // Confirm URL changes
                await Assert.confirmUrlContains(CategorySearchPage.subUrl)
                await Assert.confirmUrlContains(beforeUrl, true)
                // Confirm category is not displayed as chosen
                await Assert.SearchPageCategories.confirmCategoryDisplayed(true)
                // Confirm items are filtered
                await Assert.SearchPageCategories.confirmItemsFiltered(beforeItemAmount,true)
            })
        })
    })
})