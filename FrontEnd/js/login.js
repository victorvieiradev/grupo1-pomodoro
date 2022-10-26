const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const btnEntrar = document.querySelector('#btnEntrar')
var token

btnEntrar.onclick =  e => {
  
  if (email.value == '' || senha.value == '') {
    return
  }
  let data = {"email": email.value, "senha":senha.value}

fetch('http://localhost:8080/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then( (response) => response.text().then( (data) => alert("O token é:  " + JSON.stringify(data))))
e.preventDefault();
// window.location.href = "login.html";



}






 