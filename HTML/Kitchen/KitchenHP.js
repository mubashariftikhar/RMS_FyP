

    function khan(id) {
        $.get('posted_order' + '/' + id, function (response) {
            $('#myModal').modal('show');
            $('#table_id').val(id);
            $.each(response, function (key, value) {
                var $el = $("#oderdetail");
                $el.empty();
                $.each(response, function (key, value) {
                    $el.append(' <tr class="" style="background-color:#ef432b">' +
                        '<td>' + value.menu_code + '</td>' +
                        '<td>' + value.name + '</td>' +
                        '<td>' + value.qty + '</td>' +
                        '</tr>')

                })

            });
        });

    }

    function khan2(id) {
        $.get('take_away' + '/' + id, function (response) {
            $('#myModal2').modal('show');
            $.each(response, function (key, value) {
                var $el = $("#oderdetail2");
                $el.empty();
                $.each(response, function (key, value) {
                    $el.append(' <tr class="" style="background-color:#ef432b">' +
                        '<td>' + value.menu_code + '</td>' +
                        '<td>' + value.name + '</td>' +
                        '<td>' + value.qty + '</td>' +
                        '</tr>')

                })

            });
        });
    }

    setInterval("yourAjaxCall()", 5000);
    function yourAjaxCall() {
        $.get('refreshtable', function (response) {
            //             alert('i am called')
            var $el = $("#tblbody");
            $el.empty();
            $.each(response, function (key, value) {
                $el.append('<div  id="1">')
                if (value.status == "N") {
                    var values = value.table_id;
                    $("#tblbody").append('<div class="circles"  onclick="khan(' + values + ')" type="button"  >' +
                        '<span>' + value.table_name + '</span>' +
                        '</div>');
                }
                else if (value.status == "D") {
                    var values = value.table_id;
                    $("#tblbody").append('<div style="background:rgba(221, 222, 46, 0.97) " class="circles"  onclick="khan(' + values + ')" type="button"  >' +
                        '<span>' + value.table_name + '</span>' +
                        '</div>');
                }
                else {
                    $el.append('<div class="circles " style="background: green" type="button" >' +
                        '<span>' + value.table_name + '</span>' +
                        '</div>')
                }

            });
        });
    }


    setInterval("yourtakeaway()", 5000);
    function yourtakeaway() {
        $.get('refreshtakeaway', function (response) {

            var $el = $("#takeaway");
            $el.empty();
            $.each(response, function (key, value) {
                var values = value.bill_no;
                $el.append('<tr  onclick="khan2(' + values + ')" type="button"  style="background-color:#7b1228" type="button">' +
                    '<th scope="row">' + value.bill_no + '</th>' +
                    '<td>' + value.customer_name + '</td>' +
                    '</tr>')
            });
        });
    }

    $(document).ready(function () {

    });
 function LogOut() {
            var userSession = sessionStorage.getItem('user')
            if(userSession){
              sessionStorage.removeItem('user');
            }
            window.location.href="../Buttonpage.html";
        }
