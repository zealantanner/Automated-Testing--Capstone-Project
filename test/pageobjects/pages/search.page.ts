import { int, str } from '../../utils/utils';
import { $ } from '@wdio/globals';
import Base from './base/base';
import BaseSearch, { SearchOptions } from './base/baseSearch';


/** Page after searching
 * 
 *  https://www.parts-express.com/search */
class SearchPage extends BaseSearch<SearchOptions> {
    /** @param subUrl "search" */
    public get subUrl() { return "search" }

    /** `keywords:str, page?:int` */
    public async openSearch(options:SearchOptions) {
        await super.openSearch(options)
    }
}



/** Page after searching
 * 
 *  https://www.parts-express.com/search */
export default new SearchPage();