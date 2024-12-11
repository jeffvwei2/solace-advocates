## Solace Candidate Submission

This is Jeffrey Wei's submission for Solace. 

### Things I changed:
- Enabled the database
- Split the page into two React components:
  - Search Bar:
    - I updated this to use react standards for events and wrapped the input in a form
    - Also added basic styling
  - Advocate Table:
    - This displays the advocates in much the same way as the original, but with styling
    - I also formatted the phone numbers to be (xxx) xxx-xxxx formatted
- Moved the search filtering to the DB for efficiency
  - Added an additional POST route that takes the search term to filter on
  - I used tsvector and tsquery to accomplish a more efficient search

### Things I would do with more time:
- I would add indexing for optimized searching
  - Discussing more dedicated search functions or even column based searching would also help optimize a scaled version of this
- Add ordering for specialties - ex. "Chronic Pain" always being first- because they are randomly ordered right now
  - This section could also be made more readable since it can balloon in size
- Add pagination or another type of limiter for the DB results
