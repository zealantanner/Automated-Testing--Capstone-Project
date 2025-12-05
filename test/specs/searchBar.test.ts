




describe(`Search Bar`, () => {
    describe(`Typeahead [MTQA-4221]`, () => {
        describe(`Terms`, () => {
            describe(`When a term in typeahead is clicked the URL changes accordingly`, () => {
                it(`Changes URL according to chosen term`, async () => {
                    // Input text into search box
                    // Click a term in the typeahead results
                    // Confirm the URL changed accordingly
                })
            })
            describe(`Typeahead terms change accordingly`, () => {
                it(`Changes terms in typeahead results accordingly`, async () => {
                    // Input text into search box
                    // Confirm typeahead changes accordingly

                    // Input new text
                    // Confirm typeahead changes accordingly
                })
            })
        })
        describe(`Brands`, () => {
            describe(`Brands is clicked`, () => {
                it(`Clicks on a brand - (unsure of how to test this)`, async () => {
                    // Input text into search box
                    // Click a brand
                    // ???
                })
                it(`Hovers over a brand - (unsure of how to test this)`, async () => {
                    // Input text into search box
                    // Hover on a brand
                    // ???
                })
            })
        })
        describe(`Results`, () => {
            describe(`URL changes when an item is clicked in the typeahead`, () => {
                it(`Changes URL to match the corresponding item`, async () => {
                    // Input text into search box
                    // Click an item in the typeahead results
                    // Confirm the URL changed accordingly
                })
            })
            describe(`Typeahead title and footer keywords match input`, () => {
                it(`Shows correct keywords in the title and footer`, async () => {
                    // Input text into search box
                    // Confirm title and footer show the same text in the search box
                })
            })
            describe(`Typeahead footer is clicked and activates search`, () => {
                it(`Changes URL according to text inputted`, async () => {
                    // Input text into search box
                    // Click the results footer in the typeahead
                    // Confirm the URL changes to the search page
                })
            })
        })
    })
    describe(`Input field [MTQA-4227]`, () => {
        describe(`Input text`, () => {
            it(`Makes the typeahead appear`, async () => {
                // Input some valid text like "wire" into search box
                // Confirm typeahead appears
            })
        })
        describe(`(Negative) Input nonsense text`, () => {
            it(`Shows no results in the typeahead`, async () => {
                // Input random text into search box
                // Confirm typeahead appears with no results
            })
        })
        describe(`(Negative) Input too many characters`, () => {
            it(`Is limited to 100 characters`, async () => {
                // Input more than 100 characters into search box
                // Confirm only 100 characters are able to be in the text box
            })
        })
    })
    describe(`Submit Button [MTQA-4228]`, () => {
        describe(`URL changes with valid text inputted`, () => {
            it(`Changes URL according to text inputted`, async () => {
                // Input text into search box
                // Click the search button
                // Confirm URL changes accordingly
            })
        })
        describe(`(Negative) When the search bar has no text inputted it doesn't search`, () => {
            it(`Should make nothing happen on click with no text in input field`, async () => {
                // Have no text inputted in the search box
                // Click the search button
                // Confirm the URL and results don't change
            })
        })
    })
})