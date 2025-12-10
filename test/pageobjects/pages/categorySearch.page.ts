import { int, str } from '../../utils/utils';
import { $ } from '@wdio/globals';
import Base from '../base/base';
import SearchPage from './search.page';
import BaseSearch, { CategoryOptions } from '../base/baseSearch';



class CategorySearchPage extends BaseSearch<CategoryOptions> {
    /** `ss_category` */
    readonly subUrl = "ss_category"
    /** `category:str, keywords?:str, page?:int` */
    public async openSearch(options:CategoryOptions) {
        await super.openSearch(options)
    }
    public get $categoryFiltersBox() { return $('.facets-facet-browse-narrowedby') }
    public get $$categoryFilters() {
        return this.$categoryFiltersBox.$$('.facets-facets-display-filter')
    }
    public get $btnClearAll() {
        return $('.facets-facets-display-clear')
    }
}
//> you can still add categories from the search page

export default new CategorySearchPage();
