function saveUser(){

    let data = {
        identification = $("ident_user").val(),
        name = $("name_user").val(),
        address = $("address_user").val(),
        cellphone = $("cphone_user").val(),
        email = $("email_user").val(),
        password = $("password_user").val(),
        zone = $("zone_user").val(),
        type = $("type_user").val()
    }

    let datosPeticion = JSON.stringify(data)
    $.ajax({
        url:'http://150.230.91.74:8080/api/user/new',
        data:datosPeticion,
    })
}