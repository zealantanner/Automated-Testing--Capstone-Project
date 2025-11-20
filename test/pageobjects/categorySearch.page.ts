import { str } from '../utils/utils';
import { $ } from '@wdio/globals';
import Base from './base';



class CategorySearch extends Base {
    /** @param subUrl ss_category */
    public get subUrl() { return "ss_category" }
    /** @param baseUrl https://www.parts-express.com/ss_category */
    public get baseUrl() { return new URL(this.subUrl, super.baseUrl) }
    
    /** @param categoryName https://www.parts-express.com/ss_category/{{categoryName}}?keywords={{keywords}} */
    /** @param keywords https://www.parts-express.com/ss_category/{{categoryName}}?keywords={{keywords}} */
    public baseUrlWithCategory(categoryName:str, keywords?:str) {
        const url = new URL(categoryName, this.baseUrl)
        if(keywords) {
            url.searchParams.set("keywords", keywords)
        }
        return url.toString()
    }
}
//> maybe extend from search?

export default new CategorySearch();
