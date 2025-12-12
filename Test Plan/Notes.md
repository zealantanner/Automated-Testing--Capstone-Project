Sometimes category dropdown doesn't appear depending on 
click to remove cookie toast

for name z-a 
`//> Error: element (".facets-item-cell-grid-title") still not existing after 10000ms`


For ever test make a md file and add it to the canvas where it should be. with the link to jira

windows:
`npx wdio run ./wdio.conf.ts --spec .\test\specs\navLinks.test.ts`
mac:
`npx wdio run ./wdio.conf.ts --spec test/specs/navLinks.test.ts`

Presentation:
Some cool things I did with my code
A certain test case example running like my typeahead
Show injecting local storage

### Nav links
I figured out that for it's better practice in the field to confirm the href is what it should be rather than clicking on each link
The negative test for duplicate links. I have intentional

Make diagram of the convention I went with, to have base, utils, baseSearch, elements, the asserts

Show off epic ticket

Due to it being blackbox testing I can't test everything because I don't know how they're supposed to function

I was having a hard time figuring out how to make my code wait for the page to load
I realized I can just use the loading icon that follows the mouse

When text boxes have a max you can't use `setValue()` you have to actually type the characters instead


//> update jira and obsidian for nav links

//> comment on all getters

//> change confirm to assert on jiras and obsidian

//> finish comments on everything

//> go over all jira tickets and obsidian again

(not an excuse):
There's a few things I couldn't test because I don't know exactly how this website should work

I made an element class that I use for big elements 

Show off favorite test case and things I'm proud of

Don't take a long time

Mention how I `waitForLoad()` by waiting for the loading icon to go away
## I'm proud of my naming scheme
How I put $element in front of element so I know it's a ChainablePromiseElement

I put a description on every function and getter

I made a custom element class so I can put an element into another class like this
`public get CategorySidebar() { return new CategorySidebar() }`

Nav links fails, I say oops, just kidding! that's a problem with the website not my code

Show off how I test if there's duplicate
Show off sort by dropdown test