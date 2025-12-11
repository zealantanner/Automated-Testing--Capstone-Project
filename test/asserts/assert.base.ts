import { bool, int, str } from "../utils/utils"
import { base } from "../pageobjects/pages/base/base"


/** Base for assertions */
export default class AssertBase {
    /** Asserts `$element` has href that contains `path` */
    protected async assertHref($element:ChainablePromiseElement, path:str|RegExp, ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()

        const href = await $element.getAttribute("href")
        const assertion = reverse ? expect(href).not : expect(href)
        
        if(path instanceof RegExp) {
            assertion.toMatch(path)
        } else {
            assertion.toContain(path)
        }
    }

    /** Asserts `value1`>`value2` */
    protected async assertCompareValues(value1:int,value2:int,ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        if(reverse) {
            await expect(value1).toBeLessThan(value2)
        } else {
            await expect(value1).toBeGreaterThan(value2)
        }
    }
}
