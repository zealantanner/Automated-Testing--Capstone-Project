- ## Epic: [[Nav Links.canvas|Nav Links]]
	- #### Story: Nav Dropdown Button
		- Tasks: (Automated)
			- Test: Dropdown opens with links
				- [[Each dropdown opens]]
		- Tasks: (Manual)
			- Test: on click dropdown becomes highlighted
				- [[Dropdown aspects look right]]
	- #### Story Nav Links in Each Dropdown
		- Tasks: (Automated)
            - Test: Each link under specified dropdown directs to the correct URL
                - [[Shop links]]
                - [[Deals links]]
                - [[Professional links]]
                - [[Get Help links]]
                - [[Learn links]]
		- Tasks: (Manual)
			- Test: Specified link is highlighted when hovered over
				- [[Each link is highlighted on hover]]
- ## Epic: [[Search Bar.canvas|Search Bar]] //> finish
	- #### Story: Typeahead
		- #### Sub-Story: Terms
		    - Tasks: (Automated)
                - Test: URL changes according to category
	                - [[url change tem]]
                - Test: Input text
		    - Tasks: (Manual)
                - Test: Terms are relevant
                - Test: Highlights on hover
		- #### Sub-Story: Brands
		    - Tasks: (Automated)
                - Test: Input text
		- #### Sub-Story: Results
		    - Tasks: (Automated)
                - Test: Input text
	- #### Story: Input Field
		- Tasks: (Automated)
            - Test: Input text
            - Test(Negative): Input random text
            - Test(Negative): Input too many characters
		- Test:
	- #### Story: Submit Button
		- Tasks: (Automated)
            - Test: Input text
            - Test(Negative): Input random text
            - Test(Negative): Input too many characters
- ## Epic: [[Search Page Category.canvas|Search Page Category]]
	- #### Story: Category Dropdown Button
		- Tasks: (Automated)
			- Test: Opens the category dropdown
                - [[Opens on click]]
			- Test: Closes the category dropdown
                - [[Closes on click]]
	- #### Story: Category Options
		- Tasks: (Automated)
			- Test: Choosing a category applies the filter
                - [[The correct number of results are displayed]]
                - [[URL changes according to category]]
                - [[Category is displayed as chosen]]
			- Test: Removing the category filters accordingly
				- [[Category is removed]]
                - [[URL changes according to category]]
		- Tasks: (Manual)
			- Test: Items are filtered accordingly when a category is chosen
                - [[Displayed items are relevant to the category]]
			- Test: Irrelevant items are not included
                - [[Items that are irrelevant  to the filter are not included]]
			- Test: Highlights red when hovered over
				- [[Highlights red on hover]]
- ## Epic: [[Search Page Sort By Dropdown.canvas|Search Page Sort By Dropdown]]
	- #### Story: Sort By Dropdown Option Behavior
		- Tasks: (Manual)
			- Test: Option - Best Match
				- [[Sorts by most relevant]]
			- Test: Option - Newest First
				- [[Sorts by newest]]
		- Tasks: (Automated)
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
	- #### Story: Sort Dropdown UI
		- Tasks: (Manual)
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