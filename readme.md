
# About Symptom Tracer
Symptom Tracer is an app designed to allow you to track all of your health symptoms from weird pains in your toes to sporatic dizziness as well as some potential triggers in one place.

# Features that Work (all e2e tested)
- Login
- Register
- Add New Symptom Log
- Display Symptom Logs
- Add Symptom Entry 
- Display Symptom Entries for Symptom Log
- token expires and redirects to root 
- Delete Symptom Entry
- Delete Symptom Log
- Update User
- Update Symptom Log
- Update Symptom Etnries

# Features Under Development
- All Features for Helath Inputs (these will basically be the same but with different titles and fields...back end is somewhat complete for this with some fixes needed)
    - Healh Input Log Features 
        - Create Health input log
        - Update Health Input log
        - show Health Input Log
        - Delte Health Input Log
    - Health Entries
        - Create Health Entry
        - Update Health Entry
        - show Health Entry
        - Delte Health Entry 
- Refresh Token

# To Do

- reorganize files into folders to make it easier in development (will take some time to fix routes )
- need to fix route back to symptom log after update or add entry(requires URL Params to be passed back and will take some more time to do) 


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
