const admin = require("firebase-admin");

const serviceAccount = require("./firebase-key.json");

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://nextjs-manga-reader.firebaseio.com"
    });
} catch (error) {}

export const firestore = admin.firestore();