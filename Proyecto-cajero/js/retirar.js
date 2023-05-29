const persona =
  { nombre: 'aemond', 
  email: 'aemond@gmail.com', 
  password: 1234, 
  saldo: 20000.00 
};

let saldoUser = document.getElementById('saldoUsuario');
saldoUser.innerHTML = "$" + persona.saldo;

let btnRetirar = document.getElementById('btnRetirar');
btnRetirar.addEventListener('click', retirar);

let mensajeUsuario = document.getElementById('mensajeUsuario');

function retirar(){
    let cantidadRetiro = document.getElementById('retiroUsuario').value;

    if (cantidadRetiro > 30000){
        mensajeUsuario.innerHTML = "Lo siento no puedes retirar";
    } else {
        if (cantidadRetiro > persona.saldo){
            mensajeUsuario.innerHTML = "Lo siento, saldo insuficiente";
        } else {
            persona.saldo = persona.saldo - cantidadRetiro;
            mensajeUsuario.innerHTML = "La cantidad ha sido retirada." + " Tu saldo actual es de " + persona.saldo;
        }
    }
}