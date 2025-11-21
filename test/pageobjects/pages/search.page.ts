import { int, str } from '../../utils/utils';
import { $ } from '@wdio/globals';
import Base from '../base/base';
import BaseSearch, { SearchOptions } from '../base/baseSearch';



class SearchPage extends BaseSearch<SearchOptions> {
    /** `search` */
    readonly subUrl = "search"
    /** `keywords:str, page?:int` */
    public async openSearch(options:SearchOptions) {
        await super.openSearch(options)
    }
}

//> use an ai to generate relevant search terms


export default new SearchPage();
