import admin from "firebase-admin";

import serviceAccount from "../../../credentials"

admin.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
});

export const db = admin.firestore();