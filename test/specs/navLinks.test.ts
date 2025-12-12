import Assert from "../asserts/assert"
import { base } from "../pageobjects/pages/base/base";
import HomePage from "../pageobjects/pages/home.page";
import { randomFrom, shuffle } from "../utils/utils";




describe(`Nav Links [MTQA-4219]`, () => {
    before(async () => {
        // Go to https://www.parts-express.com
        await HomePage.open()
        // Dismiss popup modal via local storage
        await HomePage.Popup.dismissPopupViaLocalStorage()
    })
    // Each navbar link
    describe(`Each navbar menu`, () => {
        // Open each nav menu
        for(const menu1 of base.NavBar.menusAndLinks) {
            describe(`"${menu1.title}"`, () => {
                it(`Asserts opens`, async () => {
                    // Click to open menu
                    await base.NavBar.openMenu(menu1)
                    // Assert the menu is opened
                    await Assert.NavLinks.assertNavMenuOpen(menu1)
                })
                describe(`Links`, () => {
                    // For each link
                    for(const link1 of menu1.links) {
                        it(`Asserts "${link1.title}" links to the path "${link1.path}"`, async () => {
                            // Assert href on link is correct
                            await Assert.NavLinks.assertNavLink(menu1,link1,link1.path)
                        })
                        describe(`Tests duplicate links for "${link1.title}"`, () => {
                            for(const menu2 of base.NavBar.menusAndLinks) {
                                for(const link2 of menu2.links) {
                                    // Asserts the paths are different unless the paths are the same
                                    if(link1.path === link2.path && link1.title !== link2.title) {
                                        it(`Asserts link is different than "${link2.title}"`, async () => {
                                            // Assert hrefs don't repeat
                                            await Assert.NavLinks.assertNavLink(menu1,link1,link2.path,{reverse:true})
                                        })
                                    }
                                }
                            }
                        })
                    }
                })
                it(`Asserts closes`, async () => {
                    // Click to close menu
                    await base.NavBar.closeMenu(menu1)
                    // Assert the menu is closed
                    await Assert.NavLinks.assertNavMenuOpen(menu1,{reverse:true})
                })
            })
        }
    })//>update jira and obsidian
})//> comment on all getters
//> change confirm to assert on jiras and obsidian
