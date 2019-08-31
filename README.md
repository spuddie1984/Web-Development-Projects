# Web-Development-Projects
A collection of Web Development Projects based on the Web Developer Bootcamp by Colt Steele
https://www.udemy.com/the-web-developer-bootcamp/

## Notes
### 7 RESTful Routes

| name    |     url         |  verb  |                   Decription                      |
|---------|-----------------|--------|---------------------------------------------------|
| INDEX   | /items          |  GET   | Displays a list of all items                      |
| NEW     | /items/new      |  GET   | Displays a form to add new items                  |
| CREATE  | /items          |  POST  | Add a new item to the DB                          |
| SHOW    | /items/:id      |  GET   | Show info about one item only                     |
| EDIT    | /items/:id/edit |  GET   | Show edit form for one item                       |
| UPDATE  | /items/:id      |  PUT   | Update a particular item, then redirect somewhere |
| DESTROY | /items/:id      | DELETE | Deleter a particular item, then redirect somewhere|
 
## Yelp Camp Application

### Basics

##### 1st Commit
setup basic express structure initialize with npm init and add github details. 
##### 2nd Commit
Add CampGround Route (*lists all campgrounds*) and landing page route. make an array of objects (*camps*) that include the image of the campground and the name. Test to see if the routes work!
Setup views folder structure and partials like header and footer,add a env file for environment variables.
##### 3rd Commit
###### Routes
- Add *campgrounds/new* route 
This route is a form so that the user can add a new campground (*2 inputs one for name of the campground 1 for the image url for that campground*-**More features will be added later**). This form will be sent to the *campgrounds* post route for processing.
- Add *campgrounds* post route
This Route will process the form data and add that data to the campgrounds array(*The array will be converted into a database later*).  After processing it will redirect to the get *campgrounds* route
###### Styling Etc
- Add Basic Styling using bootstrap (*add bootstrap via cdn or downloaded*).
- setup header and footer partials. Add them to all the templates.
- Add link to form on campgrounds template 
- Setup includes file with folder structure for js and css files
- Add a basic bootstrap nav menu
- add an external style sheet to be used app wide (using app.use(express.static()))

### Database Intergration, styling and restful routing updates

#### 4th Commit
##### Database 
- Setup and Install mongoose 
- Setup Campground model/schema
- Use campground model inside our routes
##### Styling
- Improve campgrounds grid layout...add spacing use bootstrap cards for each campground
##### Restful Routing and whatever else i forgot
- Add comments to each route showing the restful routing name 
- Add a show route template
- Add a description field to the form and update routing to reflect that (including our campgrounds model)
- Add a link button to each campground that routes to the show page (individual campgrounds)

#### 5th Commit
##### Database Refactor
- Add a seed file and reseed every server restart
- Create a DB modules directory and put all DB models there
- use module.exports and require models into other files

##### Comments Model 
- Add Comment Model text, Author
- display comments on campground show page
- Add nested comment routes
- add new and create comment routes 
- add new comment form

##### Styling 
- Add sidebar to show page
- update styling on show page 

##### Authentication
#### 6th Commit
- Add user model (username, password)
- install passport 
- Add register routes 
- Add template
- Configure Passport
- Add login routes
- Add Login Template
- Add Logout Route
- Prevent user from adding a comment if not signed in
- Add links to navbar
- Show / hide auth links correctly

##### Refactoring
#### 7th Commit
- Use Express router to reorganise all routes
- Associate Users and Comments
- Save Authors name (person signed in) to comments automatically
- Prevent an unauthorized user from creating campgrounds
- Save username + id along with newly created campground
- on show page display who created the campground






