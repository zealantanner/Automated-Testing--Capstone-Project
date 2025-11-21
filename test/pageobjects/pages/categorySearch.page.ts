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
}

export default new CategorySearchPage();
