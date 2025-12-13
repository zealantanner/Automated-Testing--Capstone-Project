import { base } from "../../pages/base/base"
import MyElement from "../element"


/** An item in the search results */
export default class Item extends MyElement {
    constructor(private _$base:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this._$base }
    /** Contains amount of reviews on this item */
    private get $reviews() { return this.$base.$('.ratings-total') }
    /** Contains style width percentage AKA star rating
     *  
     *  e.g. `style="width:90%"` */
    private get $starRating() { return this.$base.$('.global-views-star-rating-area-fill') }
    /** Contains name of this item */
    private get $title() { return this.$base.$('.facets-item-cell-grid-title') }
    /** Contains price of this item */
    private get $price() { return this.$base.$('.product-views-price-exact') }

    /** Returns amount of reviews on this item */
    public async getReviewCount() {
        await base.waitForLoad()
        await this.waitForThis()
        await this.$reviews.waitForExist()
        const reviewText = await this.$reviews.getText()
        
        const match = reviewText.match(/(\d+)/)
        const reviewCount = match ? parseInt(match[1]) : 0
        return reviewCount
    }
    /** Returns star level percentage for this item */
    public async getStarRating() {
        await base.waitForLoad()
        await this.waitForThis()
        await this.$starRating.waitForExist()
        const ratingText = await this.$starRating.getAttribute('style')
        if(!ratingText) {
            return 0
        }
        const match = ratingText.match(/(\d+)/)
        const ratingPercent = match ? parseInt(match[1]) : 0
        return ratingPercent
    }
    /** Returns name of this item */
    public async getTitle() {
        await base.waitForLoad()
        await this.waitForThis()
        await this.$title.waitForExist()

        return this.$title.getText()
    }
    /** Returns price of this item */
    public async getPrice() {
        await base.waitForLoad()
        await this.waitForThis()
        await this.$price.waitForExist()

        const priceText = await this.$price.getAttribute('data-rate')
        const priceNum = priceText ? parseInt(priceText.replace(/\D/g,"")) : 0
        return priceNum
    }
}
