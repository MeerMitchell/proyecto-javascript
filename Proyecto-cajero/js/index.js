function datosUsuario(){
  let emailInput = document.getElementById('emailUser');
  let passwordInput = document.getElementById('passwordUser');

  emailInput = emailInput.value;
  passwordInput = passwordInput.value;

  console.log(emailInput);
  console.log(passwordInput);

  if (emailInput == persona.email){
      if(passwordInput == persona.password){
          window.location.href = './main.html';
      }
      else{
          console.log("Error");
          mensajeUsuario.innerHTML = "La contraseña es incorrecta";
      }
  } else {
      console.log("Error");
      mensajeUsuario.innerHTML = "El correo es incorrecto";
  }
}

const persona =
  { nombre: 'aemond', 
  email: 'aemond@gmail.com', 
  password: 1234, 
  saldo: 20000 
};




let btnLogin = document.getElementById('btnLogin');
let mensajeUsuario = document.getElementById('msgUser');

btnLogin.addEventListener('click', datosUsuario);



