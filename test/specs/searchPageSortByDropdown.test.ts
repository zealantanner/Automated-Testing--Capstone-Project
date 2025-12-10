import { customTimeout, int, pickRandomFrom, searchQueries } from "../utils/utils";
import HomePage from "../pageobjects/pages/home.page"
import SearchPage from "../pageobjects/pages/search.page"
import { expect } from '@wdio/globals';
import Assert from "../asserts/assert";





describe(`Search Page Sort By Dropdown [MTQA-4231]`, () => {
    before(async () => {
        // Go to https://www.parts-express.com
        await HomePage.open()
        // Dismiss popup modal via local storage
        await HomePage.Popup.dismissPopupViaLocalStorage()
        // Search for an item in the search bar
        await HomePage.SearchBar.search(pickRandomFrom(searchQueries))
        // Be on the search page
    })
    describe(`Dropdown options`, () => {
        it(`Sorts by "Best Match"`, async () => {
            // Select "Best Match"
            await SearchPage.SortByDropdown.selectOption(0)
            // Confirm URL changes accordingly
            await Assert.confirmUrlContains("/search?keywords")
            // Confirm "Best Match" is selected
            await Assert.SearchPageSortByDropdown.confirmOptionIsSelected(0)
            // Confirm items are sorted by relevance - Manual test [MTQA-4232]
        })
        it(`Sorts by "Most Popular"`, async () => {
            // Select "Most Popular"
            await SearchPage.SortByDropdown.selectOption(1)
            // Confirm URL changes accordingly
            await Assert.confirmUrlContains("order=custitem_pe_search_ranking:desc")
            // Confirm "Most Popular" is selected
            await Assert.SearchPageSortByDropdown.confirmOptionIsSelected(1)
            // Confirm items are sorted by popularity, aka reviews
            await Assert.SearchPageSortByDropdown.confirmPopularity()
        })

        it(`Sorts by "Highest Rated"`, async () => {
            // Select "Highest Rated"
            await SearchPage.SortByDropdown.selectOption(2)
            // Confirm URL changes accordingly
            await Assert.confirmUrlContains("order=custitem_pe_reviewrating:desc")
            // Confirm "Highest Rated" is selected
            await Assert.SearchPageSortByDropdown.confirmOptionIsSelected(2)
            // Confirm items are sorted by rating, aka stars
            await Assert.SearchPageSortByDropdown.confirmRating()
        })

        it(`Sorts by "Name: A - Z"`, async () => {
            // Select "Name: A - Z"
            await SearchPage.SortByDropdown.selectOption(3)
            // Confirm URL changes accordingly
            await Assert.confirmUrlContains("order=storedisplayname:asc")
            // Confirm "Name: A - Z" is selected
            await Assert.SearchPageSortByDropdown.confirmOptionIsSelected(3)
            // Confirm items are sorted by name alphabetically
            await Assert.SearchPageSortByDropdown.confirmNameAlphabetically()
        })
        it(`Sorts by "Name: Z - A"`, async () => {
            // Select "Name: Z - A"
            await SearchPage.SortByDropdown.selectOption(4)
            // Confirm URL changes accordingly
            await Assert.confirmUrlContains("order=storedisplayname:desc")
            // Confirm "Name: Z - A" is selected
            await Assert.SearchPageSortByDropdown.confirmOptionIsSelected(4)
            // Confirm items are sorted by name reverse alphabetically
            await Assert.SearchPageSortByDropdown.confirmNameAlphabetically(true)
        })
        it(`Sorts by "Price: Low to High"`, async () => {
            // Select "Price: Low to High"
            await SearchPage.SortByDropdown.selectOption(5)
            // Confirm URL changes accordingly
            await Assert.confirmUrlContains("order=base_price:asc")
            // Confirm "Price: Low to High" is selected
            await Assert.SearchPageSortByDropdown.confirmOptionIsSelected(5)
            // Confirm items are sorted by price
            await Assert.SearchPageSortByDropdown.confirmPrice()
        })
        it(`Sorts by "Price: High to Low"`, async () => {
            // Select "Price: High to Low"
            await SearchPage.SortByDropdown.selectOption(6)
            // Confirm URL changes accordingly
            await Assert.confirmUrlContains("order=base_price:desc")
            // Confirm "Price: High to Low" is selected
            await Assert.SearchPageSortByDropdown.confirmOptionIsSelected(6)
            // Confirm items are sorted by price reverse
            await Assert.SearchPageSortByDropdown.confirmPrice(true)
        })
        it(`Sorts by "Newest First"`, async () => {
            // Select "Newest First"
            await SearchPage.SortByDropdown.selectOption(7)
            // Confirm URL changes accordingly
            await Assert.confirmUrlContains("order=ss_searchable_updated_date:asc")
            // Confirm "Newest First" is selected
            await Assert.SearchPageSortByDropdown.confirmOptionIsSelected(7)
            // Confirm items are sorted by date - (unsure due to blackbox)
        })
    })
})