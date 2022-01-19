alert('Ciao, creiamo una Password. Premi OK');
const name = prompt('INSERISCI IL TUO NOME');
const surname = prompt('INSERISCI IL TUO COGNOME');
let color = prompt('INSERISCI IL TUO COLORE PREFERITO');

let password = name + surname + color;

document.getElementById('password').innerHTML = password + password.length;