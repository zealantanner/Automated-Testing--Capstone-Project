import { bool, str, int, pickRandomFrom, pickRandom$From } from "../../../utils/utils"
import { browser, $ } from '@wdio/globals'
import Base from './base'
import Item from '../../elements/baseSearch/item.els'
import SortByDropdown from '../../elements/baseSearch/sortByDropdown.el'
import CategorySidebar from '../../elements/baseSearch/categorySidebar.el'

/** `keywords:str, page?:int` */
export type SearchOptions = { keywords:str, page?:int }
/** `category:str, keywords?:str, page?:int` */
export type CategoryOptions = { categories:str[], keywords?:str, page?:int }

//> sometimes they have "keywords=wire connector&oq=wire"
//> delete all the ability to search via url //>//>//>
//> look at all references

/** The base search page */
export default abstract class BaseSearch<TOptions extends SearchOptions | CategoryOptions> extends Base {
    /** @param subUrl "search" or "ss_category" */
    public abstract get subUrl():str
    
    /** https://www.parts-express.com/ `subUrl` */
    public get baseUrl() { return new URL(this.subUrl, super.baseUrl) }
    
    /** Category menu on search page */
    public get CategorySidebar() { return new CategorySidebar() }

    /** "Sort By" dropdown on search page */
    public get SortByDropdown() { return new SortByDropdown() }

    private get $totalItemsH2() { return $('.facets-facet-browse-title-products h2') }
    /** Returns current page and total pages for this search */
    public async getTotalResultAmount() {
        const amount = await this.$totalItemsH2.getAttribute("data-quantity")
        return parseInt(amount)
    }

    private get $pageNumber() { return $('p.global-views-pagination-label-plp-header')}
    /** Returns current page and total pages for this search */
    public async getPageInfo() {
        await this.waitForLoad()
        const textAttr = await this.$pageNumber.getText()
        const match = textAttr.match(/Page (\d+)\/(\d+)/)
        const currentPageNum = match ? parseInt(match[1]) : -1
        const totalPages = match ? parseInt(match[2]) : -1
        return {
            currentPageNum,
            totalPages,
        }
    }

    public get items() {
        return $$('.facets-item-collection-view-cell')
        .map(el => new Item($(el)))
    }

    /** Changes Url to go to specified page. Supports negative for last pages (`-1` = last page)*/
    public async goToPage(num=1) {
        const pageInfo = await this.getPageInfo()
        const lastPageNum = pageInfo.totalPages
        if(num < 0) {
            num = lastPageNum + num + 1
        }
        num = Math.max(1, Math.min(num, lastPageNum))
        
        const url = new URL(await browser.getUrl())
        url.searchParams.set('page',String(num))
        await super.open(url.toString())
    }

    /** Returns baseUrl with the specified parameters */
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

    /** Opens page with specified search parameters */
    public async openSearch(options:TOptions) {
        const url = this.baseUrlWithParameters(options)
        await super.open(url)
    }
    
    /** @deprecated Use openSearch */
    public async open(path:str|URL= this.baseUrl) {
        await super.open(path)
    }
}

/** The base search page */
export const baseSearch = new class extends BaseSearch<CategoryOptions> {
    public get subUrl() { return "search" }
}