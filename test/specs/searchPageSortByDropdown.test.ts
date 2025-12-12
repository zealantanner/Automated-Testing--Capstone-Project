import { randomFrom, searchQueries } from "../utils/utils";
import HomePage from "../pageobjects/pages/home.page"
import SearchPage from "../pageobjects/pages/search.page"
import Assert from "../asserts/assert";




describe(`Search Page Sort By Dropdown [MTQA-4231]`, () => {
    const textToSearch = randomFrom(searchQueries)
    before(async () => {
        // Go to https://www.parts-express.com
        await HomePage.open()
        // Dismiss popup modal via local storage
        await HomePage.Popup.dismissPopupViaLocalStorage()
        // Search for an item in the search bar
        await HomePage.SearchBar.search(textToSearch)
        // Be on the search page
    })
    describe(`Dropdown options when searching for "${textToSearch}"`, () => {
        it(`Sorts by "Best Match"`, async () => {
            // Select "Best Match"
            await SearchPage.SortByDropdown.selectOption(0)
            // Assert URL changes accordingly
            await Assert.assertUrlContains("/search?keywords")
            // Assert "Best Match" is selected
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(0)
            // Assert items are sorted by relevance - Manual test [MTQA-4232]
        })
        it(`Sorts by "Most Popular"`, async () => {
            // Select "Most Popular"
            await SearchPage.SortByDropdown.selectOption(1)
            // Assert URL changes accordingly
            await Assert.assertUrlContains("order=custitem_pe_search_ranking:desc")
            // Assert "Most Popular" is selected
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(1)
            // Assert items are sorted by popularity, aka reviews
            await Assert.SearchPageSortByDropdown.assertPopularity()
        })
        it(`Sorts by "Highest Rated"`, async () => {
            // Select "Highest Rated"
            await SearchPage.SortByDropdown.selectOption(2)
            // Assert URL changes accordingly
            await Assert.assertUrlContains("order=custitem_pe_reviewrating:desc")
            // Assert "Highest Rated" is selected
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(2)
            // Assert items are sorted by rating, aka stars
            await Assert.SearchPageSortByDropdown.assertRating()
        })
        it(`Sorts by "Name: A - Z"`, async () => {
            // Select "Name: A - Z"
            await SearchPage.SortByDropdown.selectOption(3)
            // Assert URL changes accordingly
            await Assert.assertUrlContains("order=storedisplayname:asc")
            // Assert "Name: A - Z" is selected
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(3)
            // Assert items are sorted by name alphabetically
            await Assert.SearchPageSortByDropdown.assertNameAlphabetically()
        })
        it(`Sorts by "Name: Z - A"`, async () => {
            // Select "Name: Z - A"
            await SearchPage.SortByDropdown.selectOption(4)
            // Assert URL changes accordingly
            await Assert.assertUrlContains("order=storedisplayname:desc")
            // Assert "Name: Z - A" is selected
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(4)
            // Assert items are sorted by name reverse alphabetically
            await Assert.SearchPageSortByDropdown.assertNameAlphabetically({reverse:true})
        })
        it(`Sorts by "Price: Low to High"`, async () => {
            // Select "Price: Low to High"
            await SearchPage.SortByDropdown.selectOption(5)
            // Assert URL changes accordingly
            await Assert.assertUrlContains("order=base_price:asc")
            // Assert "Price: Low to High" is selected
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(5)
            // Assert items are sorted by price
            await Assert.SearchPageSortByDropdown.assertPrice()
        })
        it(`Sorts by "Price: High to Low"`, async () => {
            // Select "Price: High to Low"
            await SearchPage.SortByDropdown.selectOption(6)
            // Assert URL changes accordingly
            await Assert.assertUrlContains("order=base_price:desc")
            // Assert "Price: High to Low" is selected
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(6)
            // Assert items are sorted by price reverse
            await Assert.SearchPageSortByDropdown.assertPrice({reverse:true})
        })
        it(`Sorts by "Newest First"`, async () => {
            // Select "Newest First"
            await SearchPage.SortByDropdown.selectOption(7)
            // Assert URL changes accordingly
            await Assert.assertUrlContains("order=ss_searchable_updated_date:asc")
            // Assert "Newest First" is selected
            await Assert.SearchPageSortByDropdown.assertOptionIsSelected(7)
            // Assert items are sorted by date - (unsure due to blackbox)
        })
    })
})
