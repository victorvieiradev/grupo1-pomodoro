const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const cpf = document.querySelector('#cpf')
const senha = document.querySelector('#senha')
const btnSalvar = document.querySelector('#salvar')
const btnEntrar = document.querySelector('#btnEntrar')

btnSalvar.onclick = e => {
  
    if (nome.value == '' || cpf.value == '' || email.value == '' || senha.value == '') {
      return
    }
    let data = {"nome": nome.value, "cpf": cpf.value, "email": email.value, "senha":senha.value}
  
  fetch('http://localhost:8080/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then( (response) => response.json().then( (data) => alert("Tarefa cadastrada com sucesso: " + JSON.stringify(data))))
  e.preventDefault();
  window.location.href = "login.html";

  
}



//  btnEntrar.onclick = async e  =>{

//   if (email.value == '' || senha.value == '') {
//     return
//   }
//   let data = {"email": email.value, "senha":senha.value}

//   const response = await fetch('http://localhost:8080/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   },

//   const token = response;
//   // if(response == )


//   window.location.href = "../homeU.html";

// }


