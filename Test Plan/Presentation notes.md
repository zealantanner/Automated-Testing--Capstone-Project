<u>Test Cases:</u>
1. Share and explain the site that you chose.
	[Site I chose](https://www.parts-express.com)
2. Share your Test Plan 
	-  I used obsidian
	[[Test Plan]]
	[Epic Ticket](https://mtechqa.atlassian.net/browse/MTQA-4218)
3. Share **in depth** 1 of your test cases and then _briefly_ share what the rest of your test cases are.
	[[Nav Links.canvas|Nav Links]]
	`npx wdio run ./wdio.conf.ts --spec test/specs/navLinks.test.ts`
	[[Search Bar.canvas|Search Bar]]
	[[Search Page Categories.canvas|Search Page Categories]]
	[[Search Page Sort By Dropdown.canvas|Search Page Sort By Dropdown]]
4. Using the Test Case you shared in depth, explain what testing techniques you used and why.
	For Nav links:
	- Functional testing:
		- I test the hrefs of each link instead of clicking on each link. I read somewhere that this is better practice
	- Integration testing:
		- Opening each nav menu first, then testing the links inside
		There's a few things I couldn't test because I don't know exactly how this website should work
5. Explain why you did not automate certain Test Cases and why you did automate the chosen Test Cases.
	- I chose elements that seemed like they'd be a big enough challenge for me, which it was
	- I didn't do the cart because carts tend to not be testable, you tend to run into captchas or bot prevention
	- There's a few aspects that are better as manual tests like when hovering on a link or making sure searched items are relevant

<u>Automation:</u>
1. Briefly explain and show how you have your code organized. 
	- [[Code organization.canvas|Code organization]]
	  I made my code base as if it's meant to be expanded to test the entire website. That just felt like the right way to do it
	- I put $ in the name of an element so I know just by looking at it that it's a `ChainablePromiseElement`
	  Same with functions that get specific elements
	- I left comments on a lot of my files so that when you highlight you see what it does
2. Share 1 or more challenge that you overcame.
	- Dealing with the popup
	  Show injecting local storage
	- I wanted a way to split things up into multiple files instead of every element going in the same file. I did that with this
	  `public get CategorySidebar() { return new CategorySidebar() }`
	- Figuring out loading
3. **Show the instructor _all_ of your tests running and passing as expected.**
   Note:
	- Nav links fails because it's supposed to. There are duplicate links
	- Search bar typeahead sometimes doesn't appear. usually if word searched is less than 3-4 letters

<u>Overall:</u>
1. Would you give your stamp of approval that the components you tested are ready for the end user, meaning that the end user should not find any problems with the components?
	It's a user-ready website, but there's a few small bugs that barely affect the average user, as well as things I don't know how to test because I'm doing blackbox testing. They wouldn't find these bugs
2. Share what you could have done better and or what you could improve on (**not excuses**).
	I could have done more negative tests, making sure something doesn't happen to make sure I'm not doing false positives
	I added a lot to my code that I never ended up using, I ended up deleting a bunch. I needed to first write the test files, write down step by step exactly what they should do before getting ahead of myself. Writing the functions there even though they don't exist yet

<u>Extra:</u>
bugs I found
- Duplicate link in the navbar menu
- When searching with 3 or less letters the typeahead doesn't appear. "amp"
