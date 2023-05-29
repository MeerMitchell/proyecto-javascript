const persona =
  { nombre: 'aemond', 
  email: 'aemond@gmail.com', 
  password: 1234, 
  saldo: 20000.00 
};


let bienvenidaUser = document.getElementById('bienvenidaUser');
let saldoUser = document.getElementById('saldoUser');
let btnDepositar = document.getElementById('irADepositar');
let btnRetirar = document.getElementById('irARetirar');

bienvenidaUser.innerHTML = "Bienvenido " + persona.nombre;
saldoUser.innerHTML = "$" + persona.saldo;

btnDepositar.addEventListener('click', irADepositar);
btnRetirar.addEventListener('click', irARetirar);

function irADepositar(){
    window.location.href = './depositar.html';
}
function irARetirar(){
    window.location.href = './retirar.html';
}