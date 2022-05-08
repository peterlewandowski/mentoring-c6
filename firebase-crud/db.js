import firebase from "firebase-admin";

const credentials = require("credentials.json");

admin.initializeApp({
  credential: firebase.credential.cert(credentials),
});

const db = admin.firestore();
export const elections = db.collection('saturdayclass')