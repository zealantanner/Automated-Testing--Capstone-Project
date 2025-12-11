import { int, str } from '../../utils/utils';
import { $ } from '@wdio/globals';
import Base from './base/base';
import SearchPage from './search.page';
import BaseSearch, { CategoryOptions } from './base/baseSearch';


/** Page after applying a category
 * 
 *  https://www.parts-express.com/ss_category */
class CategorySearchPage extends BaseSearch<CategoryOptions> {
    /** @param subUrl "ss_category" */
    public get subUrl() { return "ss_category" }

    public get $btnClearAll() {
        return $('.facets-facets-display-clear')
    }
    
    /** Presses "Clear All" to clear filters */
    public async clearCategories() {
        await this.waitForLoad()
        await this.$btnClearAll.waitForExist()
        await this.$btnClearAll.click()
        await this.waitForLoad()
    }

    /** `category:str, keywords?:str, page?:int` */
    public async openSearch(options:CategoryOptions) {
        await super.openSearch(options)
    }
}

/** Page after applying a category
 * 
 *  https://www.parts-express.com/ss_category */
export default new CategorySearchPage();
