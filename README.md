# react-native-tracking-app

Use in conjunction with "track-server" available here to connect to a mongoDB instance with user authentication and track storage

Steps to make operational:

    replace the user_name and password in the connection string in track-server
    start an instance of "ngrok http 3030" to tunnel to database and connect react-native app
    at command line start server with "npm run dev"
    within react-native Tracks app replace baseURL in tracker.js file from "http://2f956db87d9d.ngrok.io" to your connection URL
    run tracks app through expo and connect to phone by QR code
    create custom tracks as you walk or hike
