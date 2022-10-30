const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const btnEntrar = document.querySelector('#btnEntrar')


btnEntrar.onclick = async e => {
  e.preventDefault();


  if (email.value == '' || senha.value == '') {
    return
  }
  let payload = {"email": email.value, "senha":senha.value}

await fetch('http://localhost:8080/entrar', {
 
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload),
}).then( (response) => {
  return response.text()
}).then(data => {
  
  
  localStorage.setItem("token", data.split(" ")[0])
  localStorage.setItem("userCpf", data.split(" ")[1])
   
  
  
  window.location.href = "homeU.html"}
) 
}


function sair(){
  localStorage.removeItem("token")
}