function validar() {
    var cad, nombre, apellido, telefono, expresion1, direccion, email, expresion;
    cad = document.getElementById("contra").value;
    nombre = document.getElementById("nombres").value;
    apellido = document.getElementById("apellidos").value;
    direccion = document.getElementById("Direccion").value;
    email = document.getElementById("correo").value;
    ciudad = document.getElementById("fech").value;
    ced = document.getElementById("cedula").value;
    expresion = /\w+@\w+\.+[a-z]/;
    expresion1 = /([A-Z][a-z]+) ([A-Z][a-z]+){1,3}/
    expresion2 = /([A-Z][a-z])/
    var total = 0;
    var resta = 0;
    var suma = 0;
    var longitud = ced.length;
    var longcheck = longitud - 1;
    var c;
    if (nombre === "" || cad === "" || direccion === "" || email === "" || ced === "" || ciudad === "" || apellido === "") {
        document.getElementById('obli').style.display = 'block';
        document.getElementById('obli').innerHTML = "Todos los campos son obligatorios";
        document.getElementById("obli").style.color = "red";
        document.getElementById("obli").style.textAlign = "center";
        return false;
    } else if (!expresion2.test(nombre)) {
        document.getElementById('nom').style.display = 'block';
        document.getElementById('nom').innerHTML = "El Nombre no es valido";
        document.getElementById("nom").style.color = "red";
        document.getElementById("nom").style.textAlign = "center";
        return false;
    } else if (!expresion1.test(apellido)) {
        document.getElementById('ape').style.display = 'block';
        document.getElementById('ape').innerHTML = "El Apellido no es valido";
        document.getElementById("ape").style.color = "red";
        document.getElementById("ape").style.textAlign = "center";
        return false;
    } else if (!expresion.test(email)) {
        alert("El Email no es valido");
        return false;
    }
    if (ced.length == 10) {

        //Obtenemos el digito de la region que sonlos dos primeros digitos
        var digito_region = ced.substring(0, 2);

        //Pregunto si la region existe ecuador se divide en 24 regiones
        if (digito_region >= 1 && digito_region <= 24) {

            // Extraigo el ultimo digito
            var ultimo_digito = ced.substring(9, 10);

            //Agrupo todos los pares y los sumo
            var pares = parseInt(ced.substring(1, 2)) + parseInt(ced.substring(3, 4)) + parseInt(ced.substring(5, 6)) + parseInt(ced.substring(7, 8));

            //Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
            var numero1 = ced.substring(0, 1);
            var numero1 = (numero1 * 2);
            if (numero1 > 9) { var numero1 = (numero1 - 9); }

            var numero3 = ced.substring(2, 3);
            var numero3 = (numero3 * 2);
            if (numero3 > 9) { var numero3 = (numero3 - 9); }

            var numero5 = ced.substring(4, 5);
            var numero5 = (numero5 * 2);
            if (numero5 > 9) { var numero5 = (numero5 - 9); }

            var numero7 = ced.substring(6, 7);
            var numero7 = (numero7 * 2);
            if (numero7 > 9) { var numero7 = (numero7 - 9); }

            var numero9 = ced.substring(8, 9);
            var numero9 = (numero9 * 2);
            if (numero9 > 9) { var numero9 = (numero9 - 9); }

            var impares = numero1 + numero3 + numero5 + numero7 + numero9;

            //Suma total
            var suma_total = (pares + impares);

            //extraemos el primero digito
            var primer_digito_suma = String(suma_total).substring(0, 1);

            //Obtenemos la decena inmediata
            var decena = (parseInt(primer_digito_suma) + 1) * 10;

            //Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
            var digito_validador = decena - suma_total;

            //Si el digito validador es = a 10 toma el valor de 0
            if (digito_validador == 10) {
                var digito_validador = 0;
            }
            //Validamos que el digito validador sea igual al de la cedula
            if (digito_validador == ultimo_digito) {
                document.getElementById('cedu').style.display = 'block';
                document.getElementById('cedu').innerHTML = "Cedula correcta";
                document.getElementById("cedu").style.color = "white";
                document.getElementById("cedu").style.textAlign = "center";
            } else {
                document.getElementById('cedu').style.display = 'block';
                document.getElementById('cedu').innerHTML = "Cedula incorrecta";
                document.getElementById("cedu").style.color = "red";
                document.getElementById("cedu").style.textAlign = "center";
                return false;
            }

        } else {
            // imprimimos en consola si la region no pertenece
            document.getElementById('cedu').style.display = 'block';
            document.getElementById('cedu').innerHTML = "Esta cedula no pertenece a ninguna region";
            document.getElementById("cedu").style.color = "red";
            document.getElementById("cedu").style.textAlign = "center";
            return false;
        }
    } else {
        //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
        document.getElementById('cedu').style.display = 'block';
        document.getElementById('cedu').innerHTML = "Esta cedula tiene menos de 10 Digitos";
        document.getElementById("cedu").style.color = "red";
        document.getElementById("cedu").style.textAlign = "center";
        return false;
    }
}

