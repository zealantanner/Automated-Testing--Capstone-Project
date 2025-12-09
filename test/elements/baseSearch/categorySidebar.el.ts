import { bool, str, int, Int, _ } from "../../utils/utils"
import { $, $ as $x, $$ } from "@wdio/globals"
import MyElement from "../element"
import Category from "./categorySidebar/category.els"



export default class CategorySidebar extends MyElement {
    public get base() { return $('[data-facet-id="ss_category"]') }
    
    public get categories() {
        return this.base.$$('li')
        .map(el => new Category($(el)))
    }
}
