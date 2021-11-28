function saveUser(){
    var name = $.trim($("#name").val());
    var email = $.trim($("#email").val());
    var password = $.trim($("#password").val());
    var password_conf = $.trim($("#password_conf").val());

    if (name != "" && email != "" && password != "" && password_conf != ""){
        if(password != password_conf){
            alert("Las contraseña no coincide")
            $("#password_conf").focus();
        /*} if(email == email){
            alert("El correo ya existe. Ingrese otro correo")
        */    
        }else{
            $.ajax({
                url: 'http://localhost:8080/api/user/new',
                data: JSON.stringify({
                    "email": email,
                    "password": password,
                    "name": name
                }),
                type: 'POST',
                contentType: 'application/json',
                //dataType: 'json',

                error : function(result){
                    alert("Usuario no registrado");
                    console.log(result);
                },
                success:function(respuesta){
                    /*console.log(respuesta);
                        if(respuesta.id == null){
                            alert("No fue posible crear la cuenta")
                            $("#name").focus();
                            $("#email").focus();
                        } else {*/
                            alert("La cuenta se creo de manera correcta");
                            $("#form_id").trigger("reset");
                        /*}   
                        $(':input').val('');
                        $('#name').focus();    */             
                }
            });
        }  
        return false;      
    }
}

function login(){
    var email = $.trim($("#email").val());
    var password = $.trim($("#password").val());
    if(email != "" && password != ""){
        $.ajax({
            //url: 'http://150.230.91.74:8080/api/user/' + email +'/'+ password,
            url: 'http://localhost:8080/api/user/' + email +'/'+ password,
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',

            error : function(result){
                alert("Usuario no existe")
                console.log(result);
            },
            success:function(respuesta){
                console.log(respuesta);
                    if(respuesta.id == null){
                        alert("No exite un usuario con estos datos")
                    } else {
                        alert("Bienvenido " + respuesta.name);
                    }   
                    $(':input').val('');
                    $('#email').focus();                 
            }
        });
        return false;
    }
}