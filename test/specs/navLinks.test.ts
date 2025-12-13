import Assert from "../asserts/assert"
import HomePage from "../pageobjects/pages/home.page";




describe(`Nav Links [MTQA-4219]`, () => {
    before(async () => {
        await HomePage.openPage()
        await HomePage.Popup.dismissPopupViaLocalStorage()
    })
    describe(`Each navbar menu`, () => {
        for(const menu1 of HomePage.NavBar.NavMenusWithLinks) {
            describe(`"${menu1.name}"`, () => {
                it(`Assert the menu opens`, async () => {
                    await HomePage.NavBar.clickToOpenMenu(menu1)
                    await Assert.NavBar.assertNavMenuIsOpen(menu1)
                })
                for(const link1 of menu1.links) {
                    it(`Assert "${link1.name}" links to path "${link1.path}"`, async () => {
                        await Assert.NavBar.assertNavLink(menu1,link1,link1.path)
                    })
                    describe(`Tests duplicate links for "${link1.name}"`, () => {
                        for(const menu2 of HomePage.NavBar.NavMenusWithLinks) {
                            for(const link2 of menu2.links) {
                                if(link1.path === link2.path && link1.name !== link2.name) {
                                    it(`Assert link is different than "${link2.name}"`, async () => {
                                        await Assert.NavBar.assertNavLink(menu1,link1,link2.path,{reverse:true})
                                    })
                                }
                            }
                        }
                    })
                }
                it(`Assert the menu closes`, async () => {
                    await HomePage.NavBar.clickTocloseMenu(menu1)
                    await Assert.NavBar.assertNavMenuIsOpen(menu1,{reverse:true})
                })
            })
        }
    })
})
