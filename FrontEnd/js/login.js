const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const btnEntrar = document.querySelector('#btnEntrar')


btnEntrar.onclick = async e => {
  e.preventDefault();


  if (email.value == '' || senha.value == '') {
    return
  }
  let data = {"email": email.value, "senha":senha.value}

await fetch('http://localhost:8080/entrar', {
 
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data),
}).then( (response) => {
  return response.text()
}).then(data => {
  
  
  localStorage.setItem("token", data)

   
  
  
  window.location.href = "homeU.html"}
) 
}


function sair(){
  localStorage.removeItem("token")
}