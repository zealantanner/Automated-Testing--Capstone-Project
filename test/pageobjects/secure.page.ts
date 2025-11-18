import { $ } from '@wdio/globals'
import Base from './base.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Base {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }
}

export default new SecurePage();
