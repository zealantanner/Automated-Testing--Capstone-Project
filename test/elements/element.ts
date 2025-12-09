import { bool, str, int, Int, _ } from "../utils/utils"
import { $ } from "@wdio/globals"
import { base } from "../pageobjects/base/base"


export default abstract class MyElement {
    /** the selector for this element */
    public abstract get base():ChainablePromiseElement

    /** @param isVisible returns bool */
    public async isVisible() {
        await this.waitForLoad()
        return await this.base.isExisting()
    }

    
    /** waits until this element exists */
    public async waitFor() {
        await this.waitForLoad()
        await this.base.waitForExist()
        await this.waitForLoad()
    }

    private get loadingIcon() { return $('#loadingIndicator') }
    /** waits to stop loading */
    public async waitForLoad() {
        await this.loadingIcon.waitForDisplayed({reverse:true})
    }
}