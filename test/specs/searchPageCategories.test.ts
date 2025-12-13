import { browser } from '@wdio/globals'
import { randomFrom, searchQueries } from "../utils/utils";
import Assert from "../asserts/assert"
import HomePage from "../pageobjects/pages/home.page";
import SearchPage from "../pageobjects/pages/search.page";
import CategorySearchPage from "../pageobjects/pages/categorySearch.page";




describe(`Search Page Categories [MTQA-4229]`, () => {
    const textToSearch = randomFrom(searchQueries)
    before(async () => {
        await HomePage.openPage()
        await HomePage.Popup.dismissPopupViaLocalStorage()
        await HomePage.SearchBar.search(textToSearch)
    })
    describe(`Category dropdown closes and opens`, () => {
        it(`Assert category dropdown closes`, async () => {
            await SearchPage.CategorySidebar.clickToClose()
            await Assert.SearchPageCategories.assertOpen({reverse:true})
        })
        it(`Assert category dropdown closes`, async () => {
            await SearchPage.CategorySidebar.clickToOpen()
            await Assert.SearchPageCategories.assertOpen()
        })
    })
    describe(`Adding and removing categories`, () => {
        it(`Assert category is added and items are filtered`, async () => {
            const beforeUrl = await browser.getUrl()
            const beforeItemAmount = await SearchPage.getTotalResultAmount()
            await SearchPage.CategorySidebar.addCategory({preferFirstHalf:true})

            await Assert.assertCurrentUrlContains(CategorySearchPage.subUrl)
            await Assert.assertCurrentUrlContains(beforeUrl,{reverse:true})
            await Assert.SearchPageCategories.assertCategoryChosen()
            await Assert.SearchPageCategories.assertItemsFiltered(beforeItemAmount)
        })
        it(`Assert category is removed and items are unfiltered`, async () => {
            const beforeUrl = await browser.getUrl()
            const beforeItemAmount = await CategorySearchPage.getTotalResultAmount()
            await CategorySearchPage.clearCategories()

            await Assert.assertCurrentUrlContains(SearchPage.subUrl)
            await Assert.assertCurrentUrlContains(beforeUrl,{reverse:true})
            await Assert.SearchPageCategories.assertCategoryChosen({reverse:true})
            await Assert.SearchPageCategories.assertItemsFiltered(beforeItemAmount,{reverse:true})
        })
    })
})
