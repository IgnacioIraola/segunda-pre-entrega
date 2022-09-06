let formulario = document.getElementById("login");
let formRegistro = document.getElementById("registro");
let ingresoError = document.getElementById("error");

// constructor

class Usuario{ 
    constructor(user, password){
        this.user = user;
        this.password = password;
    }
}



let usuarios =[];
let usuario = new Usuario("Juancarlo", "3210", "58");

usuarios.push(usuario);


formRegistro.addEventListener("submit",(e) => {
    e.preventDefault();
    let userLogin = document.getElementById("userRegister").value;
    let passwordLogin = document.getElementById("passRegister").value;
   
    if(userLogin && passwordLogin){
        let nuevoUsuario = new Usuario (userLogin, passwordLogin); 
        
        usuarios.push(nuevoUsuario)
        alert("Estás registrado" + nuevoUsuario)
    
    }
        
    


})



formulario.addEventListener("submit", (e) =>{
    e.preventDefault();
    let userLogin = document.getElementById("user").value;
    let passwordLogin = document.getElementById("pass").value;
    
    
    

    for(let user of usuarios){
        if(user.user == userLogin && user.password == passwordLogin){
            alert("Bienvenido");
            window.location.href ="index.html"
            localStorage.setItem("usuario",user.user);
        }else if ((user.user =! userLogin) && (user.password =! passwordLogin) || 
        (user.user =! userLogin) || (user.password =! passwordLogin)){
            resultado.innerHTML =`<p>Acceso denegado, datos incorrectos</p>`
        }

    }

})
