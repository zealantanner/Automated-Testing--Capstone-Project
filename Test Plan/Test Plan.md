# [Epic](https://mtechqa.atlassian.net/browse/MTQA-4218)
# Component: [[Nav Links.canvas|Nav Links]]
- ## Test Case: [Nav links (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4219)
	- For each navbar menu:
		1. Test: [[1. Assert the menu opens]]
		2. For each link
			1. Test: [[2a. Assert href is correct]]
			2. Test: [[2b. Assert there are no duplicate links]]
		3. Test: [[3. Assert the menu closes]]
- ## Test Case: [Nav links (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4220)
	- For each navbar menu:
		- Test: [[1. Assert dropdown aspects behave correctly]]
	    - Test: [[2. Assert links have highlight]]
# Component: [[Search Bar.canvas|Search Bar]]
- ## Test Case: [Search bar (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4227)
	- #### Input Field:
	1. Test: Input text
		- [[1a. Assert typeahead appears]]
		- [[1b. Assert pressing enter activates search function]]
	2. Test(Negative): Input too many characters 
		- [[2. Assert text box is limited to 100 characters]]
	3. Test(Negative): Input nonsense text 
		- [[3. Assert typeahead appears with no results]]
	- #### Submit Button:
	1. Test: [[1. Assert URL changes with text inputted]]
	2. Test(Negative): [[2. Assert nothing happens on click when there's no text in input field]]
- ## Test Case: [Search Bar (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4222)
	- #### Input Field:
        - Test: [[1. Assert typing in the search field feels normal]]
	- #### Submit Button:
        - Test: [[2. Assert items on search page are relevant to the text inputted]]
# Component: [[Search Page Categories.canvas|Search Page Categories]]
- ## Test Case: [Search Page Categories (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4229)
    1. Category dropdown closes and opens
	    - Test: [[1a. Assert category dropdown closes]]
        - Test: [[1b. Assert category dropdown opens]]
	2. Adding and removing categories
	    - Test: [[2a. Assert category is added, url changes and items are filtered]]
	    - Test: [[2b. Assert category is removed, url changes and items are unfiltered]]
- ## Test Case: [Search Page Categories (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4230)
    - Test: Items are filtered accordingly when a category is chosen
        - [[1. Assert displayed items are relevant to the category]]
    - Test(Negative): Irrelevant items are not included 
        - [[2. Assert items that are irrelevant to the filter are not included]]
    - Test: Highlights red when hovered over
        - [[3. Assert highlights red on hover]]
# Component: [[Search Page Sort By Dropdown.canvas|Search Page Sort By Dropdown]]
- ## Test Case: [Sort By Dropdown (Automated)](https://mtechqa.atlassian.net/browse/MTQA-4231)
    1. Dropdown options
	    - Test: [[1a. Assert sort by "Best Match"]]
	    - Test: [[1b. Assert sort by "Most Popular"]]
	    - Test: [[1c. Assert sort by "Highest Rated"]]
	    - Test: [[1d. Assert sort by "Name A - Z"]]
	    - Test: [[1e. Assert sort by "Name Z - A"]]
	    - Test: [[1f. Assert sort by "Price Low to High"]]
	    - Test: [[1g. Assert sort by "Price High to Low"]]
	    - Test: [[1h. Assert sort by "Newest First"]]
	2. For each of these
		- Test: [[2a. Assert Url changes according to sort by option]]
		- Test: [[2b. Asserts option appears to be selected after clicked]]
	3. For each except "Newest First" and "Best Match"
		- Test: [[3a. Assert option loosely sorts correctly]]
		- (due to this being blackbox testing I don’t know how newest and best match should work)
- ## Test Case: [Sort By Dropdown (Manual)](https://mtechqa.atlassian.net/browse/MTQA-4232)
    1. Sorting by "Best Match" and "Newest First"
		- Test: [[1a. Assert "Best Match" sorts by most relevant]]
		- Test: [[1b. Somehow assert "Newest First" sorts by date]]
    2. Blue highlight when hovered over
        - Test: [[2a. Assert option highlights blue on hover]]
