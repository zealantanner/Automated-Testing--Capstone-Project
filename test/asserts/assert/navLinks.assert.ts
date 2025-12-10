import { bool, str, int, Int, _, getElementByText, waitForLoad } from "../../utils/utils"
import SearchPage from "../../pageobjects/pages/search.page"
import { base } from "../../pageobjects/base/base"
import { Asserters } from "../assert"


export default class NavLinks extends Asserters {
    public async confirmDropdownOpen(menuName:str) {
        await waitForLoad()
        const $dropdown = getElementByText(menuName,base.NavBar.$base)
        // const dropdownName = base.NavBar.dropdownLinks[menuName]
        const isOpen = (await $dropdown.getAttribute("aria-expanded")) === "true"
        await expect(isOpen).toBe(true)
    }
    public async confirmNavLink(menuName:str, link:{text:str,url:str}, isReverse=false) {
        await waitForLoad()
        const $dropdown = getElementByText(menuName,base.NavBar.$base)
        const $link = getElementByText(link.text,$dropdown)
        const linkText = await $link.getAttribute("href")
        await this.href($link, linkText, isReverse)
        await expect(linkText).toBe(link.url)
    }
}
