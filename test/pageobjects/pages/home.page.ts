import Base from './base/base';

/** Main page
 * 
 *  https://www.parts-express.com */
class HomePage extends Base {
    /** @param subUrl "" */
    public get subUrl() { return "" }

    /** Opens the home page */
    public async open() {
        await super.open();
    }
}

/** Main page
 * 
 *  https://www.parts-express.com */
export default new HomePage();
