## TRAINING COURSES

**The application contains two pages:**

- page with courses;
- a page with a view of the course (lessons);


**More about the project:**
- The main page contains courses in the form of a card (which contains the name, description, status, date, duration, rating in the form of stars)
- When clicking on the course card - by new route -> page with course view:
  ##if lessons are blocked in the course (lesson type is not "video") - this is shown to the user and there are no errors when navigating the page
  ##if the lessons are not blocked, user can view them
  ##if the user watched part of the video - progress will be stored in localStorage and he can return to the view
- If the page is loading - it is visible to the user using the <Loading/> component (loading animation)
- If the user went to a route page that does not exist - a 404 error and the display of the <Page404/> component
- If an error of a different type has occurred, it is displayed using the <Error/> component (status and message)


## Getting Started with TRAINING COURSES

## Run Locally

In the project directory, you need:

Clone this repo

### `git clone https://github.com/LenaKyrylenko/Course`

Install all libraries, run:

### `npm install`

Then, to start the web server, run:

### `npm start`

The application opens in http://localhost:3000/ or any other available port.
