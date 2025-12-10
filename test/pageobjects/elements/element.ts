import { bool, str, int, _ } from "../../utils/utils"
import { $ } from "@wdio/globals"
import { base } from "../pages/base/base"


export default abstract class MyElement {
    /** the selector for this element */
    public abstract get $base():ChainablePromiseElement

    /** waits to stop loading */
    public async waitForLoad() {
        const $loadingIcon = $('#loadingIndicator')
        await $loadingIcon.waitForDisplayed({reverse:true})
        // await this.loadingIcon.waitForExist({reverse:true})
    }

    /** waits until this element exists */
    public async waitFor() {
        await base.waitForLoad()
        await this.$base.waitForExist()
        await base.waitForLoad()
    }
}