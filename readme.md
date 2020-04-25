
# About Symptom Tracer
Symptom Tracer is an app designed to allow you to track all of your health symptoms from weird pains in your toes to sporatic dizziness as well as some potential triggers in one place.

# Features that Work
- Login
- Register
- Add New Symptom Log
- Display Symptom Logs
- Add Symptom Entry 
- Display Symptom Entries for Symptom Log
- token expires and redirects to root 

# Features Under Development
- Examples When not Logged In
- Update Symptom Etnries
- Update Symptom Log
- Update User
- Delete Symptom Log
- Delted Symptom Entry
- All Features for Helath Inputs 

# To Do
- Fix Log Nav Bar
- get there to be Date and Time for Onset 
- Fix defualt date set as null when nothing entered
- Symptom Entry Default when no entries yet upon click 
- fix display of entries 
- fix add entry buttons
- fix add symptom log button


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
