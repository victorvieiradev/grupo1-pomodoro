const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
var token

 btnEntrar.onclick = async e  =>{

    if (email.value == '' || senha.value == '') {
      return
    }
    let data = {"email": email.value, "senha":senha.value}
  
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }),
  
    token = (response)
    // if(response == )
    localStorage.setItem("token", token)
    console.log(response)
 
  
  }