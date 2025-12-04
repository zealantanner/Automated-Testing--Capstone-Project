import { bool, str, int, Int, _ } from "../utils/utils"
import { $ } from "@wdio/globals"
import { base } from "../pageobjects/base/base"


export default abstract class Element {
    /** the selector for this element */
    public abstract get base():ChainablePromiseElement

    /** @param isVisible returns bool */
    public async isVisible() {
        return await this.base.isExisting()
    }

    /** waits until this element exists */
    public async waitFor() {
        await this.base.waitForExist()
    }
}