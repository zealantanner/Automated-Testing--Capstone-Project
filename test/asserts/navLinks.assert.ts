import { bool, str, int, _, getElementByText } from "../utils/utils"
import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { baseSearch } from "../pageobjects/pages/base/baseSearch"



export default class NavLinks extends AssertBase {
    public async confirmDropdownOpen(menuName:str) {
        await base.waitForLoad()
        const $dropdown = getElementByText(menuName,base.NavBar.$base)
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
