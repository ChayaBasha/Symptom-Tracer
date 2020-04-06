
# About Symptom Tracer
Symptom Tracer is an app designed to allow you to track all of your health symptoms from weird pains in your toes to sporatic dizziness as well as some potential triggers in one place.

# Features Under Development
connecting front end to backend
front ent to add health input log, symptom log, examples (non-logged in)

# Where I am at in Development
I did not yet get the front and back end connected due to time constraints

I did get a lot of the backend built out: backend for CRUD of each feature 

## Using Post Man
Authentication works
Generating Tokens Works
Not allowing to add otther logs if not logged in works
Adding Logs works
Adding Symptoms Works
Did not yet test update and delete for anything but users (users does work)


# Instructions for the APP

First clone repo town to your local computer

## For the back end
I did not push up my jwt-config.js file for security reasons and best practices. In order to get the app to work you should create this file and add in whatever secret you want to.

```
module.exports = {
    secret: <yourSecret>
};

```

In order to run this, you will need a mongo database called symptomTracer. Remmber to create a new db in mongo you need to insert one into it for it to stay created. 

In order to start the backend server, you need to cd so that you are in the API folder

```
npm run serve

```

## Front End
Cd do you are in the App folder
```
node server/index.js
```

# Things I still need to Do

Connect backend and front end. 
Build out additional forms and views
Play Around with Navigation to make sure it works both directions
