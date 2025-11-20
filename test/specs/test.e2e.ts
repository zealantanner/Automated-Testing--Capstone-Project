import { browser, expect } from '@wdio/globals'
import HomePage from '../pageobjects/page/home.page'
import { base } from '../pageobjects/base/base';


describe('My Login application', () => {
    // before(async () => await base.Popup.killBeforeItsEvenBorn());
    it('should login with valid credentials', async () => {
        await HomePage.open()
        await base.Popup.dismissPopupViaLocalStorage()
        // await HomePage.cookiePopup.close()
        await HomePage.SearchBar.search("wire")
        await HomePage.SearchBar.search("usb")
        await HomePage.SearchBar.search("wire")
        await 
        await HomePage.SearchBar.search("usb")
        await HomePage.SearchBar.search("wire")
        await HomePage.SearchBar.search("usb")
        await HomePage.SearchBar.search("wire")
        await HomePage.SearchBar.search("usb")
        await HomePage.SearchBar.search("wire")
        await HomePage.SearchBar.search("usb")
        // await browser.pause(100000)
        // await HomePage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
    })
})

