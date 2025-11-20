import { bool, str, int, Int, _ } from "../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import Element from "../element"
import Facet from "./categorySidebar/facet"



export default class Category extends Element {
    public get base() { return $('*[data-facet-id="ss_category"]') }
    public get facets() {
        return this.base.$$('li').map(el => new Facet($(el)))
    }
    public async clickbase() {
        await this.base.click()
    }
}

