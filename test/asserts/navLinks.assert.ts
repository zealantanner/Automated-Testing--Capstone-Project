import { bool, getElementByText } from "../utils/utils"
import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { NavLink, NavMenu } from "../pageobjects/elements/base/navBar.el";


export default class NavLinks extends AssertBase {
    /** Asserts the `dropdown` is open */
    public async assertDropdownOpen(dropdown:NavMenu, ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        
        const $dropdown = getElementByText(dropdown.menuName,base.NavBar.$base)
        const isOpen = (await $dropdown.getAttribute("aria-expanded")) === "true"
        await expect(isOpen).toBe(!reverse)
    }

    /** Asserts the href of `link` under `dropdown` */
    public async assertNavLink(dropdown:NavMenu, link:NavLink, ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const $dropdown = getElementByText(dropdown.menuName,base.NavBar.$base)
        const $link = getElementByText(link.text,$dropdown)
        const linkText = await $link.getAttribute("href")
        await this.assertHref($link, linkText, {reverse})
        await expect(linkText).toBe(link.path)
    }
}
