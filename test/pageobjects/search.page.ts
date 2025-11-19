import { str } from '../utils/utils';
import { $ } from '@wdio/globals';
import SearchBar from './elements/base/searchBar';
import Base from './base';



class SearchPage extends Base {
    /** @param subUrl search */
    public get subUrl() { return "search" }
    /** @param baseUrl https://www.parts-express.com/search */
    public get baseUrl() { return new URL(this.subUrl,super.baseUrl) }
    
    /** @param query https://www.parts-express.com/search?keywords={{query}} */
    public baseUrlWithQuery(query?:str) {
        const url = this.baseUrl
        if(query) {
            url.searchParams.set("keywords", query)
        }
        return url.toString()
    }
    public async open(query:str) {
        await super.open(this.baseUrlWithQuery(query));
    }
}

export default new SearchPage();
