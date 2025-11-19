import { str } from "../../../utils/utils"
import { $, $ as $x } from "@wdio/globals"
import Element from "../element"
import Typeahead from "./searchBar/typeahead"


export default class Popup extends Element {
    public get base() { return $('*[data-testid="POPUP"]') }
    public get btnClose() { return this.base.$('button[aria-label="Close dialog"]') }
}
