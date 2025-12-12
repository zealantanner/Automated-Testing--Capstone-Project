import { bool, getElementByText, int, str } from "../../../utils/utils"
import { $ } from "@wdio/globals"
import MyElement from "../element"
import { base } from "../../pages/base/base"


/** A navbar menu's links */
export type NavLink = {
    /** Title of navbar menu link
     * 
     *  e.g. `"New Products"` */
    title:str,
    /** Url path of link
     * 
     *  e.g. `"/speaker-components"` */
    path:str,
}
/** Navbar title and links */
export type NavMenu = {
    /** Title of navbar menu
     * 
     *  e.g. `"SHOP"` */
    title:str,
    /** Array of `NavLinks`
     * 
     *  e.g. `text:"Pro Audio"`, `path:"/pro-audio"` */
    links:NavLink[],
}

/** Navigation bar under header of page */
export default class NavBar extends MyElement {
    public get $base() { return $('.navbar') }
    /** Get all navbar `$$menus` */
    public get $$menus() { return this.$base.$$('.navbar-nav') }
    /** Get specified navbar `$menu` via `index` | `name` | `NavMenu` */
    public $menu(menu:int|str|NavMenu) {
        if(typeof menu === "number") { // index
            return this.$$menus[menu]
        } else if(typeof menu === "string") { // name
            return this.$base.$(`//*[contains(text(),"${menu}")]/../..`)
        } else { // NavMenu
            return this.$base.$(`//*[contains(text(),"${menu.title}")]/../..`)
        }
    }
    /** Get `$dropdown` in specified `menu` which contains links */
    public $dropdown(menu:NavMenu) {
        const $menu = this.$menu(menu)
        return $menu.$('.dropdown-menu')
    }
    /** Get `$btnDropdownToggle` in specified `menu` */
    public $btnDropdownToggle(menu:NavMenu) {
        const $menu = this.$menu(menu)
        return $menu.$('.dropdown-toggle')
    }
    /** Get all `$$links` in specified `menu` */
    public $$links(menu:NavMenu) {
        const $menu = this.$menu(menu)
        return $menu.$$('[data-touchpoint]')
    }
    /** Get specified `$link` via `index` | `name` | `NavLink` in specified `menu`  */
    public $link(menu:NavMenu,link:NavLink) {
        const $menu = this.$menu(menu)
        if(typeof link === "number") { // index
            // return $menu.$$(`//*[@data-touchpoint]`)[link]
            return $menu.$$(`//ul[@class="dropdown-menu"]/li/a`)[link]
        } else if(typeof link === "string") { // name
            // return $menu.$(`//*[@data-touchpoint][contains(text(),"${link}")]`)
            return $menu.$(`//ul[@class="dropdown-menu"]/li/a[contains(text(),"${link}")]`) 
        } else { // NavLink
            // return $menu.$(`//*[@data-touchpoint][contains(text(),"${link.title}")]`)
            return $menu.$(`//ul[@class="dropdown-menu"]/li/a[contains(text(),"${link.title}")]`) 
        }
    }

    /** Navbar names and links */
    public readonly menusAndLinks:NavMenu[] = [
        {
            title:"SHOP",
            links: [
                { title:"New Products", path:"/promodisplay/N?order=ss_searchable_updated_date:asc" },
                { title:"Shop by Brand", path:"/brands" },
                { title:"Home A/V", path:"/home-a-v" },
                { title:"Speaker Components", path:"/speaker-components" },
                { title:"Pro Audio", path:"/pro-audio" },
                { title:"Car Audio", path:"/car-audio" },
                { title:"Electronic Parts", path:"/electronic-parts" },
                { title:"Connectors & Adapters", path:"/connectors-adapters" },
                { title:"Tools & Supplies", path:"/tools-supplies" },
                { title:"Battery & Power", path:"/battery-power" },
                { title:"Wire & Cables", path:"/wire-cables" },
                { title:"Novelty", path:"/novelty" },
            ]
        },
        {
            title:"DEALS",
            links: [
                { title:"On Sale", path:"/promo/on_sale_today" },
                { title:"Liquidation Center", path:"/liquidation" },
                { title:"Open Box & Refurbished", path:"/promo/refurbished-restocked-open-box-products" },
                { title:"Gift Certificates", path:"/gift-certificate" },
            ]
        },
        {
            title:"PROFESSIONAL",
            links: [
                { title:"Commercial Accounts", path:"/commercial-account" },
                { title:"OEM/ODM Services", path:"/oem" },
                { title:"Business Forms", path:"/forms" },
                { title:"Education", path:"/education" },
                { title:"Installer/Integrator Referral Network", path:"/installerintegrator-referral-network" },
                { title:"Installer/Integrator Referral Sign-up", path:"/installerintegrator-referral-signup" },
            ]
        },
        {
            title:"GET HELP",
            links: [
                { title:"FAQs", path:"/faq" },
                { title:"Tech Support", path:"/contact-us" },
                { title:"Woofer Replacement Tool", path:"/woofer-replacement" },
                { title:"Track My Order", path:"https://orderstatus.parts-express.com" },
                { title:"Contact Us", path:"/contact-us" },
            ]
        },
        {
            title:"LEARN",
            links: [
                { title:"Resource Center", path:"/resource-center" },
                { title:"Customer Project Gallery", path:"http://projectgallery.parts-express.com" },
                { title:"TechTalk Forum", path:"http://techtalk.parts-express.com" },
            ]
        },
    ]

    /** Returns specified `NavMenu` */
    public getMenu(menu:int|str|NavMenu):NavMenu {
        if(typeof menu === "number") { // index
            const navMenu = this.menusAndLinks[menu]
            return navMenu
        } else if(typeof menu === "string") { // title
            const navMenu = this.menusAndLinks.find((val) => val.title === menu)
            if(!navMenu) {
                throw new Error(`No NavMenu with name "${menu}"`)
            }
            return navMenu
        } else {
            return menu
        }
    }
    /** Returns specified `NavLink` in `menu` */
    public getLink(menu:NavMenu,link:int|str|NavLink):NavLink {
        if(typeof link === "number") { // index
            const navLink = menu.links[link]
            return navLink
        } else if(typeof link === "string") { // title
            const navLink = menu.links.find((val) => val.title === link)
            if(!navLink) {
                throw new Error(`No NavLink with name "${link}" in "${menu.title}"`)
            }
            return navLink
        } else {
            return link
        }
    }

    /** Returns `bool` if specified `menu` is open */
    public isMenuOpen(menu:NavMenu) {
        const navMenu = this.getMenu(menu)
        return this.$dropdown(navMenu).isDisplayed()
    }
    /** Clicks to open or close specified `menu` */
    public async clickMenu(menu:NavMenu) {
        await base.waitForLoad()

        const navMenu = this.getMenu(menu)
        const $btnToggle = this.$btnDropdownToggle(navMenu)
        await this.waitFor($btnToggle,`Navbar "${navMenu.title}"`)
        await this.$btnDropdownToggle(navMenu).click()
    }
    /** Clicks to open specified `menu` */
    public async openMenu(menu:NavMenu) {
        await base.waitForLoad()

        if(!await this.isMenuOpen(menu)) {
            await this.clickMenu(menu)
        }
        await this.$dropdown(menu).waitForDisplayed()
    }
    /** Clicks to close specified `menu` */
    public async closeMenu(menu:NavMenu) {
        await base.waitForLoad()
        
        if(await this.isMenuOpen(menu)) {
            await this.clickMenu(menu)
        }
        await this.$dropdown(menu).waitForDisplayed({reverse:true})
    }
}
