import { $ } from '@wdio/globals';
import BaseSearch from './base/baseSearch';


/** Page after applying a category
 * 
 *  https://www.parts-express.com/ss_category */
class CategorySearchPage extends BaseSearch {
    /** @param subUrl "ss_category" */
    public get subUrl() { return "ss_category" }

    /** "Clear All" button for the current filters */
    public get $btnClearAll() { return $('.facets-facets-display-clear') }
    
    /** Presses "Clear All" to clear filters */
    public async clearCategories() {
        await this.waitForLoad()
        await this.$btnClearAll.waitForExist()

        await this.$btnClearAll.click()
    }

    /** @deprecated Get to this page by applying a category */
    public async open() {
        await super.open(this.baseUrl)
    }
}

/** Page after applying a category
 * 
 *  https://www.parts-express.com/ss_category */
export default new CategorySearchPage();
