import { Int } from "../../../utils/utils"
import { browser, $, $ as $x } from '@wdio/globals'



/** @param Category part of category sidebar */
export default class Category extends Element {
    constructor(private _base:ChainablePromiseElement) {
        super()
    }
    public get base() { return this._base }
    
    public get link() { return this.base.$('a') }
    public get title() { return this.link.$('label span') }
    public async getTitleInfo() {
        const titleText = await this.title.getText()
        const match = titleText.match(/(?<name>.+) \((?<amount>\d+)\)/)
        const {name="", amount="0"} = match?.groups ?? {}
        return {name, amount: parseInt(amount)}
    }
    public isChosen = false //> eh maybe not
    public async choose() {
        this.isChosen = true
        await this.link.click()
    }
}


//> after a facet is chosen it goes to a different page, 
//> have faceted mode, which facet was chosen, option to cancel chosen facet, clear all
