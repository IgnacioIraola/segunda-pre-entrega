let formulario = document.getElementById("login");
let formRegistro = document.getElementById("registro");
let ingresoError = document.getElementById("Error");
let menorEdad = document.getElementById("menoredad");

// constructor

class Usuario{ 
    constructor(user, password, edad){
        this.user = user;
        this.password = password;
        this.edad = edad;
    }
}



let usuarios =[];
let usuario = new Usuario("Juancarlo", "3210", "58");

usuarios.push(usuario);


formRegistro.addEventListener("submit",(e) => {
    e.preventDefault();
    let userLogin = document.getElementById("userRegister").value;
    let passwordLogin = document.getElementById("passRegister").value;
    let ageLogin = document.getElementById("ageRegister").value;

    if(ageLogin < 18){

        alert(`sos menor de edad no podés ingresar`)
        console.log("menor de edad")
    
    }else (userLogin && passwordLogin && ageLogin >=18)
        let nuevoUsuario = new Usuario (userLogin, passwordLogin, ageLogin); 
        
        usuarios.push(nuevoUsuario)
        alert(`Estás registrado ${nuevoUsuario} ya podés loguearte`)
    


})



formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passwordLogin = document.getElementById("pass").value;
    
    const ingreso = usuarios.find(user => user.user === user)

    if (condition) {
        
    }

    /*for(let user of usuarios){
        if(user.user == userLogin && user.password == passwordLogin){
            alert("Bienvenido");
            window.location.href ="index.html"
            localStorage.setItem("usuario",user.user);
        }else if ((user.user =! userLogin) && (user.password =! passwordLogin) || 
        (user.user =! userLogin) || (user.password =! passwordLogin)){
            resultado.innerHTML =`<p>Acceso denegado, datos incorrectos</p>`
        }

    }*/

})
