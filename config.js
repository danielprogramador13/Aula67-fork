import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
   // Your web app's Firebase configuration
  apiKey: "AIzaSyBDkPC9UVlylaUNkvWB5w4sZqt6P0WJU84",
  authDomain: "aula67-fork.firebaseapp.com",
  projectId: "aula67-fork",
  storageBucket: "aula67-fork.appspot.com",
  messagingSenderId: "730963386265",
  appId: "1:730963386265:web:a7d128577ce460deaf7d08"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();