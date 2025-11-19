
import { $ } from "@wdio/globals"


export default abstract class element {
    public abstract get base():ChainablePromiseElement
    public async isVisible() { //> this might not work with being overridden, watch out for it
        return await this.base.isDisplayed()
    }
}