$("#mascota").click(function() {
    $('#regismasco').toggle(1000, function() {

    });
})

$("#rusuario").click(function() {
    $('#regisusuario').toggle(1000, function() {

    });
})

function validarmasco() {
    var peso, nombre, fecha, raza, expresion1, sexo, browser, expresion;
    nombre = document.getElementById("nombre").value;
    peso = document.getElementById("Peso").value;
    raza = document.getElementById("raza").value;
    fecha = document.getElementById("Fecha_nacimiento").value;
    sexo = document.getElementById("sexo").value;
    browser = document.getElementById("browser").value;
    expresion = /\w+@\w+\.+[a-z]/;
    expresion1 = /([A-Z][a-z]+) ([A-Z][a-z]+){1,3}/


    if (nombre === "" || peso === "" || raza === "" || fecha === "" || sexo === "" || browser === "") {
        document.getElementById('obli').style.display = 'block';
        document.getElementById('obli').innerHTML = "Todos los campos son obligatorios";
        document.getElementById("obli").style.color = "red";
        document.getElementById("obli").style.textAlign = "center";
        return false;
    } else if (!expresion1.test(nombre)) {
        alert("El Nombre no es valido");
        return false;
    }
}

function login() {
    var contra, em, expresion;
    contra = document.getElementById("Contra").value;
    em = document.getElementById("Usuario").value;
    expresion = /\w+@\w+\.+[a-z]/;

    if (contra === "" || em === "") {
        document.getElementById('ob').style.display = 'block';
        document.getElementById('ob').innerHTML = "Todos los campos son obligatorios";
        document.getElementById("ob").style.color = "red";
        document.getElementById("ob").style.textAlign = "center";
        return false;
    }

}
let usu = document.getElementById("Usuario");
usu.addEventListener('keyup', () => {
    document.getElementById('ob').style.display = 'none';
    document.getElementById('compro').style.display = 'none';
});
let contr = document.getElementById("Contra");
contr.addEventListener('keyup', () => {
    document.getElementById('ob').style.display = 'none';
    document.getElementById('compro').style.display = 'none';
});

let name = document.getElementById('nombres');
name.addEventListener('keyup', () => {
    document.getElementById('obli').style.display = 'none';
    document.getElementById('nom').style.display = 'none';
});

let corre = document.getElementById('correo');
corre.addEventListener('keyup', () => {
    document.getElementById('obli').style.display = 'none';
});

let ape = document.getElementById('apellidos');
ape.addEventListener('keyup', () => {
    document.getElementById('obli').style.display = 'none';
    document.getElementById('ape').style.display = 'none';
});


let control = document.getElementById('contra');
control.addEventListener('keyup', () => {
    document.getElementById('obli').style.display = 'none';
});

let di = document.getElementById('Direccion');
di.addEventListener('keyup', () => {
    document.getElementById('obli').style.display = 'none';
});

let txtInput = document.getElementById('cedula');
txtInput.addEventListener('keyup', () => {
    document.getElementById('cedu').style.display = 'none';
    document.getElementById('obli').style.display = 'none';
});