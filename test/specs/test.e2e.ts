import { browser, expect } from '@wdio/globals'
import HomePage from '../pageobjects/pages/home.page'
import { base } from '../pageobjects/base/base';
import SearchPage from '../pageobjects/pages/search.page';
import CategorySearchPage from '../pageobjects/pages/categorySearch.page';
import { customTimeout } from '../utils/utils';


describe('My Login application', () => {
    before(async () => {
        await HomePage.open()
        await base.Popup.dismissPopupViaLocalStorage()
    });
    it('should login with valid credentials', async () => {
        await browser.pause(3000)
        await SearchPage.open()
        await browser.pause(3000)
        await SearchPage.openSearch({keywords:"door lock"})
        await browser.pause(3000)
        await CategorySearchPage.open()
        await browser.pause(3000)
        await CategorySearchPage.openSearch({categories:["dooky sucklage~—"]})
        // await CategorySearchPage.openSearch({ca})
        await browser.pause(3000)
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

