import { getElementByText, str } from "../../../utils/utils"
import { $ } from "@wdio/globals"
import MyElement from "../element"


/** Link under Navbar dropdowns */
export type NavLink = {
    text:str,
    path:str,
}

/** Dropdowns on Navbar */
export type NavMenu = {
    menuName:str,
    links:NavLink[],
}

/** The navigation bar under the header of the page */
export default class NavBar extends MyElement {
    public get $base() { return $('.navbar') }

    /** Navbar names and links */
    public readonly dropdownLinks:NavMenu[] = [
        {
            menuName:"SHOP",
            links: [
                { text:"New Products", path:"/promodisplay/N?order=ss_searchable_updated_date:asc" },
                { text:"Shop by Brand", path:"/brands" },
                { text:"Home A/V", path:"/home-a-v" },
                { text:"Speaker Components", path:"/speaker-components" },
                { text:"Pro Audio", path:"/pro-audio" },
                { text:"Car Audio", path:"/car-audio" },
                { text:"Electronic Parts", path:"/electronic-parts" },
                { text:"Connectors & Adapters", path:"/connectors-adapters" },
                { text:"Tools & Supplies", path:"/tools-supplies" },
                { text:"Battery & Power", path:"/battery-power" },
                { text:"Wire & Cables", path:"/wire-cables" },
                { text:"Novelty", path:"/novelty" },
            ]
        },
        {
            menuName:"DEALS",
            links: [
                { text:"On Sale", path:"/promo/on_sale_today" },
                { text:"Liquidation Center", path:"/liquidation" },
                { text:"Open Box & Refurbished", path:"/promo/refurbished-restocked-open-box-products" },
                { text:"Gift Certificates", path:"/gift-certificate" },
            ]
        },
        {
            menuName:"PROFESSIONAL",
            links: [
                { text:"Commercial Accounts", path:"/commercial-account" },
                { text:"OEM/ODM Services", path:"/oem" },
                { text:"Business Forms", path:"/forms" },
                { text:"Education", path:"/education" },
                { text:"Installer/Integrator Referral Network", path:"/installerintegrator-referral-network" },
                { text:"Installer/Integrator Referral Sign-up", path:"/installerintegrator-referral-signup" },
            ]
        },
        {
            menuName:"GET HELP",
            links: [
                { text:"FAQs", path:"/faq" },
                { text:"Tech Support", path:"/contact-us" },
                { text:"Woofer Replacement Tool", path:"/woofer-replacement" },
                { text:"Track My Order", path:"https://orderstatus.parts-express.com/" },
                { text:"Contact Us", path:"/contact-us" },
            ]
        },
        {
            menuName:"LEARN",
            links: [
                { text:"Resource Center", path:"/resource-center" },
                { text:"Customer Project Gallery", path:"http://projectgallery.parts-express.com/" },
                { text:"TechTalk Forum", path:"http://techtalk.parts-express.com/" },
            ]
        },
    ]

    /** Clicks to open specified `dropdown` */
    public async openDropdown(dropdown:NavMenu) {
        await this.waitForLoad()
        const $dropdown = getElementByText(dropdown.menuName)
        await $dropdown.click()
    }
}
