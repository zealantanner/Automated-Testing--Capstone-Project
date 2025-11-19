import { str } from '../utils/utils';
import { $ } from '@wdio/globals'
import Base from './base';



class SearchPage extends Base {
    /** @param subUrl catalogsearch/result */
    public get subUrl() { return "catalogsearch/result" }

    /** @param baseUrl https://www.taydaelectronics.com/catalogsearch/result */
    public get baseUrl() { return new URL(this.subUrl,super.baseUrl).toString() }

    /** @param query https://www.taydaelectronics.com/catalogsearch/result?q={{itemName}} */
    public baseUrlWithQuery(query?:str) {
        const url = new URL(this.baseUrl)
        if(query) {
            url.searchParams.set("q", query)
        }
        return url.toString()
    }
    public async open(query:str) {
        await super.open(this.baseUrlWithQuery(query));
    }
}

export default new SearchPage();
