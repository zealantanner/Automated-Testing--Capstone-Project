import { randomFrom, searchQueries } from "../utils/utils";
import Assert from "../asserts/assert"
import HomePage from "../pageobjects/pages/home.page";
import SearchPage from "../pageobjects/pages/search.page";
import CategorySearchPage from "../pageobjects/pages/categorySearch.page";




describe(`Search Page Categories [MTQA-4229]`, () => {
    const textToSearch = randomFrom(searchQueries)
    before(async () => {
        // Go to https://www.parts-express.com
        await HomePage.open()
        // Dismiss popup modal via local storage
        await HomePage.Popup.dismissPopupViaLocalStorage()
        // Search for an item in search bar
        await HomePage.SearchBar.search(textToSearch)
        // Be on search page
    })
    describe(`Category dropdown closes and opens`, () => {
        it(`Assert category dropdown closes`, async () => {
            // Click category dropdown button
            await SearchPage.CategorySidebar.close()
            // Assert the category dropdown closes
            await Assert.SearchPageCategories.assertOpen({reverse:true})
        })
        it(`Assert category dropdown closes`, async () => {
            // Click category dropdown button again
            await SearchPage.CategorySidebar.open()
            // Assert the category dropdown opens
            await Assert.SearchPageCategories.assertOpen()
        })
    })
    describe(`Adding and removing categories`, () => {
        it(`Assert category is added and items are filtered`, async () => {
            const beforeUrl = await browser.getUrl()
            const beforeItemAmount = await SearchPage.getTotalResultAmount()
            // Click to add a category
            await SearchPage.CategorySidebar.addCategory({preferFirstHalf:true})
            // Assert URL changes
            await Assert.assertUrlContains(CategorySearchPage.subUrl)
            await Assert.assertUrlContains(beforeUrl,{reverse:true})
            // Assert category is displayed as chosen
            await Assert.SearchPageCategories.assertCategoryChosen()
            // Assert items are filtered
            await Assert.SearchPageCategories.assertItemsFiltered(beforeItemAmount)
        })
        it(`Assert category is removed and items are unfiltered`, async () => {
            const beforeUrl = await browser.getUrl()
            const beforeItemAmount = await CategorySearchPage.getTotalResultAmount()
            // Click to remove a category
            await CategorySearchPage.clearCategories()
            // Assert URL changes
            await Assert.assertUrlContains(SearchPage.subUrl)
            await Assert.assertUrlContains(beforeUrl,{reverse:true})
            // Assert category is not displayed as chosen
            await Assert.SearchPageCategories.assertCategoryChosen({reverse:true})
            // Assert items are unfiltered
            await Assert.SearchPageCategories.assertItemsFiltered(beforeItemAmount,{reverse:true})
        })
    })
})
