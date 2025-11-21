import { str } from '../../utils/utils'
import { $ } from '@wdio/globals'
import Base from '../base/base';


class HomePage extends Base {
    public get subUrl():str { return "" }
    public async open() {
        await super.open();
    }
}

export default new HomePage();
