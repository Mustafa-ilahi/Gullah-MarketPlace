import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhAShxDYrmaiY2FnWyz2J-gURwWVhqZx8",
    authDomain: "gullah-marketplace.firebaseapp.com",
    projectId: "gullah-marketplace",
    storageBucket: "gullah-marketplace.appspot.com",
    messagingSenderId: "1021150935732",
    appId: "1:1021150935732:web:babe22ae799c0f034475e1",
    measurementId: "G-7WFEGYEH2N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 const db = firebase.firestore();

const signUp = (email,password,firstName,lastName,phone,confirmPassword) => {
  {
    password === confirmPassword ?
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      // alert("user registered successfully");
      db.collection('users').doc(user.uid).set({email,firstName,lastName,phone})
      .then(res => {
        alert('user info added', res)
      }).catch(e => {
        alert('error=>', e.message)
      })
    })

    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    })
    :
    alert("Password doesn't Match")
  }
}

function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export{
  signUp,
  login
}