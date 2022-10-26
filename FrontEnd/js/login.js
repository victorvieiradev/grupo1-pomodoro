const email = document.querySelector('#email')
const senha = document.querySelector('#senha')

var token




 btnEntrar.onclick = async ()  =>{


    let paylog = {"email": email.value, "senha":senha.value}
  
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paylog),
    })
   
    const reader = response.text
    const result = await reader.read()
    console.log(result.value)

    // if(response.status == 200){
    //     window.location.href = "tarefas.html";
    //     localStorage.setItem("token", response.token)
    //     console.log(response.token.JSON)
        
        
    // }

    
  }