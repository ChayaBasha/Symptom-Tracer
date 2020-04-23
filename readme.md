
# About Symptom Tracer
Symptom Tracer is an app designed to allow you to track all of your health symptoms from weird pains in your toes to sporatic dizziness as well as some potential triggers in one place.

# Features Under Development
- Examples When not Logged In
- Add New Symptom Log
- Display Users Symptom Logs
- Display Symptom Entries for Symptom Log
- Add Symptom Entry

# To Do
- change backend models for entries
- front end forms to add logs and entries
- view for viewing logs
-tweaks

# Instructions for the APP

First clone repo town to your local computer

## For the back end
I did not push up my jwt-config.js file for security reasons and best practices. In order to get the app to work you should create this file and add in whatever secret you want to.

```
module.exports = {
    secret: "<yourSecret>"
};

```

In order to run this, you will need a mongo database called symptomTracer. Remmber to create a new db in mongo you need to insert one into it for it to stay created.
```
db.users.insertOne({userName:"test", password:"password"})
```

In order to start the backend server, you need to cd so that you are in the API folder and then run the nodemon script

```
npm run serve

```

## Front End
cd so you are in the App folder and then run the nodemon script.
```
npm run serve
```
