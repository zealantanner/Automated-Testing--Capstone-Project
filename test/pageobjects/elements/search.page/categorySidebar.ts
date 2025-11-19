import { bool, str } from "../../../utils/utils"
import element from "../element"
import { $, $ as $x, $$ } from "@wdio/globals"



class Filter {
    constructor(private root: WebdriverIO.Element) {}
    public get checkbox() { return this.root.$('input') }
    public get title() { return this.root.$('label')  }
    public async getInfo() {
        const name = await this.title.getText()

        const idAttr = await this.checkbox.getAttribute('id')
        const match = idAttr.match(/category_(\d+)/)
        const id = match ? match[1] : "-1"
        return {name, id}
    }
    //> eh maybe not
    public isChosen = false
    public async choose() {
        this.isChosen = true
        await this.checkbox.click()
    }
}

export default class category extends element {
    public get base() { return $('#filter-option-0-content') }
    public get filters() {
        let t = this.isVisible()
        return this.base.$$('.items .item').map(el => new Filter(el))
    }
}
//> after a filter is chosen it goes to a different page, 
//> have filtered mode, which filter was chosen, option to cancel chosen filter, clear all



export class Item {
    constructor(private root: WebdriverIO.Element) {}
    public get btnAddToCart() {
        return this.root.$('button[id^="add-to-cart"]')
    }
    public async clickAdd() {
        await this.btnAddToCart.click()
    }
    public get btnRemove() {
        return this.root.$('button[id^="remove"]')
    }
    public async clickRemove() {
        await this.btnRemove.click()
    }
    public get link() {
        return this.root.$('a[id^="item_"][id$="_title_link"]')
    }
    public async clickLink() {
        await this.link.click()
    }
    public async getId() {
        const idAttr = await this.link.getAttribute('id')
        const match = idAttr.match(/item_(\d+)_title_link/)
        return match ? match[1] : "-1"
    }
    public get inCart() {
        return this.btnRemove.isExisting()
    }
    public async getTitle() {
        return await this.link.$('.inventory_item_name').getText();
    }
}
