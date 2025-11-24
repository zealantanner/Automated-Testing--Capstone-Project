import { Int } from "../../../utils/utils"
import { browser, $, $ as $x } from '@wdio/globals'
import Element from "../../element"



/** @param CategoryFilters a chosen category filter on category page */
export default class CategoryFilters extends Element {
    constructor(private _base:ChainablePromiseElement) {
        super()
    }
    public get base() { return this._base }
    public get btnAddToCart() { return this.base.$('.add-to-cart-button-plp') }
    private get title() { return this.base.$('.facets-item-cell-grid-title') }
    private get price() { return this.base.$('.product-views-price-exact') }
    private get starRating() { return this.base.$('.global-views-star-rating') }
    private get reviews() { return this.base.$('.ratings-total') }
    private get stock() { return this.base.$('.product-line-stock') }
    public async getInfo() {
        const priceText = await this.price.getAttribute('data-rate')
        const titleText = await this.title.getText()
        const ratingText = await this.starRating.getAttribute('style')
        const ratingPercent = Int(
            ratingText.match(/width:(?<amount>\d+)%/)?.groups?.amount ?? -1
        )
        const reviewText = await this.reviews.getText()
        const reviewCount = Int(
            reviewText.match(/(?<amount>\d+) Reviews?/)?.groups?.amount ?? -1
        )
        const stockText = await this.stock.getText()
        return {
            title: titleText,
            price: priceText,
            starRating: ratingPercent,
            reviews: reviewCount,
            stockStatus: stockText,
        }
    }
    public isAddedToCart = false
    public async addToCart() {
        this.isAddedToCart = true
        await this.btnAddToCart.click()
    }
}


