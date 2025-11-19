
import { $ } from "@wdio/globals"


export default abstract class Element {
    public abstract get base():ChainablePromiseElement
    public async isVisible() {
        return await this.base.isDisplayed()
    }
}

