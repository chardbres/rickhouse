README

[Link to deployed client site!]("https://chardbres.github.io/project_2_client/")
[Link to Heroku site!]('https://dry-scrubland-57892.herokuapp.com/whiskeys')

Rickhouse: an app to track your favorite Whiskies

The purpose of this app is to provide an interface for a user to track all of the whiskies they have tasted, along with their relevant characteristics. It is meant to be a visually-pleasing single-page-application with functionality to dynamically add new whiskies, update existing whiskies, delete whiskies that are no longer relevant, and to display a full list of tasted whiskies for posterity.

The app functions by leveraging API calls to a [back-end database](https://github.com/chardbres/project_2_api) hosted on Heroku.

Technologies used:

1. HTML: outlines the page view structure
2. CSS/Sass (with Bootstrap): adds styling to the page, including dynamic changes on user interaction and Bootstrap for some built-in modules.
  --Boostrap, Sass
3. JavaScript: event handling, both for dynamic UI changes (via jQuery DOM selections) as well as API calls to the back-end server (via AJAX).
   --jQuery, AJAX
4. Handlebars: templating for JavaScript, to select and populate HTML elements.
5. Markdown: all written documentation.
6. git/GitHub: for all version control.

Timeline:
(2019-10-17) - Initial planning: produced wireframes, user stories, and entity relationship diagrams. Created two separate repositories for front-end client and back-end support on GitHub. Created very basic SPA to test functionality, and deployed dummy front-end to GitHub pages.

(2019-10-18) - Created all authorization scripts and tied functionality to webpage elements. Finalized placement and functionality of header with hamburger drop-down.

(2019-10-21) - Day was largely spent on debugging. Completed functionality to create a new whiskey and index all whiskies in the database for a single user. Produced Handlebars script to display results of indexing full whiskey list on page.

(2019-10-22) - Completed remaining event functionality: single user can now update a whiskey and get data for a single whiskey by ID. Final code cleanup: page styling, dynamic UI responses, and general quality-of-life improvements to code base.

(2019-10-23) - Lots of post-submission cleanup and general improvements.

Unsolved problems/wish-list:
1. Would like to be able to select a whiskey from the displayed list of all user whiskies, and trigger a pop-up with more detailed information (like a full description, taste rating, etc.) plus a picture of the bottle.
2. Would like to implement funcionality to create a list of 'Favorites' as well as a way to select whiskies from a pre-populated larger database.
2. Many of the event functions (both auth and CRUD) are very similar. It would be much cleaner to create a prototype function that can outline all of the relevant functionality, and then specific instances can inherit from this prototype.
3. Need to flesh out the user stories a bit more.

[Link to user stories]('https://github.com/chardbres/project_2_client/blob/master/user-stories.md')
[Link to wireframes]('https://github.com/chardbres/project_2_client/blob/master/wireframes.jpg')
