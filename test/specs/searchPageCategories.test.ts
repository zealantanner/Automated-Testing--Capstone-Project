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
            // Assert it closes
            await Assert.SearchPageCategories.assertOpen({reverse:true})
            // Click the category dropdown button again
            await SearchPage.CategorySidebar.open()
            // Assert it opens
            await Assert.SearchPageCategories.assertOpen()
        })
    })
    describe(`Adding and removing categories`, () => {
        it(`Adds a category`, async () => {
            const beforeUrl = await browser.getUrl()
            const beforeItemAmount = await SearchPage.getTotalResultAmount()
            // Click to add a category
            await SearchPage.CategorySidebar.addCategory()
            // Assert URL changes
            await Assert.assertUrlContains(CategorySearchPage.subUrl)
            await Assert.assertUrlContains(beforeUrl,{reverse:true})
            // Assert category is displayed as chosen
            await Assert.SearchPageCategories.assertCategoryChosen()
            // Assert items are filtered
            await Assert.SearchPageCategories.assertItemsFiltered(beforeItemAmount)
        })
        it(`Removes a category`, async () => {
            const beforeUrl = await browser.getUrl()
            const beforeItemAmount = await CategorySearchPage.getTotalResultAmount()
            // Click to remove a category
            await CategorySearchPage.clearCategories()
            // Assert URL changes
            await Assert.assertUrlContains(SearchPage.subUrl)
            await Assert.assertUrlContains(beforeUrl,{reverse:true})
            // Assert category is not displayed as chosen
            await Assert.SearchPageCategories.assertCategoryChosen({reverse:true})
            // Assert items are filtered
            await Assert.SearchPageCategories.assertItemsFiltered(beforeItemAmount,{reverse:true})
        })
    })
})