- ## Epic: [[Nav Links.canvas|Nav Links]]
	- #### Story: Nav Dropdown Button
		- Tasks: (Automated) #test/automated
			- Test: Dropdown opens with links
				- [[Each dropdown opens]]
		- Tasks: (Manual) #test/manual
			- Test: on click dropdown becomes highlighted
				- [[Dropdown aspects look right]]
	- #### Story Nav Links in Each Dropdown
		- Tasks: (Automated) #test/automated
            - Test: Each link under specified dropdown directs to the correct URL
                - [[Shop links]]
                - [[Deals links]]
                - [[Professional links]]
                - [[Get Help links]]
                - [[Learn links]]
		- Tasks: (Manual) #test/manual
			- Test: Specified link is highlighted when hovered over
				- [[Each link is highlighted on hover]]
- ## Epic: [[Search Bar.canvas|Search Bar]]
	- #### Story: Typeahead #related/typeahead
		- #### Sub-Story: Terms
		    - Tasks: (Automated) #test/automated
                - Test: When term is clicked the url changes accordingly
	                - [[URL changes according to chosen term]]
                - Test: Typeahead changes accordingly
	                - [[Changes typeahead results accordingly]] 
		    - Tasks: (Manual) #test/manual
                - Test: Term results are relevant
	                - [[Terms are relevant]]
                - Test: Specified term is highlighted when hovered over
	                - [[Terms highlight on hover]]
		- #### Sub-Story: Brands
		    - Tasks: (Manual) #test/manual
                - Test: Specified brand is underlined when hovered over
	                - [[Underlines specified text on hover]]
                - Test: Brand results are relevant
	                - [[Brands are relevant]]
		    - Tasks: ([[?]]) #test/unsure
                - Test: Brand link is clicked
	                - [[Brand on click?]]
                - Test: Brand link is hovered over
	                - [[Brand on hover?]]
		- #### Sub-Story: Results
            - Tasks: (Automated) #test/automated
                - Test: URL changes when an item is clicked
	                - [[URL changes to the corresponding item's url]]
                - Test: Title and footer keywords match input
	                - [[Title and footer show correct keywords]]
                - Test: Footer is clicked and activates search #related/activateSearch
	                - [[URL changes according to text inputted]]
		    - Tasks: (Manual) #test/manual
                - Test: Typeahead items are relevant
	                - [[Results are relevant]]
	- #### Story: Input Field
		- Tasks: (Automated) #test/automated
            - Test: Input text #related/typeahead
	            - [[Typeahead appears]]
            - Test(Negative): Input nonsense text #related/typeahead
	            - [[No results in Typeahead]]
            - Test(Negative): Input too many characters
	            - [[Limited to 100 characters]]
		- Tasks: (Manual) #test/manual
            - Test: Typing in the search bar feels normal
	            - [[Inputting text feels normal]]
	- #### Story: Submit Button
		- Tasks: (Automated) #test/automated
            - Test: URL changes with valid text inputted #related/activateSearch
	            - [[URL changes according to text inputted]]
            - Test(Negative): When the search bar has no text inputted it doesn't search
	            - [[With no text in input field nothing happens on click]]
		- Tasks: (Manual) #test/manual
            - Test: Search item results are relevant
	            - [[Search results are relevant]]
- ## Epic: [[Search Page Category.canvas|Search Page Category]] #related/searchPageCategory
	- #### Story: Category Dropdown Button
		- Tasks: (Automated) #test/automated
			- Test: Opens the category dropdown
                - [[Opens on click]]
			- Test: Closes the category dropdown
                - [[Closes on click]]
	- #### Story: Category Options
		- Tasks: (Automated) #test/automated
			- Test: Choosing a category applies the filter
                - [[The correct number of results are displayed]]
                - [[URL changes according to category]]
                - [[Category is displayed as chosen]]
			- Test: Removing the category filters accordingly
				- [[Category is removed]]
                - [[URL changes according to category]]
		- Tasks: (Manual) #test/manual
			- Test: Items are filtered accordingly when a category is chosen
                - [[Displayed items are relevant to the category]]
			- Test: Irrelevant items are not included
                - [[Items that are irrelevant  to the filter are not included]]
			- Test: Highlights red when hovered over
				- [[Highlights red on hover]]
- ## Epic: [[Search Page Sort By Dropdown.canvas|Search Page Sort By Dropdown]]
	- #### Story: Sort By Dropdown Option Behavior
		- Tasks: (Automated) #test/automated
			- Test: Option - Most Popular
				- [[Loosely sorts by reviews]]
			- Test: Option - Highest Rated
				- [[Loosely sorts by stars]]
			- Test: Option - Name: A - Z
			- Test: Option - Name: Z - A
				- [[Loosely sorts alphabetically]]
			- Test: Option - Price: Low to High
			- Test: Option - Price: High to Low
				- [[Loosely sorts by price]]
			- Test: Url changes for each option
				- [[URL changes according to category]]
			- Test: Option is selected after selection
				- [[Option appears to be selected]]
		- Tasks: (Manual) #test/manual
			- Test: Option - Best Match
				- [[Sorts by most relevant]]
        - Tasks: ([[?]]) #test/unsure
			- Test: Option - Newest First
				- [[Sorts by newest]]
	- #### Story: Sort Dropdown UI
		- Tasks: (Manual) #test/manual
			- Test: Blue highlight when hovered over
				- [[Option highlights blue on hover]]



1. **Sub-task: Manual QA**
    
    - Test “Newest”
        
    - Test “Best Selling”
        
    - Any edge cases not covered automatically
        
2. **Sub-task: Automation QA**
    
    - Test “Price: Low → High”
        
    - Test “Price: High → Low”
        
    - Other options that can be automated
        

> Each sub-task can reference the same story

The tasks after story go in the acceptance criteria