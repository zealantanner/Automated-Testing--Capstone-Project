import { bool, str, int, Int, _, getElementByText } from "../utils/utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/pages/base/base"
import AssertBase from "./assert.base"
// import { Asserters } from "./assert.base"


export default class NavLinks extends AssertBase {
    public async confirmDropdownOpen(menuName:str) {
        await base.waitForLoad()
        const $dropdown = getElementByText(menuName,base.NavBar.$base)
        // const dropdownName = base.NavBar.dropdownLinks[menuName]
        const isOpen = (await $dropdown.getAttribute("aria-expanded")) === "true"
        await expect(isOpen).toBe(true)
    }
    public async confirmNavLink(menuName:str, link:{text:str,url:str}, isReverse=false) {
        await base.waitForLoad()
        const $dropdown = getElementByText(menuName,base.NavBar.$base)
        const $link = getElementByText(link.text,$dropdown)
        const linkText = await $link.getAttribute("href")
        await this.href($link, linkText, isReverse)
        await expect(linkText).toBe(link.url)
    }
}
