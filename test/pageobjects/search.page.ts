import { str } from '../utils/utils';
import { $ } from '@wdio/globals';
import Base from './base';



class SearchPage extends Base {
    /** @param subUrl search */
    public get subUrl() { return "search" }
    /** @param baseUrl https://www.parts-express.com/search */
    public get baseUrl() { return new URL(this.subUrl, super.baseUrl) }
    
    /** @param keywords https://www.parts-express.com/search?keywords={{query}} */
    public baseUrlWithQuery(keywords?:str) {
        const url = this.baseUrl
        if(keywords) {
            url.searchParams.set("keywords", keywords)
        }
        
        return url.toString()
    }
    public async open(query:str) {
        await super.open(this.baseUrlWithQuery(query));
    }
}

//> use something like the python library for finding closest word for tpyoes... maybe
//> use an ai to generate relevant search terms


export default new SearchPage();
