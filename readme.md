
# H1 About Symptom Tracer
Symptom Tracer is an app designed to allow you to track all of your health symptoms from weird pains in your toes to sporatic dizziness as well as some potential triggers in one place.

# H1 Where I am at in Development
I did not yet get the front and back end connected due to time constraints

I did get a lot of the backend built out 


# H1 Instructions for the APP

# H2 For the back end
I did not push up my jwt-config.js file for security reasons and best practices. In order to get the app to work you should create this file and add in whatever secret you want to.

```
module.exports = {
    secret: <yourSecret>
};

```

In order to run this, you will need a mongo database called symptomTracer.

In order to start the backend server, you need to run 

```
npm run serve

```

#Things I still need to Do

Connect backend and front end. 
Build out additional forms and views
Fix Cancel Button on Register Form 