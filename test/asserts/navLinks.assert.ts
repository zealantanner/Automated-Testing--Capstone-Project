import { bool, getElementByText, int, str } from "../utils/utils"
import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { NavLink, NavMenu } from "../pageobjects/elements/base/navBar.el";


/** Testing nav bar */
export default class NavLinks extends AssertBase {
    /** Asserts `menu` is open */
    public async assertNavMenuOpen(menu:NavMenu,ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const $dropdown = base.NavBar.$dropdown(menu)
        await this.waitFor($dropdown,"Dropdown",{reverse})

        if(reverse) {
            await expect($dropdown).not.toBeDisplayed()
        } else {
            await expect($dropdown).toBeDisplayed()
        }
    }

    /** Asserts href of `link` under open `menu` */
    public async assertNavLink(menu:NavMenu,link:NavLink,path:str,ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;

        await base.waitForLoad()

        const $link = base.NavBar.$link(menu,link)
        await this.assertHref($link, path, {reverse})
    }
}
