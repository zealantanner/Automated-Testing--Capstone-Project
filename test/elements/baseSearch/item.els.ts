import { Int } from "../../utils/utils"
import { browser, $, $ as $x } from '@wdio/globals'
import Element from "../element"



/** @param Item an item in the search results */
export default class Item extends Element {
    constructor(private _base:ChainablePromiseElement) {
        super()
    }
    public get base() { return this._base }
    
    private get reviews() { return this.base.$('.ratings-total') }
    public async getReviewCount() {
        const reviewText = await this.reviews.getText()
        const reviewCount = Int(
            reviewText.match(/(?<amount>\d+) Reviews?/)?.groups?.amount ?? -1
        )
        return reviewCount
    }

    private get starRating() { return this.base.$('.global-views-star-rating') }
    public async getStarRating() {
        const ratingText = await this.starRating.getAttribute('style')
        const ratingPercent = Int(
            ratingText.match(/width:(?<amount>\d+)%/)?.groups?.amount ?? -1
        )
        return ratingPercent
    }

    private get title() { return this.base.$('.facets-item-cell-grid-title') }
    public async getTitle() { return this.title.getText() }

    private get price() { return this.base.$('.product-views-price-exact') }
    public async getPrice() { return Int(this.price.getAttribute('data-rate')) }
}


