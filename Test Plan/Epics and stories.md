# Component: Nav Links [[Nav Links.canvas]]
- ## Test Case: [Nav links (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4219) #test/automated
	- For each dropdown:
		1. Test: Dropdown opens
			- [[Opens each dropdown]]
			1. Test: Each link under specified dropdown hrefs to the correct URL
				- [[Confirms href is correct]]
- ## Test Case: [Nav links (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4220) #test/manual
	1. Test: Dropdown aspects behave correctly Dropdown button becomes highlighted
		- [[Dropdown aspects behave correctly]]
# Component: Search Bar [[Search Bar.canvas]]
- ## Test Case: [Search Bar - Typeahead (Automated)]([Ticket](https://mtechqa.atlassian.net/browse/MTQA-4221)) #test/automated
	- #### Terms:
		1. Test: When a term in typeahead is clicked the URL changes accordingly
			- [[Changes URL according to chosen term]]
		2. Test: Typeahead terms change accordingly
			- [[Changes terms in typeahead results accordingly]] 
	- #### Brands:
		None
	- #### Results:
		1. Test: URL changes when an item is clicked in the typeahead
			- [[Changes URL to match the corresponding item]]
		2. Test: Typeahead title and footer keywords match input
			- [[Shows correct keywords in the title and footer]]
		3. Test: Typeahead footer is clicked and activates search
			- [[Changes URL according to text inputted]]
- ## Test Case: [Search bar - Input Field (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4227) #test/automated
	1. Test: Input text
		- [[Makes the typeahead appear]]
	2. Test(Negative): Input nonsense text #test/negative
		- [[Shows no results in the typeahead]]
	3. Test(Negative): Input too many characters #test/negative
		- [[Is limited to 100 characters]]
- ## Test Case: [Search bar - Submit Button (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4228) #test/automated
	1. Test: URL changes with valid text inputted
		- [[Changes URL according to text inputted]]
	2. Test(Negative): When the search bar has no text inputted it doesn't search #test/negative
		- [[Should make nothing happen on click with no text in input field]]
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
			- [[Clicks on a brand - unsure]]
		3. Test: Brand link is hovered over (unsure) #test/unsure
			- [[Hovers over a brand - unsure]]
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
# Component: Search Page Categories [[Search Page Categories.canvas]]
- ## Test Case: [Search Page Categories (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4229) #test/automated
    1. Test: The category dropdown opens and closes
        - [[Opens and closes on click]]
	2. Test: Adding and removing categories
	    1. Test: Adding a category filters and changes URL
		    - [[Adds a category]]
	    2. Test: Removing a category filters and changes URL
	        - [[Removes a category]]
- ## Test Case: [Search Page Categories (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4230) #test/manual
    1. Test: Items are filtered accordingly when a category is chosen
        - [[Displayed items are relevant to the category]]
    2. Test(Negative): Irrelevant items are not included #test/negative
        - [[Items that are irrelevant to the filter are not included]]
    3. Test: Highlights red when hovered over
        - [[Highlights red on hover]]
# Component: Search Page Sort By Dropdown [[Search Page Sort By Dropdown.canvas]]
- ## Test Case: [Sort By Dropdown (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4231) #test/automated
    1. Test: Dropdown options
        - Test: Sorts by "Most Popular"
            - [[Sorting by popularity]]
        - Test: Sorts by "Highest Rated"
            - [[Sorting by rating]]
        - Test: Sorts by "Name: A - Z" and "Name: Z - A"
            - [[Sorting by name alphabetically]]
        - Test: Sorts by "Price: Low to High" and "Price: High to Low"
            - [[Sorting by price]]
        - Test: Sorts by "Newest First" #test/unsure
            - [[Sorting by date -  unsure]]
    2. Test: URL changes for each sort by option
        - [[Changes URL according to sort by option]]
    3. Test: Option is labeled as selected after chosen
        - [[Shows option appears to be selected]]
- ## Test Case: [Sort By Dropdown (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4232) #test/manual
    1. Test: Dropdown options
        - "Best Match"
            - [[Sorts by most relevant]]
    2. Test: Blue highlight when hovered over
        - [[Highlights blue on hover]]



> Each sub-task can reference the same story

The tasks after story go in the acceptance criteria