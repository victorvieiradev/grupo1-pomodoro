const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const btnEntrar = document.querySelector('#btnEntrar')
let token

btnEntrar.onclick =  e => {
  e.preventDefault();
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
}).then( (response) => {
  return response.text()
}).then(data => {
  const token = data.split(" ")[1]
  localStorage.setItem("token", token)
  window.location.href = "homeU.html"
})
}
