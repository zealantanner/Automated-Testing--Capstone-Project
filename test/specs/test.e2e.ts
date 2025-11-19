import { browser, expect } from '@wdio/globals'
import HomePage from '../pageobjects/home.page'
import SearchPage from '../pageobjects/search.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await HomePage.open()
        // await HomePage.cookiePopup.close()
        await HomePage.searchBar.search("wire")
        await browser.pause(100000)
        // await HomePage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveText(
        //     expect.stringContaining('You logged into a secure area!'))
    })
})

