import { customTimeout, getElementByText, int, pickRandomFrom, searchQueries } from "../utils/utils";
import Assert from "../utils/assert"
import { base } from "../pageobjects/base/base";





describe(`Nav Links [MTQA-4219]`, () => {
    // Test each dropdown
    for(const [title, dropdown] of Object.entries(base.NavBar.dropdownLinks)) {
        describe(`Navbar - ${dropdown.menuName}`, () => {
            it(`Opens ${dropdown.menuName}`, async () => {
                // Click dropdown
                await base.NavBar.openDropdown(title)
                // Confirm it's open and links are visible
                await Assert.NavLinks.confirmDropdownOpen(title)
            })

            //> update jira tickets. No more clicking links. Confirm they can be clicked and confirm href instead
            //> update obsidian too
            // Open each nav dropdown
            for(const link of dropdown.links) {
                describe(`Tests link "${link.text}"`, () => {
                    it(`Confirm "${link.text}" links to the url "${link.url}"`, async () => {
                        // Confirm the link directs to the correct URL

                    })
                })
            }
        })
    }
})

describe(`Nav Links [MTQA-4219]`, () => {
    describe(`Dropdowns open with links visible`, () => {
        it(`Opens each dropdown`, async () => {
            // Open each dropdown
            // Click dropdown
            // Confirm it's open and links are visible
        })
    })
    describe(`Each link under specified dropdown directs to the correct URL`, () => {
        it(`Changes URL according to link`, async () => {
            // URL is correct for each link
            // Open each nav dropdown
            // Click each link in the dropdown
            // Confirm the link directs to the correct URL
        })
    })
})