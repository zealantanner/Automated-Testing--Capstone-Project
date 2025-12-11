import { bool, str, int, _, getElementByText } from "../utils/utils"
import { base } from "../pageobjects/pages/base/base"



export default class AssertBase {
    public async href($element:ChainablePromiseElement, path:str|RegExp, ops:{reverse?:bool}={}) {
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
}
