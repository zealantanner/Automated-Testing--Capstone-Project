import { bool, str, int, Int, _ } from "../../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import Element from "../element"


class Facet {
    constructor(private root: WebdriverIO.Element) {}
    public get link() { return this.root.$('a') }
    public get title() { return this.link.$('label span') }
    public async getTitleInfo() {
        const titleText = await this.title.getText()
        const match = titleText.match(/(?<name>.+) \((?<amount>\d+)\)/)
        const {name="", amount="0"} = match?.groups ?? {}
        return {name, amount: Int(amount)}
    }
    public isChosen = false //> eh maybe not
    public async choose() {
        this.isChosen = true
        await this.link.click()
    }
}

export default class category extends Element {
    public get base() { return $('*[data-facet-id="ss_category"]') }
    public get filters() {
        let t = this.isVisible()
        return this.base.$$('li').map(el => new Facet(el))
    }
}
//> after a facet is chosen it goes to a different page, 
//> have faceted mode, which facet was chosen, option to cancel chosen facet, clear all



// export class Item {
//     constructor(private root: WebdriverIO.Element) {}
//     public get btnAddToCart() {
//         return this.root.$('button[id^="add-to-cart"]')
//     }
//     public async clickAdd() {
//         await this.btnAddToCart.click()
//     }
//     public get btnRemove() {
//         return this.root.$('button[id^="remove"]')
//     }
//     public async clickRemove() {
//         await this.btnRemove.click()
//     }
//     public get link() {
//         return this.root.$('a[id^="item_"][id$="_title_link"]')
//     }
//     public async clickLink() {
//         await this.link.click()
//     }
//     public async getId() {
//         const idAttr = await this.link.getAttribute('id')
//         const match = idAttr.match(/item_(\d+)_title_link/)
//         return match ? match[1] : "-1"
//     }
//     public get inCart() {
//         return this.btnRemove.isExisting()
//     }
//     public async getTitle() {
//         return await this.link.$('.inventory_item_name').getText();
//     }
// }
