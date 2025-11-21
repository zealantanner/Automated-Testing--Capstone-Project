import { int, str } from '../../utils/utils'
import { browser, $, $ as $x } from '@wdio/globals'
import Base from './base'
import Items from '../../elements/baseSearch/items'

/** `keywords:str, page?:int` */
export type SearchOptions = { keywords:str, page?:int }
/** `category:str, keywords?:str, page?:int` */
export type CategoryOptions = { category:str, keywords?:str, page?:int }

export default abstract class BaseSearch<TOptions extends SearchOptions | CategoryOptions> extends Base {
    /** `search` or `ss_category` */
    public abstract get subUrl():str
    /**  https://www.parts-express.com/ `subUrl` */
    public get baseUrl() { return new URL(this.subUrl, super.baseUrl) }
    
    private get resultItemsBox() { return $('.facets-items-collection-view-row') }
    public get resultItems() {
        return this.resultItemsBox.$$('.facets-item-collection-view-cell')
        .map(el => new Items($(el)))
    }

    public baseUrlWithParameters(options:TOptions):URL {
        const url = (options && 'category' in options)
            ? new URL(`${this.subUrl}/${options.category}`, this.baseUrl) //category
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
    public override async open(path:str|URL= this.baseUrl) {
        console.warn("Shouldn't be used")
        await super.open(path)
    }
}