import { base } from "../pages/base/base"


/** The base for my custom elements */
export default abstract class MyElement {
    /** Selector for this element */
    public abstract get $base():ChainablePromiseElement

    /** Waits until `this` element is displayed */
    public async waitForThis(ops:{reverse?:boolean}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        await this.$base.waitForDisplayed({reverse})
        await base.waitForLoad()
    }
    /** Waits for `$element` called `name` to show up */
    public async waitFor($element:ChainablePromiseElement,name:string,ops:{reverse?:boolean}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        return $element
            .waitForExist({
                timeout:5000,
                reverse,
                timeoutMsg:`${name} did${reverse?``:`n't`} appear`
            })
            .catch(() => {})
    }
}
