import { bool, str, int, Int, _ } from "../utils/utils"
import { $ } from "@wdio/globals"
import { base } from "../pageobjects/base"


export default abstract class Element {
    public abstract get base():ChainablePromiseElement
    /** @param isVisible returns bool */
    public async isVisible() {
        return await this.base.isDisplayed()
    }
    /** waits until it exists */
    public async waitFor() {
        await this.base.waitForExist() // works
        // await this.base.waitForEnabled() // works
        // await this.base.waitForDisplayed() // doesn't work
    }
}

//> tell jeremy dont use waitForDisplayed, use waitForExist instead