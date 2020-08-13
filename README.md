# team07

Deployed App: https://peaceful-bayou-44052.herokuapp.com/

## BACKGROUND:
Our project provides a platform to help reducing the spread of the virus by providing a place for homeowners to post quarantined rooms for the frontline workers to potenitially move into. This way, frontline workers can potentially reduce travel distance to work and avoid living in close proximity to members who are vulnerable or at risk. In addition, all users can check out the recent updates and number of covid-19 patients on our website. They can also communicate with us by using the contact us button in the bottom. There are four different types of users namely, homeowners, front-line workers, visitors (people who are not signed in) and lastly the admin. Details and explaination for our pages/feature for each users can be found below.


## SUMMARY:
Our application can be easily installed by following the succeeding steps.  We have used React to code our application in order to simplify and make cleaner code. Running the application will lead the user to our home page which provides the user with the option to sign up or sign in using the navigation bar above. The user can also access five features to check available rooms, track the current COVID-19 cases, donate, access our feed or provide feedback.

### HOME PAGE:
  * Navigation bar
    * Posts - view avaliable homes for rent
    * Live Cases - view updated statistics about COVID-19 cases
    * Sign up - fill in your information to sign up as a user
    * Sign in - sign in to access other features (details down below)
  * Our five features
    * Avaliable Rooms - view avaliable homes for rent
    * Make a Donation - donate to help out frontline workers to rent out a place to live in (may select to donate to particular user or post, or just to general fund)
    * Live Cases - view updated statistics about COVID-19 cases
    * Twitter Feed - our own feed containing news and announcement about COVID-19 or our webapp
    * Give Feedback - review our webapp or a tentant
  * Footer
    * About Us - page explaining our goal and purpose
    * Contact Us - write to contact us about our site

### Login credentials for homeowner (regular user):
  #### username: user
  #### Password: user
  * My Posts (in the navigation bar) - view your own posts
    * Click 'Edit' to edit your post
  * Add Post (in the navigation bar) - add a new post to rent out
  * 'user' or the profile icon (in the navigation bar) - view profile page
    * Change profile image
    * View your own post - view own posts
    * Check your twitter feed 
    * Edit profile
  * Sign out (in the navigation bar) - back to home page
  
### Login credentials for front-line worker (regular user):
 #### username: user2
 #### Password: user2
  * Posts (in the navigation bar) - view avaliable posts and click 'Select' to mark your interest
  * 'user2' or the profile icon (in the navigation bar) - view profile
    * Change profile image
    * Edit profile
  * Sign out (in the navigation bar) - back to home page
  
### Login credentials for admin:
 #### username: admin
 #### Password: admin
  * Admin Panel (in the navigation bar)
    * View all users and posts - delete button to delete
    * Broadcast message (twitter feed)

<!-- ## USE:
Once logged in, the user can add a post for renting out his place by clicking on the Add Post button from the navbar. He can also see his posts by clicking on the My posts button from the navbar. Clicking on the user button will enable him to see his profile info and select a profile photo.
A front line user will be able to view current postings and update his profile page but will not be able to add posts or delete posts.
The admin will be provided with an admin panel which provides him the ability to delete posts, users and also a platform to message all users. -->



## Setup(for running locally on <http://localhost:3000)>
Step 1:  Clone the code from above.

Step 2: Run $ npm install

Step 3: Run $ npm start
  
## Overview of Routes in Express Server
* If testing on Postman you will need to install the Google Chrome Postman Interceptor, enable cookie interceptor in Postman, and add the domain of the App to the interceptor

* POST /signUpUser
  * Add a user in the user table
  * Expects input:
  ```
  {
    "name": <name>
    "age": <age>
    "contactNumber": <phone number>
    "email": <email>
    "password": <password>
    "usertype": <Homeowner/Customer/Admin>
  }   
  ```
   * Expects output: the newly added user
  ```
  {
    "name": <name>
    "age": <age>
    "tel": <phone number>
    "homes": []
    "email": <email>
    "password": <password>
    "type": <Homeowner/Customer/Admin>
    "profilePic": <a cloudinary link>
  }   
  ```
* POST /login
  * Login with name/password and create a session, expires after five minutes
  * Expects input:
  ```
  {
  "username": <username>
  "password": <password>
  }
  ```
  * Expected output: 
  ```
  {
  "currentUser": <the found user document>
  }
  ```
* GET /users/check-session
  * Check if there is a session
  * Expected output (if there is a session): 
  ```
  {
  "currentUser": <the found user _id>
  }
  ```
* GET /users/logout
  * Destory seesion
  * Expected output: Nothing
