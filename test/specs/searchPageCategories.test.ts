import { pickRandomFrom, searchQueries } from "../utils/utils";
import Assert from "../asserts/assert"
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
        await HomePage.SearchBar.search(pickRandomFrom(searchQueries), {pressEnterInstead:true})
        // Be on the search page
    })
    describe(`The category dropdown opens and closes`, () => {
        it(`Opens and closes on click`, async () => {
            // Click the category dropdown button
            await SearchPage.CategorySidebar.close()
            // Confirm it closes
            await Assert.SearchPageCategories.confirmOpen({reverse:true})
            // Click the category dropdown button again
            await SearchPage.CategorySidebar.open()
            // Confirm it opens
            await Assert.SearchPageCategories.confirmOpen()
        })
    })
    describe(`Adding and removing categories`, () => {
        it(`Adds a category`, async () => {
            const beforeUrl = await browser.getUrl()
            const beforeItemAmount = await SearchPage.getTotalResultAmount()
            // Click to add a category
            await SearchPage.CategorySidebar.addCategory()
            // Confirm URL changes
            await Assert.confirmUrlContains(CategorySearchPage.subUrl)
            await Assert.confirmUrlContains(beforeUrl,{reverse:true})
            // Confirm category is displayed as chosen
            await Assert.SearchPageCategories.confirmCategoryChosen()
            // Confirm items are filtered
            await Assert.SearchPageCategories.confirmItemsFiltered(beforeItemAmount)
        })
        it(`Removes a category`, async () => {
            const beforeUrl = await browser.getUrl()
            const beforeItemAmount = await CategorySearchPage.getTotalResultAmount()
            // Click to remove a category
            await CategorySearchPage.clearCategories()
            // Confirm URL changes
            await Assert.confirmUrlContains(SearchPage.subUrl)
            await Assert.confirmUrlContains(beforeUrl,{reverse:true})
            // Confirm category is not displayed as chosen
            await Assert.SearchPageCategories.confirmCategoryChosen({reverse:true})
            // Confirm items are filtered
            await Assert.SearchPageCategories.confirmItemsFiltered(beforeItemAmount,{reverse:true})
        })
    })
})