import BaseSearch from './base/baseSearch';


/** Page after searching
 * 
 *  https://www.parts-express.com/search */
class SearchPage extends BaseSearch {
    /** @param subUrl "search" */
    public get subUrl() { return "search" }

    /** @deprecated Get to this page by searching from search bar */
    public async open() {
        await super.open(this.baseUrl)
    }
}

/** Page after searching
 * 
 *  https://www.parts-express.com/search */
export default new SearchPage();