* POST /changeprofilepic/:name
  * Change the profile picture of a user, requires authentication (being logged in/cookie) and connect-multiparty
  * Expects input (in postman in body -> form-data): Key: "image", Value: <choose an image>
  * Expected output: the changed user document
* POST /donation
  * Add a new donation to the database
  * Expects input:
  ```
  {
  "donationAmount": <donationAmount> (number)
  "cardNumber": <cardNumber> (number)
  "cvc": <cvc> (number)
  "cardExpiry": <cardExpiry>
  "donationType": <donationType>
  "donateTo": <donateTo>
  }
  ```
  * Expected output: newly added donation document
* DELETE /users/:id
  * Delete a user from the database, requires authentication/cookie (logged in as Admin)
  * Expected output: the deleted user document
* PUT /users/:id
  * Change profile information of a user
  * Expected input:
   ```
  {
    "name": <name>
    "age": <age>
    "tel": <phone number>
    "email": <email>
    "password": <password>
  }   
  ```
  * Expected output: <the changed user document>
* GET /users/homeowners
  * Get all homeowners, requires to be logged in as Admin/cookie
  * Expected output: all users where type: "Homeowner"
* GET /users/frontliners
  * Get all frontliners
  * Expected output: all users where type: "Customer"
* GET /users/home
  * Expected to get all homes if not logged in, get all user's home if logged in as homeowner (needs cookie)
* GET /users/home/:id
  * Expected to get home with id
* POST /users/home
  * Add a new home to the Home database
  * Requires to be logged in as a homeowner/cookie, requires connect-multiparty and FormData
  * Expects input (as form-data):
  ```
  {
  "address": <address>
  "zip": <zip>
  "cvc": <cvc>
  "description": <description>
  "price": <price>
  "lat": <lat>
  "lng": <lng>
  "image" <image url>
  }
  ```
  * Expected output: newly added home
   ```
  {
  "address": <address>
  "zip": <zip>
  "cvc": <cvc>
  "description": <description>
  "price": <price>
  "lat": <lat>
  "lng": <lng>
  "pic" <image cloudinary url>
  "user": <name of logged in homeowner>
  "tel": <phone number of logged in homeowner>
  "email": <email of logged in homeowner>
  "creator": <ObjectID of logged in homeowner>
  }
  ```
* PUT /users/home/:homeid
  * Edit a home in the Home database
  * Requires to be logged in as a homeowner/cookie, requires connect-multiparty and FormData
  * Expects input (as FormData):
  ```
  {
  "address": <address>
  "zip": <zip>
  "cvc": <cvc>
  "description": <description>
  "price": <price>
  "lat": <lat>
  "lng": <lng>
  "image" <image url>
  }
  ```
  * Expected output: newly added home
   ```
  {
  "address": <address>
  "zip": <zip>
  "cvc": <cvc>
  "description": <description>
  "price": <price>
  "lat": <lat>
  "lng": <lng>
  "pic" <image cloudinary url>
  "user": <name of logged in homeowner>
  "tel": <phone number of logged in homeowner>
  "email": <email of logged in homeowner>
  "creator": <ObjectID of logged in homeowner>
  }
  ```
* POST /users/interest/:homeid
  * Add interested home to user
  * Requires to be logged in as a frontliner/cookie
  * Expected output: document of user in which interested home was added to
   ```
  {
    "name": <name>
    "age": <age>
    "tel": <phone number>
    "homes": [...<newly added home>]
    "email": <email>
    "password": <password>
    "type": <Homeowner/Customer/Admin>
    "profilePic": <a cloudinary link>
  }
  ```
* GET /users/interest
  * Get all interested homes of logged user/cookie, requires to be logged in as frontliner
  * Expected output: All interested homes of logged user
* DELETE /users/home/:homeid
  * Delete a home from the Home database, requires authentication (logged in as Admin)
  * Expected output: the deleted home document
  ```
  {
  "address": <address>
  "zip": <zip>
  "cvc": <cvc>
  "description": <description>
  "price": <price>
  "lat": <lat>
  "lng": <lng>
  "pic" <image cloudinary url>
  "user": <name of logged in homeowner>
  "tel": <phone number of logged in homeowner>
  "email": <email of logged in homeowner>
  "creator": <ObjectID of logged in homeowner>
  }
  ```
* POST /userTwitterFeed
  * Create a new tweet, requires FormData and connect-multiparty
  * Expects input (as FormData):
  ```
  "image": <path to image>
  "twitterMsgs": <message>
  }
  ```
  * Expected output: the newly added twitter msg
* DELETE /userTwitterFeed/:tweeterid
  * Delete a tweet, requires to be logged in 
  * Expected output: the newly deleted twitter msg
  
