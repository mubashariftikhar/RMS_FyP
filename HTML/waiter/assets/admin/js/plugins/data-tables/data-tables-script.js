$(document).ready(function () {
    //$('#data-table-simple').DataTable();
    $(function () {
        var table = $('table').DataTable({
            dom: 'Bfrtip',
            buttons: [
                'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
            ]
        });
    });



});