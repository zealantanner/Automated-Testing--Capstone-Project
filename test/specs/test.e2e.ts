import { browser, expect } from '@wdio/globals'
import HomePage from '../pageobjects/page/home.page'
import { base } from '../pageobjects/base/base';
import SearchPage from '../pageobjects/page/search.page';
import CategorySearchPage from '../pageobjects/page/categorySearch.page';
import { customTimeout } from '../utils/utils';


describe('My Login application', () => {
    // before(async () => await base.Popup.killBeforeItsEvenBorn());
    it('should login with valid credentials', async () => {
        await HomePage.open()
        await base.Popup.dismissPopupViaLocalStorage()
        await browser.pause(4000)
        // await SearchPage.open()
        await SearchPage.openSearch({keywords:"door lock"})
        await browser.pause(4000)
        await CategorySearchPage.openSearch({category:"Wire & Cables"})
        await browser.pause(4000)
        await browser.pause(4000)
        // await HomePage.cookiePopup.close()
        await HomePage.SearchBar.search("wire")
        await HomePage.SearchBar.search("usb")
        await HomePage.SearchBar.search("wire")

        await HomePage.SearchBar.search("usb")
        await HomePage.SearchBar.search("wire")
        await HomePage.SearchBar.search("usb")
        await HomePage.SearchBar.search("wire")
        await HomePage.SearchBar.search("usb")
        await HomePage.SearchBar.search("wire")
        await HomePage.SearchBar.search("usb")
        // await SearchPage.open

        // await browser.pause(100000)
        // await HomePage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
    })
})

