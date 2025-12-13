import { randomFrom, searchQueries } from "../utils/utils";
import Assert from "../asserts/assert";
import HomePage from "../pageobjects/pages/home.page"
import SearchPage from "../pageobjects/pages/search.page"




describe(`Search Page Sort By Dropdown [MTQA-4231]`, () => {
    const textToSearch = randomFrom(searchQueries)
    before(async () => {
        await HomePage.openPage()
        await HomePage.Popup.dismissPopupViaLocalStorage()
        await HomePage.SearchBar.search(textToSearch)
    })
    describe(`Dropdown options when searching for "${textToSearch}"`, () => {
        it(`Sorts by "Best Match"`, async () => {
            await SearchPage.SortByDropdown.selectOption(0)

            await Assert.assertCurrentUrlContains("/search?keywords")
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(0)
        })
        it(`Sorts by "Most Popular"`, async () => {
            await SearchPage.SortByDropdown.selectOption(1)

            await Assert.assertCurrentUrlContains("order=custitem_pe_search_ranking:desc")
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(1)
            await Assert.SearchPageSortByDropdown.assertPopularity()
        })
        it(`Sorts by "Highest Rated"`, async () => {
            await SearchPage.SortByDropdown.selectOption(2)

            await Assert.assertCurrentUrlContains("order=custitem_pe_reviewrating:desc")
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(2)
            await Assert.SearchPageSortByDropdown.assertRating()
        })
        it(`Sorts by "Name: A - Z"`, async () => {
            await SearchPage.SortByDropdown.selectOption(3)

            await Assert.assertCurrentUrlContains("order=storedisplayname:asc")
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(3)
            await Assert.SearchPageSortByDropdown.assertNameAlphabetically()
        })
        it(`Sorts by "Name: Z - A"`, async () => {
            await SearchPage.SortByDropdown.selectOption(4)

            await Assert.assertCurrentUrlContains("order=storedisplayname:desc")
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(4)
            await Assert.SearchPageSortByDropdown.assertNameAlphabetically({reverse:true})
        })
        it(`Sorts by "Price: Low to High"`, async () => {
            await SearchPage.SortByDropdown.selectOption(5)

            await Assert.assertCurrentUrlContains("order=base_price:asc")
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(5)
            await Assert.SearchPageSortByDropdown.assertPrice()
        })
        it(`Sorts by "Price: High to Low"`, async () => {
            await SearchPage.SortByDropdown.selectOption(6)

            await Assert.assertCurrentUrlContains("order=base_price:desc")
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(6)
            await Assert.SearchPageSortByDropdown.assertPrice({reverse:true})
        })
        it(`Sorts by "Newest First"`, async () => {
            await SearchPage.SortByDropdown.selectOption(7)

            await Assert.assertCurrentUrlContains("order=ss_searchable_updated_date:asc")
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(7)
        })
    })
})
