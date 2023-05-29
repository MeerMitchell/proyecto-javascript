const persona =
  { nombre: 'aemond', 
  email: 'aemond@gmail.com', 
  password: 1234, 
  saldo: 20000.00 
};

let saldoUser = document.getElementById('saldoUsuario');
saldoUser.innerHTML = "$" + persona.saldo;

let btnDepositar = document.getElementById('btnDepositar');
btnDepositar.addEventListener('click', depositar);

let mensajeUsuario = document.getElementById('mensajeUsuario');

function depositar(){
    
    let cantidadDeposito = document.getElementById('depositoUsuario').value;

    if (cantidadDeposito > 50000){
        mensajeUsuario.innerHTML = "Lo siento, no puedes depositar dicha cantidad";
    } 
    else {        
            persona.saldo = parseInt(persona.saldo) + parseInt(cantidadDeposito);
            mensajeUsuario.innerHTML = "La cantidad ha sido depositada." + " Tu saldo actual es de " + persona.saldo;
        }
}