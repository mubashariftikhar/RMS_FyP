// const { getDatabase } = require("firebase/database");
const firebaseConfig = {
  apiKey: "AIzaSyBqtWhz7DJEZMcvbX-knY6Fxl-3JNWt_RI",
  authDomain: "rmsystem-45a87.firebaseapp.com",
  projectId: "rmsystem-45a87",
  storageBucket: "rmsystem-45a87.appspot.com",
  messagingSenderId: "204748760785",
  appId: "1:204748760785:web:907286c86e5af921f3c7f0",
  measurementId: "G-DWT7V8RV5V",
  databaseURL: "https://rmsystem.firebaseio.com",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();



$('#loginform').on('submit', (e) => {
  e.preventDefault();
  var email = $('#email').val();
  var password = $('#password').val();

  // Create user with email and password
  let userFound = false;

  db.collection("users").get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log()
        // Access the data of each user document
        var user = {...doc.data(),id:doc.id};
        if (user.email == email && user.password == password) {
          if (user.role == "kitchen") {
            userFound = false;
            sessionStorage.setItem('user', JSON.stringify(user));
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Logged in successfully!',
              showConfirmButton: false,
              timer: 3000,
            }).then(window.location.href = "./Kitchen/KitchenHP.html");
          }
          if (user.role == "admin") {
            userFound = false;
            sessionStorage.setItem('user', JSON.stringify(user));
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Logged in successfully!',
              showConfirmButton: false,
              timer: 3000,
            }).then(window.location.href = "./index.html");
          }
          if (user.role == "waiter") {
            userFound = false;
            sessionStorage.setItem('user', JSON.stringify(user));
            Swal.fire({
              icon: 'success',
              title: 'Success',
              text: 'Logged in successfully!',
              showConfirmButton: false,
              timer: 3000,
            }).then(window.location.href = "./waiter/WaiterHP.html");
          }
        }

      });
      if (userFound == false) {
        Swal.fire({
          icon: "error",
          title: 'error',
          text: "Invalid Email or Password",
          showConfirmButton: false,
          timer: 3000,
        })
        // console.error("Error creating user:", errorMessage);
      }
    })
    .catch(function (error) {
      console.error("Error getting users: ", error);
      var errorCode = error.code;
      var errorMessage = error.message;
      Swal.fire(error.toString(), {
        icon: "error",
        title: 'error',
        showConfirmButton: false,
        timer: 3000,
      })
      console.error("Error creating user:", errorMessage);
    });


});



console.log("connected")