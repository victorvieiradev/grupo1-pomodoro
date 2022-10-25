const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
var token





 btnEntrar.onclick = async e  =>{
    e.preventDefault();

    if (email.value == '' || senha.value == '') {
      return
    }
    let paylog = {"email": email.value, "senha":senha.value}
  
    const response = await fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paylog),
    });
    const data = await JSON.stringify(response)
    console.log(response)

    // if(response.status == 200){
    //     // window.location.href = "tarefas.html";
    //     localStorage.setItem("token", response.token)
        
    // }

  
  }