import { str } from '../utils/utils'
import { $ } from '@wdio/globals'
import Base from './base';


class HomePage extends Base {
    public async open() {
        await super.open();
    }
}

export default new HomePage();
