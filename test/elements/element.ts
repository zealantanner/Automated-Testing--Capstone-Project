import { bool, str, int, Int, _, waitForLoad } from "../utils/utils"
import { $ } from "@wdio/globals"
import { base } from "../pageobjects/base/base"


export default abstract class MyElement {
    /** the selector for this element */
    public abstract get $base():ChainablePromiseElement

    // /** @param isVisible returns bool */
    // public async isVisible() {
    //     await waitForLoad()
    //     return await this.$base.isExisting()
    // }

    
    /** waits until this element exists */
    public async waitFor() {
        await waitForLoad()
        await this.$base.waitForExist()
        await waitForLoad()
    }

}