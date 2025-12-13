import AssertBase from "./assert.base"
import { base } from "../pageobjects/pages/base/base"
import { NavLink, NavMenu } from "../pageobjects/elements/base/navBar.el";

//> get rid of "dont use this"
/** Don't use this, use `Assert.NavBar` instead */
export default class NavBar extends AssertBase {
    /** Asserts `menu` is open */
    public async assertNavMenuIsOpen(menu:NavMenu,ops:{reverse?:boolean}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const $dropdown = base.NavBar.$dropdown(menu)
        await this.waitFor($dropdown,"Dropdown",{reverse,timeout:100})

        if(reverse) {
            await expect($dropdown).not.toBeDisplayed()
        } else {
            await expect($dropdown).toBeDisplayed()
        }
    }

    /** Asserts href of `link` under open `menu` */
    public async assertNavLink(menu:NavMenu,link:NavLink,path:string,ops:{reverse?:boolean}={}) {
        const {reverse=false} = ops;

        await base.waitForLoad()

        const $link = base.NavBar.$link(menu,link)
        await this.assertHref($link, path, {reverse})
    }
}
