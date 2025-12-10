import { customTimeout, getElementByText, str } from "../../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import MyElement from "../element"

type NavMenu = {
    menuName:str,
    links:{
        text:str,
        url:str,
    }[],
}
export default class NavBar extends MyElement {
    public get $base() { return $('.navbar') }
    
    readonly dropdownLinks:NavMenu[] = [
        {
            menuName: "SHOP",
            links: [
                { text:"New Products", url:"/promodisplay/N?order=ss_searchable_updated_date:asc" },
                { text:"Shop by Brand", url:"/brands" },
                { text:"Home A/V", url:"/home-a-v" },
                { text:"Speaker Components", url:"/speaker-components" },
                { text:"Pro Audio", url:"/pro-audio" },
                { text:"Car Audio", url:"/car-audio" },
                { text:"Electronic Parts", url:"/electronic-parts" },
                { text:"Connectors & Adapters", url:"/connectors-adapters" },
                { text:"Tools & Supplies", url:"/tools-supplies" },
                { text:"Battery & Power", url:"/battery-power" },
                { text:"Wire & Cables", url:"/wire-cables" },
                { text:"Novelty", url:"/novelty" },
            ]
        },
        {
            menuName: "DEALS",
            links: [
                { text:"On Sale", url:"/promo/on_sale_today" },
                { text:"Liquidation Center", url:"/liquidation" },
                { text:"Open Box & Refurbished", url:"/promo/refurbished-restocked-open-box-products" },
                { text:"Gift Certificates", url:"/gift-certificate" },
            ]
        },
        {
            menuName: "PROFESSIONAL",
            links: [
                { text:"Commercial Accounts", url:"/commercial-account" },
                { text:"OEM/ODM Services", url:"/oem" },
                { text:"Business Forms", url:"/forms" },
                { text:"Education", url:"/education" },
                { text:"Installer/Integrator Referral Network", url:"/installerintegrator-referral-network" },
                { text:"Installer/Integrator Referral Sign-up", url:"/installerintegrator-referral-signup" },
            ]
        },
        {
            menuName: "GET HELP",
            links: [
                { text:"FAQs", url:"/faq" },
                { text:"Tech Support", url:"/contact-us" },
                { text:"Woofer Replacement Tool", url:"/woofer-replacement" },
                { text:"Track My Order", url:"https://orderstatus.parts-express.com/" },
                { text:"Contact Us", url:"/contact-us" },
            ]
        },
        {
            menuName: "LEARN",
            links: [
                { text:"Resource Center", url:"/resource-center" },
                { text:"Customer Project Gallery", url:"http://projectgallery.parts-express.com/" },
                { text:"TechTalk Forum", url:"http://techtalk.parts-express.com/" },
            ]
        },
    ]

    public async openDropdown(dropdownTitle:str) {
        await this.waitForLoad()
        const $dropdown = getElementByText(dropdownTitle)
        const isOpen = (await $dropdown.getAttribute("aria-expanded")) === "true"
        if(!isOpen) {
            await $dropdown.click()
        }
        await this.waitForLoad()
    }
    
    public async clickLink(dropdownTitle:str, linkName:str) {
        //> use dropdownLinks.dropdowntitle, not just title. I need the menuname if I want to get the element by text
        //> same with asserts and openDropdown
        await this.waitForLoad()
        const $dropdown = getElementByText(dropdownTitle)
        const $linkToClick = getElementByText(linkName,$dropdown)
        await $linkToClick.click()
        await this.waitForLoad()
    }
}