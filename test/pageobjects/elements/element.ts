import { bool, str, int } from "../../utils/utils"
import { $ } from "@wdio/globals"
import { base } from "../pages/base/base"


export default abstract class MyElement {
    /** The selector for this element */
    public abstract get $base():ChainablePromiseElement

    /** Waits until the page is done loading */
    public async waitForLoad() {
        const $loadingIcon = $('#loadingIndicator')
        await $loadingIcon.waitForDisplayed({reverse:true})
    }

    /** Waits until `this` element is displayed */
    public async waitFor(ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        await this.$base.waitForExist({reverse})
        await base.waitForLoad()
    }
}
