import { expect } from '@wdio/globals'
import { base } from "../pageobjects/pages/base/base"


/** Base for all assertions */
export default class AssertBase {
    /** Asserts `$element` has href that contains `path` */
    protected async assertHref($element:ChainablePromiseElement, path:string|RegExp, ops:{reverse?:boolean}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const href = await $element.getAttribute("href")
        const assertion = reverse ? expect(href).not : expect(href)
        
        if(path instanceof RegExp) {
            await assertion.toMatch(path)
        } else {
            await assertion.toContain(path)
        }
    }

    /** Waits for `$element` called `name` to show up */
    protected async waitFor($element:ChainablePromiseElement,ops:{reverse?:boolean,timeout?:number,timeoutMsg?:string}={}) {
        const {reverse=false,timeout,} = ops;
        await base.waitForLoad()
        return $element
            .waitForExist({
                timeout,
                reverse,
            })
            .catch(() => {})
    }
}
