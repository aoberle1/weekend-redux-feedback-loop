# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

- Goal of the project was to create a multi-page, single form app that allows the user to enter input information on each page that is saved to the state, allows the user to review the total input information, and finally submit their feedback which is posted to our database.
    - Took included database information, created database with provided information, noted values of each row for later use
    
    - Set up Provider in index.js, set up Router, Route, and Link in App.jsx
        - App.jsx return set up with route to each page, each page links to the next when
            next button is clicked using useHistory and history.push in components

    - Set up input pages with input field with min/max value, label for input field,    and button that onClick runs function that dispatches input field data to feedback reducer and contains an if statement that only allows data to be sent if input exists, and if input is between 1 and 5, if value is not allowed, user is alerted with popup message that value is incorrect.

    - Created feedback.router, added express routes to server.js to handle POST request when user data is submitted

    - Created review page that grabs data from the store and displays in a table on DOM, created submit button which onClick runs a function that sends a POST request to the database, resets the store to an empty array, and sends the user to the success page

    - Created success page displaying message that user feedback was submitted, upon click of start over button user is taken back to the home page with an empty store to begin again

    Installation
    - Upon cloning repo run npm install, 
    - Copy database information into postico with database name react_gallery, copy sql queries from database.sql into newly created database.
    - npm run server
    - npm run client

    Usage
    - User is able to feedback data into input field on each page, clicking next to navigate to next page after inputting data.  User is then able to review data that has been input before clicking submit, and then start the process over by clicking the Start Over button


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
