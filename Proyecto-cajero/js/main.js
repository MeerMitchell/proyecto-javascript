const persona =
  { nombre: 'aemond', 
  email: 'aemond@gmail.com', 
  password: 1234, 
  saldo: 20000.00 
};


let bienvenidaUser = document.getElementById('bienvenidaUser');
let saldoUser = document.getElementById('saldoUser');
let btnEnviar = document.getElementById('irAEnviar');
let btnRetirar = document.getElementById('irARetirar');

bienvenidaUser.innerHTML = "Bienvenido " + persona.nombre;
saldoUser.innerHTML = "$" + persona.saldo;

btnEnviar.addEventListener('click', irAEnviar);
btnRetirar.addEventListener('click', irARetirar);

function irAEnviar(){
    window.location.href = './enviar.html';
}
function irARetirar(){
    window.location.href = './retirar.html';
}