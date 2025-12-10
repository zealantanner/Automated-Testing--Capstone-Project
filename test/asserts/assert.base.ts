import { bool, str, int, _, getElementByText } from "../utils/utils"
import { base } from "../pageobjects/pages/base/base"

export type AssertOps = { reverse?:bool }

export default class AssertBase {
    public async href($element:ChainablePromiseElement, path:str|RegExp, ops:{reverse?:bool}={}) {
        const {reverse=false} = ops;
        await base.waitForLoad()
        const linkText = await $element.getAttribute("href")
        
        const expectUrl = (reverse) ? expect(linkText).not : expect(linkText)
        
        await base.waitForLoad()
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
}
