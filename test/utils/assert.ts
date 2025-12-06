import { bool, str, int, Int, _ } from "./utils"
import SearchPage from "../pageobjects/pages/search.page"

class NavLinks {
    
}
class SearchBar {

}
class SearchPageCategories {

}
class SearchPageSortByDropdown {
    public async optionIsSelected(optionNum:int) {
        const option = SearchPage.SortByDropdown.options[optionNum]
        await expect(await option.isSelected()).toBe(true)
    }
}

class Assert {
    public get NavLinks() { return new NavLinks() }
    public get SearchBar() { return new SearchBar() }
    public get SearchPageCategories() { return new SearchPageCategories() }
    public get SearchPageSortByDropdown() { return new SearchPageSortByDropdown() }
    // public get Page() { return new Page }

    public async urlContains(path:str|RegExp|URL, reverse=false) {
        if(path instanceof URL) path = path.toString()

        const currentUrl = await browser.getUrl()

        const expectUrl = (reverse) ? expect(currentUrl).not : expect(currentUrl)
        
        if(path instanceof RegExp) {
            await expectUrl.toMatch(path)
        } else {
            await expectUrl.toContain(path)
        }

        // if(path instanceof RegExp) {
        //     if(reverse) {
        //         // Assert current url is not path
        //         await expect(currentUrl).not.toMatch(path)
        //     } else {
        //         // Assert current url is path
        //         await expect(currentUrl).toMatch(path)
        //     }
        // } else {
        //     // path is a string
        //     if(reverse) {
        //         // Assert current url is not path
        //         await expect(currentUrl).not.toContain(path)
        //     } else {
        //         // Assert current url is path
        //         await expect(currentUrl).toContain(path)
        //     }
        // }
    }
    
    // await SearchPage.SortByDropdown.waitFor()
    // await SearchPage.SortByDropdown.selectOption(1) // Select "Most Popular"
    // await SearchPage.SortByDropdown.waitFor()
    // await SearchPage.assertUrlContains("order=custitem_pe_search_ranking:desc") // Confirm URL changes accordingly
    // await SearchPage.SortByDropdown.assertOptionIsSelected(1) // Confirm "Most Popular" is selected
    // // Confirm items are sorted by popularity, aka reviews
    
}

export default new Assert();
