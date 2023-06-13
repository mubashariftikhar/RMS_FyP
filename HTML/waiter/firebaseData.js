 console.log("connected")
 {    // console.log(sessionStorage.getItem("user"))
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
    const db = firebase.firestore();

    const user = JSON.parse(sessionStorage.getItem('user'))

    $('#waiterDataForm').on('submit', function (event) {
        event.preventDefault();
        console.log("button click")
        const waiterDataBillNo = $('#waiterDataBillNo').val();
        const waiterDataDate = $('#waiterDataDate').val();
        const waiterDataMenu = $('#waiterDataMenu').val();
        const waiterDataMobile = $('#waiterDataMobile').val();
        const waiterDataName = $('#waiterDataName').val();
        const waiterDataQuantity = $('#waiterDataQuantity').val();
        const waiterDataTable = $('#waiterDataTable').val();
        const waiterDataTime = $('#waiterDataTime').val();
        // getting resturant id
        db.collection('resturants')
            .where('userId', '==', user.id)
            .get()
            .then((querySnapshot) => {
                console.log("connected")

                if (!querySnapshot.empty) {
                    const doc = querySnapshot.docs[0];
                    console.log(doc.id)
                    const data = {
                        "billNo": waiterDataBillNo,
                        "date": waiterDataDate,
                        "menu": waiterDataMenu,
                        "mobile": waiterDataMobile,
                        "name": waiterDataName,
                        "quantity": waiterDataQuantity,
                        "table": waiterDataTable,
                        "time": waiterDataTime,
                        "resturantId": doc.id.toString()
                    }
                    db.collection('waiterData').add(data)
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
                            // $('#alarmingSituation')[0].reset();
                            //    window.href = "./"
                            location.reload();
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
                } else {
                    console.log('No restaurant found with the provided user ID.');
                }
            })
            .catch((error) => {
                console.log('Error getting restaurants: ', error);
            });



        // Print the table name in the console
        // console.log(tableName);
    });

    db.collection("waiterData")
        .get()
        .then((querySnapshot) => {
            let index = 0;
            querySnapshot.forEach((doc) => {
                const data = doc.data();

                $("#insertWaiterDataData").append(` <tr data-key=${doc.id}>
                                                    <td>${data.billNo}</td>
                                                    <td>${data.date}</td>
                                                    <td>${data.menu}</td>
                                                    <td>${data.mobile}</td>
                                                    <td>${data.name}</td>
                                                    <td>${data.quantity}</td>
                                                    <td>${data.table}</td>
                                                    <td>${data.time}</td>
                                                    <td style="text-align: left">
                                                        <a class="btn btn-primary btn-sm edit-table"><em
                                    style="color: white"
                                    class="icon ni ni-pen "></em></a>
                            <a data-toggle="modal" 
                                class="khan btn btn-danger btn-sm delete-table"><em
                                    style="color: white"
                                    class="icon ni ni-trash "></em></a>
                                                    </td>
                                                </tr>`);
                index++;
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to add data to Firestore!',
                timer: 3000,
                showConfirmButton: false
            });
        });


    // Delete data from table

    $("#insertWaiterDataData").on("click", ".delete-table", function () {
        var waiterId = $(this).closest("tr").attr("data-key");
        // Perform the delete action for the items with the ID tableId
        // Your code here
        console.log(waiterId)
        var tableRef = db.collection("waiterData").doc(waiterId);

        // Delete the table document
        tableRef.delete().then(function () {
            console.log("waiter form data deleted successfully!");
            // Remove the table row from the HTML
            location.reload();
            // $(this).closest("tr").remove();
        }).catch(function (error) {
            console.error("Error deleting table: ", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to delete the table!',
                timer: 3000,
                showConfirmButton: false
            });
        });

    });
 }
