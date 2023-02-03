//variables sobre los diferentes campos que se llenan random

const nombre = document.getElementById('nombre');
const foto = document.getElementById('fotoUsuario'); 
const edad = document.getElementById('edad');
const email = document.getElementById('email');
const telf = document.getElementById('telf');
const direccion = document.getElementById('direccion');

//funciones 

const generarUsuario = async () => { //toma datos de usuarios al azar del url y los carga en el html
    const fuente = 'https://randomuser.me/api/';
    const resp = await fetch(fuente);
    const { results } = await resp.json();
    const info = results[0];

    foto.src = info.picture.large;
    nombre.textContent = info.name.first + " " + info.name.last;
    edad.textContent = info.dob.age + " " + "años";
    email.textContent = info.email;
    telf.textContent = info.cell;
    direccion.textContent = info.location.street.name + " " + info.location.street.number + ", " + info.location.city;
}

document.getElementById('aficiones').addEventListener('click', function(){ //carga las aficiones si el usuario da click en el boton
        document.getElementById('afi1').innerHTML = '<i class="fa-solid fa-car"></i> Conducir';
        document.getElementById('afi2').innerHTML = '<i class="fa-solid fa-mug-hot"></i> Cocinar';
        document.getElementById('afi3').innerHTML = '<i class="fa-solid fa-gamepad"></i> Videojuegos';
        document.getElementById('hobby').style.display = 'block';
});

document.getElementById('acercademi').addEventListener('click', function(){ //carga el resto de la info de acerca de mi
        document.getElementById('masinfo').style.display = 'block';
})

generarUsuario();

function varchange() {
    var x = document.getElementById("navBar");
    if (x.className === "navBar") {
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
}




