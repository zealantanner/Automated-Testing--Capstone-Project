import { bool, str, int, Int, _ } from "../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import Element from "../element"
import Facets from "./categorySidebar/facets"



export default class Category extends Element {
    public get base() { return $('[data-facet-id="ss_category"]') }
    public get facets() {
        return this.base.$$('li')
        .map(el => new Facets($(el)))
    }
    public async clickbase() {
        await this.base.click()
    }
}
