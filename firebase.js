const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Download from Firebase Console

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://<your-project-id>.firebaseio.com',
  storageBucket: '<your-project-id>.appspot.com'
});

const db = admin.database();
const auth = admin.auth();
const bucket = admin.storage().bucket();

module.exports = { db, auth, bucket };