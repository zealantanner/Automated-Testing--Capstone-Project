for example:
https://www.parts-express.com/search?order=custitem_pe_reviewrating%3Adesc&keywords=wire

//> another parameter for searching, ?order=
use a dictionary for them like
```javascript
sortByOptions = {
"Best Match": undefined,
"Most Popular": "custitem_pe_search_ranking%3Adesc",
"Highest Rated": "custitem_pe_reviewrating%3Adesc",
"Name: A - Z": "storedisplayname%3Aasc",
"Name: Z - A": "storedisplayname%3Adesc",
"Price: Low to High": "base_price%3Aasc",
"Price: High to Low": "base_price%3Adesc",
"Newest First": "ss_searchable_updated_date%3Aasc",
}
```
#test/automated