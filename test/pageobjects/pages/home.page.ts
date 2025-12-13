import Base from './base/base';


/** Main page
 * 
 *  https://www.parts-express.com */
class HomePage extends Base {
    /** @param subUrl "" */
    public get subUrl() { return "" }

    /** Opens home page */
    public async openPage() {
        await super.openPage();
    }
}

/** Main page
 * 
 *  https://www.parts-express.com */
export default new HomePage();
