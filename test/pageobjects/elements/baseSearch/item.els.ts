import MyElement from "../element"


/** An item in the search results */
export default class Item extends MyElement {
    constructor(private _$base:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this._$base }
    private get $reviews() { return this.$base.$('.ratings-total') }
    private get $starRating() { return this.$base.$('.global-views-star-rating-area-fill') }
    private get $title() { return this.$base.$('.facets-item-cell-grid-title') }
    private get $price() { return this.$base.$('.product-views-price-exact') }

    /** Returns the amount of reviews for this item */
    public async getReviewCount() {
        await this.waitForLoad()
        await this.$reviews.waitForExist()
        const reviewText = await this.$reviews.getText()
        
        const match = reviewText.match(/(\d+)/)
        const reviewCount = match ? parseInt(match[1]) : 0
        return reviewCount
    }
    
    /** Returns the percentage of star level for this item */
    public async getStarRating() {
        await this.waitForLoad()
        await this.$starRating.waitForExist()
        const ratingText = await this.$starRating.getAttribute('style')
        if(!ratingText) {
            return 0
        }
        const match = ratingText.match(/(\d+)/)
        const ratingPercent = match ? parseInt(match[1]) : 0
        return ratingPercent
    }

    /** Returns the percentage of star level for this item */
    public async getTitle() {
        await this.waitForLoad()
        await this.$title.waitForExist()

        return this.$title.getText()
    }

    /** Returns the price for this item */
    public async getPrice() {
        await this.waitForLoad()
        await this.$price.waitForExist()

        const priceText = await this.$price.getAttribute('data-rate')
        const priceNum = priceText ? parseInt(priceText.replace(/\D/g,"")) : 0
        return priceNum
    }
}
