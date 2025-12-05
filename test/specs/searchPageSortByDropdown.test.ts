import HomePage from "../pageobjects/pages/home.page"
import SearchPage from "../pageobjects/pages/search.page"





describe(`Search Page Sort By Dropdown [MTQA-4231]`, () => {
    before(async () => {
        // Go to https://www.parts-express.com
        await HomePage.open()
        // Dismiss popup modal
        await HomePage.Popup.dismissPopupViaLocalStorage()
        // Search for an item in the search bar
        // Be on the search page
        await SearchPage.
    })
    describe(`Dropdown options`, () => {
        describe(`Sorting by relevance`, () => {
            it(`Sorts by "Best Match"`, async () => {
                // Select "Best Match"
                // Confirm URL changes accordingly
                // Confirm "Best Match" is selected
                // Confirm items are sorted by relevance - Manual test [MTQA-4232]
            })
        })
        describe(`Sorting by popularity`, () => {
            it(`Sorts by "Most Popular"`, async () => {
                // Select "Most Popular"
                // Confirm URL changes accordingly
                // Confirm "Most Popular" is selected
                // Confirm items are sorted by popularity, aka reviews 
                })
            })
        describe(`Sorting by rating`, () => {
            it(`Sorts by "Highest Rated"`, async () => {
                // Select "Highest Rated"
                // Confirm URL changes accordingly
                // Confirm "Highest Rated" is selected
                // Confirm items are sorted by rating, aka stars 
            })
        })
        describe(`Sorting by name alphabetically`, () => {
            it(`Sorts by "Name: A - Z"`, async () => {
                // Select "Name: A - Z"
                // Confirm URL changes accordingly
                // Confirm "Name: A - Z" is selected
                // Confirm items are sorted by name alphabetically
            })
            it(`Sorts by "Name: Z - A"`, async () => {
                // Select "Name: Z - A"
                // Confirm URL changes accordingly
                // Confirm "Name: Z - A" is selected
                // Confirm items are sorted by name reverse alphabetically
            })
        })
        describe(`Sorting by price`, () => {
            it(`Sorts by "Price: Low to High"`, async () => {
                // Select "Price: Low to High"
                // Confirm URL changes accordingly
                // Confirm "Price: Low to High" is selected
                // Confirm items are sorted by price
            })
            it(`Sorts by "Price: High to Low"`, async () => {
                // Select "Price: High to Low"
                // Confirm URL changes accordingly
                // Confirm "Price: High to Low" is selected
                // Confirm items are sorted by price reverse
            })
        })
        describe(`Sorting by date`, () => {
            it(`Sorts by "Newest First"`, async () => {
                // Select "Newest First"
                // Confirm URL changes accordingly
                // Confirm "Newest First" is selected
                // Confirm items are sorted by date - (unsure due to blackbox)
            })
        })
    })
})