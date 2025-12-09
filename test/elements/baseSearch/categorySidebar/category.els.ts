import { Int, waitForLoad } from "../../../utils/utils"
import { browser, $, $ as $x } from '@wdio/globals'
import MyElement from "../../element"



/** @param Category part of category sidebar */
export default class Category extends MyElement {
    constructor(private _$base:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this._$base }
    
    public get $link() { return this.$base.$('a') }
    public get $title() { return this.$link.$('label span') }
    public async getTitleInfo() {
        await waitForLoad()
        const titleText = await this.$title.getText()
        const match = titleText.match(/(?<name>.+) \((?<amount>\d+)\)/)
        const {name="", amount="0"} = match?.groups ?? {}
        return {name, amount: parseInt(amount)}
    }
    public async choose() {
        await waitForLoad()
        await this.$link.click()
        await waitForLoad()
    }
}


//> after a facet is chosen it goes to a different page, 
//> have faceted mode, which facet was chosen, option to cancel chosen facet, clear all
