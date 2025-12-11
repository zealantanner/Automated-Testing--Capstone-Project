import { bool, str, int, _, pickRandomFrom, pickRandom$From } from "../../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import MyElement from "../element"




export default class Typeahead extends MyElement {
    constructor(private $parentBase:ChainablePromiseElement) {
        super()
    }
    public get $base() { return this.$parentBase.$('.typeahead-searchspring-container') }
    public get $$terms() {return this.$base.$$('.typehaead-searchspring-term') }
    public get Results() {
        return {
            $title: this.$base.$('.typehaead-searchspring-results-title'),
            $$items: this.$base.$$('.typehaead-searchspring-item'),
            $footer: this.$base.$('.typehaead-searchspring-searchresult-link'),
        }
    }


    public get $$options() { return this.$base.$$('option') }
    public get $selectedOption() { return this.$base.$('option[selected]') }

    public async selectOption(optionNum:int) {
        await this.waitForLoad()
        await this.$base.waitForExist()
        
        await this.$base.click()
        await this.waitForLoad()

        await this.$$options[optionNum].waitForExist()
        await this.$$options[optionNum].click()
        await this.waitForLoad()
        // await this.$base.se
    }
}

