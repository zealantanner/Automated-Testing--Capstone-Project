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
			- [[URL changes to match the corresponding item]]
		2. Test: Title and footer keywords match input
			- [[Title and footer show correct keywords]]
		3. Test: Footer is clicked and activates search
			- [[URL changes according to text inputted]]
- ## Test Case: [Search bar - Input Field (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4227) #test/automated
	1. Test: Input text
		- [[Typeahead appears]]
	2. Test(Negative): Input nonsense text #test/negative
		- [[No results in Typeahead]]
	3. Test(Negative): Input too many characters #test/negative
		- [[Limited to 100 characters]]
- ## Test Case: [Search bar - Submit Button (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4228) #test/automated
	1. Test: URL changes with valid text inputted
		- [[URL changes according to text inputted]]
	2. Test(Negative): When the search bar has no text inputted it doesn't search #test/negative
		- [[With no text in input field nothing happens on click]]
- ## Test Case: [Search Bar (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4222) #test/manual
	- #### Typeahead Terms:
		1. Test: Term results are relevant
			- [[Terms are relevant]]
		2. Test: Specified term is highlighted when hovered over
			- [[Terms highlight on hover]]
	- #### Typeahead Brands:
		1. Test: Brand results are relevant
			- [[Brands are relevant]]
		2. Test: Brand link is clicked (unsure) #test/unsure
			- [[Brand on click?]]
		3. Test: Brand link is hovered over (unsure) #test/unsure
			- [[Brand on hover?]]
			- [[Underlines specified text on hover]]
	- #### Typeahead Results:
		1. Test: Typeahead items are relevant
			- [[Typeahead results are relevant]]
	- #### Input Field:
        1. Test: Typing in the search bar feels normal
	        - [[Inputting text feels normal]]
	- #### Submit Button:
        1. Test: Search item results are relevant
            - [[With valid text inputted search results are relevant]]
# Element: [[Search Page Categories.canvas|Search Page Categories]]
- ## Test Case: [Search Page Categories (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4229) #test/automated
    1. Test: The category dropdown opens and closes
        - [[Opens on click]]
        - [[Closes on click]]
    2. Test: Adding and removing category applies the filter
        - [[URL changes according to category]]
        - [[Category is displayed as chosen]]
        - [[Category is removed]]
- ## Test Case: [Search Page Categories (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4230) #test/manual
    1. Test: Items are filtered accordingly when a category is chosen
        - [[Displayed items are relevant to the category]]
    2. Test(Negative): Irrelevant items are not included #test/negative
        - [[Items that are irrelevant to the filter are not included]]
    3. Test: Highlights red when hovered over
        - [[Highlights red on hover]]
# Element: [[Search Page Sort By Dropdown.canvas|Search Page Sort By Dropdown]]
- ## Test Case: [Sort By Dropdown (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4231) #test/automated
    1. Test: Dropdown options
        - "Most Popular"
            - [[Loosely sorts by reviews]]
        - "Highest Rated"
            - [[Loosely sorts by stars]]
        - "Name: A - Z" and "Name: Z - A"
            - [[Loosely sorts alphabetically]]
        - "Price: Low to High" and "Price: High to Low"
            - [[Loosely sorts by price]]
    2. Test: URL changes for each sort by option
        - [[URL changes according to sort by option]]
    3. Test: Option is labeled as selected after chosen
        - [[Option appears to be selected]]
- ## Test Case: [Sort By Dropdown (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4232) #test/manual
    1. Test: Dropdown options
        - "Best Match"
            - [[Sorts by most relevant]]
        - "Newest First" (unsure) #test/unsure
            - [[Sorts by newest?]]
    2. Test: Blue highlight when hovered over
        - [[Option highlights blue on hover]]



> Each sub-task can reference the same story

The tasks after story go in the acceptance criteria