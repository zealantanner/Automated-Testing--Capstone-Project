# Component: Nav Links [[Nav Links.canvas]]
- ## Test Case: [Nav links (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4219)
	- For each dropdown:
		1. Test: Dropdown opens
			- [[Opens each dropdown]]
			1. Test: Each link under specified dropdown hrefs to the correct URL
				- [[Confirms href is correct]]
- ## Test Case: [Nav links (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4220)
	1. Test: Dropdown aspects behave correctly Dropdown button becomes highlighted
		- [[Dropdown aspects behave correctly]]
# Component: Search Bar [[Search Bar.canvas]]
- ## Test Case: [Search bar (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4227)
	- #### Input Field:
	1. Test: Input text
		- [[Makes the typeahead appear]]
	2. Test(Negative): Input nonsense text 
		- [[Shows no results in the typeahead]]
	3. Test(Negative): Input too many characters 
		- [[Is limited to 100 characters]]
	- #### Submit Button:
	1. Test: URL changes with valid text inputted
		- [[Changes URL according to text inputted]]
	2. Test(Negative): When the search bar has no text inputted it doesn't search 
		- [[Should make nothing happen on click with no text in input field]]
- ## Test Case: [Search Bar (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4222)
	- #### Input Field:
        1. Test: Typing in the search bar feels normal
	        - [[Inputting text feels normal]]
	- #### Submit Button:
        1. Test: Search item results are relevant
            - [[With valid text inputted search results are relevant]]
# Component: Search Page Categories [[Search Page Categories.canvas]]
- ## Test Case: [Search Page Categories (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4229)
    1. Test: The category dropdown opens and closes
        - [[Opens and closes on click]]
	2. Test: Adding and removing categories
	    1. Test: Adding a category filters and changes URL
		    - [[Adds a category]]
	    2. Test: Removing a category filters and changes URL
	        - [[Removes a category]]
- ## Test Case: [Search Page Categories (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4230)
    1. Test: Items are filtered accordingly when a category is chosen
        - [[Displayed items are relevant to the category]]
    2. Test(Negative): Irrelevant items are not included 
        - [[Items that are irrelevant to the filter are not included]]
    3. Test: Highlights red when hovered over
        - [[Highlights red on hover]]
# Component: Search Page Sort By Dropdown [[Search Page Sort By Dropdown.canvas]]
- ## Test Case: [Sort By Dropdown (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4231)
    1. Test: Dropdown options
        - Test: Sorts by "Most Popular"
            - [[Sorting by popularity]]
        - Test: Sorts by "Highest Rated"
            - [[Sorting by rating]]
        - Test: Sorts by "Name: A - Z" and "Name: Z - A"
            - [[Sorting by name alphabetically]]
        - Test: Sorts by "Price: Low to High" and "Price: High to Low"
            - [[Sorting by price]]
        - Test: Sorts by "Newest First"
            - [[Sorting by date -  unsure]]
    2. Test: URL changes for each sort by option
        - [[Changes URL according to sort by option]]
    3. Test: Option is labeled as selected after chosen
        - [[Shows option appears to be selected]]
- ## Test Case: [Sort By Dropdown (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4232)
    1. Test: Dropdown options
        - "Best Match"
            - [[Sorts by most relevant]]
    2. Test: Blue highlight when hovered over
        - [[Highlights blue on hover]]



> Each sub-task can reference the same story

The tasks after story go in the acceptance criteria