import { str } from "../../../utils/utils"
import { browser, $ } from '@wdio/globals'
import Base from './base'
import Item from '../../elements/baseSearch/item.els'
import SortByDropdown from '../../elements/baseSearch/sortByDropdown.el'
import CategorySidebar from '../../elements/baseSearch/categorySidebar.el'


/** Base search page */
export default abstract class BaseSearch extends Base {
    /** @param subUrl "search" or "ss_category" */
    public abstract get subUrl():str
    /** https://www.parts-express.com/ `"search" | "ss_category"` */
    public get baseUrl() { return new URL(this.subUrl, super.baseUrl) }
    
    /** Category menu on search page */
    public get CategorySidebar() { return new CategorySidebar() }
    /** "Sort By" dropdown on search page */
    public get SortByDropdown() { return new SortByDropdown() }

    /** Above item results on search page, usually says "See `x` results for `search term`" */
    private get $totalItemsH2() { return $('.facets-facet-browse-title-products h2') }
    /** Returns current page and total pages for this search */
    public async getTotalResultAmount() {
        const amount = await this.$totalItemsH2.getAttribute("data-quantity")
        return parseInt(amount)
    }

    /** Element that displays "Page `current page`/`total pages`" */
    private get $pageNumber() { return $('p.global-views-pagination-label-plp-header')}
    /** Returns `currentPageNumber` and `totalPagesNumber` for this search */
    public async getPageInfo() {
        await this.waitForLoad()
        const textAttr = await this.$pageNumber.getText()
        const match = textAttr.match(/Page (\d+)\/(\d+)/)
        const currentPageNumber = match ? parseInt(match[1]) : -1
        const totalPagesNumber = match ? parseInt(match[2]) : -1
        return {
            /** Total pages for this search*/
            currentPageNumber,
            /** Total pages for this search*/
            totalPagesNumber,
        }
    }
    
    /** Each item in the search results, as array of `Item` */
    public get items() {
        return $$('.facets-item-collection-view-cell')
        .map(el => new Item($(el)))
    }

    /** Changes Url to go to specified page. Supports negative for last pages (`-1` = last page)*/
    public async goToPage(num=1) {
        const pageInfo = await this.getPageInfo()
        const lastPageNum = pageInfo.totalPagesNumber
        if(num < 0) {
            num = lastPageNum + num + 1
        }
        num = Math.max(1, Math.min(num, lastPageNum))
        
        const url = new URL(await browser.getUrl())
        url.searchParams.set('page',String(num))
        await super.open(url.toString())
    }
}

/** Base search page */
export const baseSearch = new class extends BaseSearch {
    public get subUrl() { return "search" }
}