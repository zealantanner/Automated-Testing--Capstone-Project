# Element: [[Nav Links.canvas|Nav Links]]
- ## Test Case: [Nav links (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4219) #test/automated
	1. Test: Dropdowns open with links visible
		- [[Each dropdown opens]]
	2. Test: Each link under specified dropdown directs to the correct URL
		- [[URL changes according to link]]
- ## Test Case: [Nav links (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4220) #test/manual
	1. Test: Dropdown aspects behave correctly Dropdown button becomes highlighted
		- [[Dropdown aspects behave correctly]]
# Element: [[Search Bar.canvas|Search Bar]]
- ## Test Case: [Search Bar - Typeahead (Automated)]([Ticket](https://mtechqa.atlassian.net/browse/MTQA-4221)) #test/automated
	- #### Terms:
		1. Test: When a term in typeahead is clicked the URL changes accordingly
			- [[URL changes according to chosen term]]
		2. Test: Typeahead changes accordingly
			- [[Changes typeahead results accordingly]] 
	- #### Brands:
		None
	- #### Results:
		1. Test: URL changes when an item is clicked
			- [[URL changes to the corresponding item's url]]
		2. Test: Title and footer keywords match input
			- [[Title and footer show correct keywords]]
		3. Test: Footer is clicked and activates search #related/activateSearch
			- [[URL changes according to text inputted]]
- ## Test Case: Search Bar - Typeahead (Manual) #test/manual
	- #### Terms:
		1. Test: Term results are relevant
			- [[Terms are relevant]]
		2. Test: Specified term is highlighted when hovered over
			- [[Terms highlight on hover]]
	- #### Brands:
		1. Test(unsure): Brand link is clicked
			- [[Brand on click?]]
		2. Test(unsure): Brand link is hovered over
			- [[Brand on hover?]]
		3. Test: Specified brand is underlined when hovered over
			- [[Underlines specified text on hover]]
		4. Test: Brand results are relevant
			- [[Brands are relevant]]
	- #### Results:
		1. Test: Typeahead items are relevant
			- [[Typeahead results are relevant]]
- ## Test Case: Search bar - Input Field (Automated) #test/automated
	1. Test: Input text #related/typeahead
		- [[Typeahead appears]]
	2. Test(Negative): Input nonsense text #related/typeahead #test/negative
		- [[No results in Typeahead]]
	3. Test(Negative): Input too many characters #test/negative
		- [[Limited to 100 characters]]
- ## Test Case: Search bar - Input Field (Manual) #test/manual
	1. Test: Typing in the search bar feels normal
		- [[Inputting text feels normal]]
- ## Test Case: Search bar - Submit Button (Automated) #test/automated
	1. Test: URL changes with valid text inputted #related/activateSearch
		- [[URL changes according to text inputted]]
	2. Test(Negative): When the search bar has no text inputted it doesn't search #test/negative
		- [[With no text in input field nothing happens on click]]
- ## Test Case: Search bar - Submit Button (Manual) #test/manual
	1. Test: Search item results are relevant
		- [[With valid text inputted search results are relevant]]
# Element: [[Search Page Categories.canvas|Search Page Categories]] #related/searchPageCategories
- ## Test Case: Search Page Categories (Automated) #test/automated
    1. Test: The category dropdown opens and closes
        - [[Opens on click]]
        - [[Closes on click]]
    2. Test: Choosing a category applies the filter
        - [[The correct number of results are displayed]]
        - [[URL changes according to category]]
        - [[Category is displayed as chosen]]
    3. Test: Removing the category filters accordingly
        - [[Category is removed]]
        - [[URL changes according to category]]
- ## Test Case: Search Page Categories (Manual) #test/manual
    1. Test: Items are filtered accordingly when a category is chosen
        - [[Displayed items are relevant to the category]]
    2. Test: Irrelevant items are not included
        - [[Items that are irrelevant  to the filter are not included]]
    3. Test: Highlights red when hovered over
        - [[Highlights red on hover]]
# Element: [[Search Page Sort By Dropdown.canvas|Search Page Sort By Dropdown]]
- ## Test Case: Sort By Dropdown (Automated) #test/automated
    1. Test: dropdown options #related/sortByOptions
        - "Most Popular"
            - [[Loosely sorts by reviews]]
        - "Highest Rated"
            - [[Loosely sorts by stars]]
        - "Name: A - Z" and "Name: Z - A"
            - [[Loosely sorts alphabetically]]
        - "Price: Low to High" and "Price: High to Low"
            - [[Loosely sorts by price]]
    2. Test: Url changes for each option
        - [[URL changes according to search item]]
    3. Test: Option is selected after selection
        - [[Option appears to be selected]]
- ## Test Case: Sort By Dropdown (Manual) #test/manual
    1. Test: dropdown options #related/sortByOptions
        - "Best Match"
            - [[Sorts by most relevant]]
        - (unsure) "Newest First"
            - [[Sorts by newest?]]
    2. Test: Blue highlight when hovered over
        - [[Option highlights blue on hover]]



> Each sub-task can reference the same story

The tasks after story go in the acceptance criteria