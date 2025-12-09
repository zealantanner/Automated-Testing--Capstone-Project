import { customTimeout, getElementByText, int, pickRandomFrom, searchQueries } from "../utils/utils";
import Assert from "../utils/assert"
import { base } from "../pageobjects/base/base";





describe(`Nav Links [MTQA-4219]`, () => {
    // Each navbar link
    for(const dropdown of base.NavBar.dropdownLinks) {
        describe(`Navbar - ${dropdown.menuName}`, () => {
            it(`Opens ${dropdown.menuName}`, async () => {
                // Click dropdown
                await base.NavBar.openDropdown(dropdown.menuName)
                // Confirm it's open and links are visible
                await Assert.NavLinks.confirmDropdownOpen(dropdown.menuName)
            })
            // Open each nav dropdown
            for(const link of dropdown.links) {
                describe(`Tests link "${link.text}"`, () => {
                    it(`Confirm "${link.text}" links to the url "${link.url}"`, async () => {
                        // Confirm href is correct
                        Assert.NavLinks.confirmNavLink(dropdown.menuName,link)
                    })
                })
            }
        })
    }
})