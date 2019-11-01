# Readr
Find your perfect book match, for free with Readr.

#### The tech stack for this app: 

- External API(s) - [Google Books](https://developers.google.com/books) (possibly Open Library for epub text)
- Frontend Framework - React
- Styling Library - Material UI
- Server Framework - Express
- Database - PostgreSQL - (for speed over mySQL) Sequelize ORM
- Authentication - OAuth -> Google
- Deployment Platform - Digital Ocean
- Testing Framework - Mocha Chai
- Project Management Tool - GitHub Projects

#### User Experience

* A user logs in with third-party authenication from Google.
* The first time a user logs in, they will be prompted for their name, DOB and a short questionare. 
* After completing the questionare, they will see a page with a single book suggestion and short description of the book.
* Their should be three large button links below the book suggestion
    - **"Yes", "No", and "Read Now".**
* The user can click "yes" or "no" for being interested in the book.
    - This information is saved in a join table in the database with the userID, the book's ISBN, and a boolean value.
* #### If the user clicks "yes":
    - The book will be added to their "To-Read" list.
    - The next book suggestion will appear. 
* #### If the user clicks "no":
    - The book will be added to their "Not interested" list. 
    - The next book suggestion will appear. 
* #### If the user clicks "Read Now":
    - The user will be taken to an ePub copy of the book, if avaliable. 
    - If not avaliable, they will be directed to an outside link to a public domain copy of the book. 
    - if in app, the user should be able to exit the ebook and be back on the suggestion page. 

#### User Book Lists
 * "To-Read"
    - A list of books the user clicked "yes" on. 
    - The user can access their "To-Read" list at any time via a link in the top bar of the app. 
    - The user can move a bookto the "Not Interested" list.
    - The user can remove a book from the list. 
    - A user can click "read now" to start reading the book. 
* "Not Interested"
    - a list of books the user clicked "no" on.
    - The user can move a book to the "To-Read" list.
    - A user can remove a book from the list. 
    - A user can click "read now" to start reading the book. 


#### Book Suggestion Algorithm


#### User Navigation 


#### Database
This app uses PostgreSQL 
* Schema 
    * Users table with ID, username
    * Books table with ISBN#, Title, Author, Description, thumbnail Cover image, book url
    * Join table to populate users To-Read list with unique User ID, ISBN#, and Boolean
    * Join table to show relationship between users/followers  


