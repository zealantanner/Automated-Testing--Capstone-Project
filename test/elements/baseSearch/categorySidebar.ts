import { bool, str, int, Int, _ } from "../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import Element from "../element"
import Categories from "./categorySidebar/categories"



export default class CategorySidebar extends Element {
    public get base() { return $('[data-facet-id="ss_category"]') }
    
    public get categories() {
        return this.base.$$('li')
        .map(el => new Categories($(el)))
    }
}
