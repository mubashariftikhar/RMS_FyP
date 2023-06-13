//const { getElement } = require("dropzone");

console.log();

let element= document.getElementById('inputEmail3');
 element= document.getElementById('inputPassword3'); 
 element= document.getElementById('billno');
element= document.getElementById('qty');
console.log(element);
const firebaseConfig = {
    apiKey: "AIzaSyA2x62AHShNoNTHfYBIsv2jBwrTVhxm0h8",
    authDomain: "served-humanity.firebaseapp.com",
    projectId: "served-humanity",
    storageBucket: "served-humanity.appspot.com",
    messagingSenderId: "881758078702",
    appId: "1:881758078702:web:4c6d593d24e05b865ed5ff",
    measurementId: "G-CHFR2PFLQK"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

$(document).ready(() => {
    $('#alarmingSituation').on('submit', (e) => {
        e.preventDefault();
        var title = $('#title').val();
        var situation = $('#situation').val();
        var area = $('#area').val();
        var message = $('#message').val();
        var data = {
            title: title,
            situation: situation,
            area: area,
            message: message
        };
        database.collection('AlarmingSituation').add(data)
            .then(function (docRef) {
                // Display success message using SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Data added to Firestore successfully!',
                    timer: 3000,
                    showConfirmButton: false
                });
                // Reset the form
                $('#alarmingSituation')[0].reset();
            })
            .catch(function (error) {
                // Display error message using SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to add data to Firestore!',
                    timer: 3000,
                    showConfirmButton: false
                });
            });
    })
})