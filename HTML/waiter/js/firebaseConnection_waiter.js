const firebaseConfig = {
    apiKey: "AIzaSyBqtWhz7DJEZMcvbX-knY6Fxl-3JNWt_RI",
    authDomain: "rmsystem-45a87.firebaseapp.com",
    projectId: "rmsystem-45a87",
    storageBucket: "rmsystem-45a87.appspot.com",
    messagingSenderId: "204748760785",
    appId: "1:204748760785:web:907286c86e5af921f3c7f0",
    measurementId: "G-DWT7V8RV5V"
  };
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
    
  $('#loginform').on('submit', (e) => {
    e.preventDefault();
    var email = $('#email').val();
    var password = $('#password').val();
  
    // Create user with email and password
    
    auth.signInWithEmailAndPassword(email,password)
    .then(async(userCredential)=>{
      var user=userCredential.user;
      sessionStorage.setItem('user',JSON.stringify(user));
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Logged in successfully!',
        showConfirmButton: false,
        timer: 3000,
      }).then(window.location.href="./WaiterHP.html");
    })
      .catch((error) => {
        // User creation failed
        var errorCode = error.code;
        var errorMessage = error.message;
        Swal.fire(errorMessage,{
            icon:"error",
            title:'error',
            showConfirmButton:false,
            timer:3000,
        })
        console.error("Error creating user:", errorMessage);
        // Handle the error or display an error message to the user
      });
  });
  
