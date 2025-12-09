import { Int, str, waitForLoad } from "../../../utils/utils"
import { browser, $, $ as $x } from '@wdio/globals'
import MyElement from "../../element"




/** @param CategoryFilter a chosen category filter on category page */
export default class CategoryFilter extends MyElement {
    constructor(private _$base:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this._$base }
    
    public get $btnX() { return this.$base.$('.facets-facets-display-filter-delete-icon') }
    private get $title() { return this.$base.$('.facets-facets-display-filter-value') }
    private get $titleBox() { return this.$title.$('.facets-facets-display-filter-value') }

    public async getInfo() {
        await waitForLoad()
        const fullName = await this.$titleBox.getText()
        const nameChain = fullName.split(">")
        return {
            fullName: fullName,
            nameChain: nameChain,
        }
    }
    public async remove() {
        await waitForLoad()
        await this.$btnX.click()
        await waitForLoad()
    }
}


