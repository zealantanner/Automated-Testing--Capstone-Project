import { Int, int, str } from '../../utils/utils'
import { browser, $, $ as $x } from '@wdio/globals'
import Base from './base'
import Item from '../../elements/baseSearch/item.els'
import SortByDropdown from '../../elements/baseSearch/sortByDropdown.el'

/** `keywords:str, page?:int` */
export type SearchOptions = { keywords:str, page?:int }
/** `category:str, keywords?:str, page?:int` */
export type CategoryOptions = { categories:str[], keywords?:str, page?:int }
//> sometimes they have "keywords=wire connector&oq=wire"

export default abstract class BaseSearch<TOptions extends SearchOptions | CategoryOptions> extends Base {
    /** `search` or `ss_category` */
    public abstract get subUrl():str
    /**  https://www.parts-express.com/ `subUrl` */
    public get baseUrl() { return new URL(this.subUrl, super.baseUrl) }
    
    public get SortByDropdown() { return new SortByDropdown()}

    public get items() {
        return $$('.facets-item-collection-view-cell')
        .map(el => new Item($(el)))
    }

    private get totalItems() { return $('.facets-facet-browse-title-products h2') }
    public async getTotalItemInt() {
        return parseInt(await this.totalItems.getAttribute("data-quantity"))
    }

    public baseUrlWithParameters(options:TOptions):URL {
        const url = (options && 'categories' in options)
            ? new URL(`${this.subUrl}/${encodeURI(options.categories.join())}`, this.baseUrl) //category
            : this.baseUrl //search
        if(options?.page && options.page !== 1) {
            url.searchParams.set("page", options.page.toString())
        }
        if(options?.keywords) {
            url.searchParams.set("keywords", options.keywords)
        }
        return url
    }
    public async openSearch(options:TOptions) {
        const url = this.baseUrlWithParameters(options)
        await super.open(url)
    }
    
    /** @deprecated Use openSearch */
    public async open(path:str|URL= this.baseUrl) {
        await super.open(path)
    }
}