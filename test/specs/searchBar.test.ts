import HamburgerAssert from "../asserts/hamburgerAssert";





describe(`Search Bar`, () => {
    describe(`Typeahead [MTQA-4221]`, () => {
        describe(`Terms`, () => {
            it(``, async () => {
            })
        })
        describe(`Brands`, () => {
        })
        describe(`Results`, () => {
            it(``, async () => {
            })
            it(``, async () => {
            })
            it(``, async () => {
            })
        })
    })
    describe(`Input field [MTQA-4227]`, () => {
        it(``, async () => {
        })
        it(``, async () => {
        })
        it(``, async () => {
        })
    })
    describe(`Submit Button [MTQA-4228]`, () => {
        it(``, async () => {
        })
        it(``, async () => {
        })
    })
    it(`Should open and close the hamburger menu from random pages`, async () => {
        await HamburgerAssert.assertOpenAndClose()
    })
})
describe(`All Items button [MTQA-3847]`, () => {
    it(`should direct to inventory page`, async () => {
        await HamburgerAssert.assertAllItems()
    })
})
describe(`About button [MTQA-3849]`, () => {
    it(`should direct to saucelabs page`, async () => {
        await HamburgerAssert.assertAbout(false)
    })
})
describe(`Logout button [MTQA-3850]`, () => {
    it(`should log the user out`, async () => {
        await HamburgerAssert.assertLogout()
    })
})
describe(`Reset App State button [MTQA-3851]`, () => {
    it(`should reset the status of items added to the cart`, async () => {
        await HamburgerAssert.assertResetAppState()
    })
})
