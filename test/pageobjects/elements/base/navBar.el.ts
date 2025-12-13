import MyElement from "../element"
import { base } from "../../pages/base/base"


/** A navbar menu's links */
export type NavLink = {
    /** Title of navbar menu link
     * 
     *  e.g. `"New Products"` */
    name:string,
    /** Url path of link
     * 
     *  e.g. `"/speaker-components"` */
    path:string,
}
/** Navbar title and links */
export type NavMenu = {
    /** Title of navbar menu
     * 
     *  e.g. `"SHOP"` */
    name:string,
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
    public $menu(menu:number|string|NavMenu) {
        if(typeof menu === "number") { // index
            return this.$$menus[menu]
        } else if(typeof menu === "string") { // name
            return this.$base.$(`//*[contains(text(),"${menu}")]/../..`)
        } else { // NavMenu
            return this.$base.$(`//*[contains(text(),"${menu.name}")]/../..`)
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
        return $menu.$$(`//ul[@class="dropdown-menu"]/li/a`)
    }
    /** Get specified `$link` via `index` | `name` | `NavLink` in specified `menu`  */
    public $link(menu:NavMenu,link:NavLink) {
        const $menu = this.$menu(menu)
        if(typeof link === "number") { // index
            return this.$$links(menu)[link]
        } else if(typeof link === "string") { // name
            return $menu.$(`//ul[@class="dropdown-menu"]/li/a[contains(text(),"${link}")]`) 
        } else { // NavLink
            return $menu.$(`//ul[@class="dropdown-menu"]/li/a[contains(text(),"${link.name}")]`) 
        }
    }

    /** Navbar menu names and links */
    public readonly NavMenusWithLinks:NavMenu[] = [
        {
            name:"SHOP",
            links: [
                { name:"New Products", path:"/promodisplay/N?order=ss_searchable_updated_date:asc" },
                { name:"Shop by Brand", path:"/brands" },
                { name:"Home A/V", path:"/home-a-v" },
                { name:"Speaker Components", path:"/speaker-components" },
                { name:"Pro Audio", path:"/pro-audio" },
                { name:"Car Audio", path:"/car-audio" },
                { name:"Electronic Parts", path:"/electronic-parts" },
                { name:"Connectors & Adapters", path:"/connectors-adapters" },
                { name:"Tools & Supplies", path:"/tools-supplies" },
                { name:"Battery & Power", path:"/battery-power" },
                { name:"Wire & Cables", path:"/wire-cables" },
                { name:"Novelty", path:"/novelty" },
            ]
        },
        {
            name:"DEALS",
            links: [
                { name:"On Sale", path:"/promo/on_sale_today" },
                { name:"Liquidation Center", path:"/liquidation" },
                { name:"Open Box & Refurbished", path:"/promo/refurbished-restocked-open-box-products" },
                { name:"Gift Certificates", path:"/gift-certificate" },
            ]
        },
        {
            name:"PROFESSIONAL",
            links: [
                { name:"Commercial Accounts", path:"/commercial-account" },
                { name:"OEM/ODM Services", path:"/oem" },
                { name:"Business Forms", path:"/forms" },
                { name:"Education", path:"/education" },
                { name:"Installer/Integrator Referral Network", path:"/installerintegrator-referral-network" },
                { name:"Installer/Integrator Referral Sign-up", path:"/installerintegrator-referral-signup" },
            ]
        },
        {
            name:"GET HELP",
            links: [
                { name:"FAQs", path:"/faq" },
                { name:"Tech Support", path:"/contact-us" },
                { name:"Woofer Replacement Tool", path:"/woofer-replacement" },
                { name:"Track My Order", path:"https://orderstatus.parts-express.com" },
                { name:"Contact Us", path:"/contact-us" },
            ]
        },
        {
            name:"LEARN",
            links: [
                { name:"Resource Center", path:"/resource-center" },
                { name:"Customer Project Gallery", path:"http://projectgallery.parts-express.com" },
                { name:"TechTalk Forum", path:"http://techtalk.parts-express.com" },
            ]
        },
    ]

    /** Returns specified `NavMenu` */
    public getMenu(menu:number|string|NavMenu):NavMenu {
        if(typeof menu === "number") { // index
            const navMenu = this.NavMenusWithLinks[menu]
            return navMenu
        } else if(typeof menu === "string") { // title
            const navMenu = this.NavMenusWithLinks.find((val) => val.name === menu)
            if(!navMenu) {
                throw new Error(`No NavMenu with name "${menu}"`)
            }
            return navMenu
        } else {
            return menu
        }
    }

    /** Returns `boolean` if specified `menu` is open */
    public async isMenuOpen(menu:NavMenu) {
        const navMenu = this.getMenu(menu)
        return this.$dropdown(navMenu).isDisplayed()
    }
    /** Clicks to open or close specified `menu` */
    public async clickMenu(menu:NavMenu) {
        await base.waitForLoad()

        const navMenu = this.getMenu(menu)
        const $btnToggle = this.$btnDropdownToggle(navMenu)
        await this.waitFor($btnToggle,`Navbar "${navMenu.name}"`)
        await $btnToggle.click()
    }
    /** Clicks to open specified `menu` */
    public async clickToOpenMenu(menu:NavMenu) {
        await base.waitForLoad()

        if(!await this.isMenuOpen(menu)) {
            await this.clickMenu(menu)
        }
        await this.$dropdown(menu).waitForDisplayed()
    }
    /** Clicks to close specified `menu` */
    public async clickTocloseMenu(menu:NavMenu) {
        await base.waitForLoad()
        
        if(await this.isMenuOpen(menu)) {
            await this.clickMenu(menu)
        }
        await this.$dropdown(menu).waitForDisplayed({reverse:true})
    }
}
