import { bool, str, int, Int, _, getElementByText } from "../utils/utils"
import SearchPage from "../pageobjects/pages/search.page"
import { base } from "../pageobjects/pages/base/base"

export default class AssertBase {
    public async href($element:ChainablePromiseElement, path:str|RegExp, isReverse=false) {
        await base.waitForLoad()
        const linkText = await $element.getAttribute("href")
        
        const expectUrl = (isReverse) ? expect(linkText).not : expect(linkText)
        
        await base.waitForLoad()
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }
    }
}
