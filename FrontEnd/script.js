const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#titulo')
const sFuncao = document.querySelector('#descricao')
const sSalario = document.querySelector('#minutos')
const btnSalvar = document.querySelector('#btnSalvar')

var itens
var id

function openModal(item) {
  modal.classList.add('active')


  if (item) {
    sNome.value = item.titulo
    sFuncao.value = item.descricao
    sSalario.value = item.minutos
    id = item.id 
     modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
  }

  btnSalvar.onclick  = async e => {
      e.preventDefault();
      
      if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
        return
      }
      const payload = {"titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value}
    try{
      const response = await fetch('http://localhost:8080/tarefas', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
     
      
      const data = await response.json();
    
          itens.push(data)
        
      
        setItensBD()
      
        modal.classList.remove('active')
        loadItens()
      
      }catch{
    
      }

}
}

function openModalEdit(item) {
  modal.classList.add('active')


  if (item) {
    sNome.value = item.titulo
    sFuncao.value = item.descricao
    sSalario.value = item.minutos
    id = item.id 
     modal.onclick = e => {
      if (e.target.className.indexOf('modal-container') !== -1) {
        modal.classList.remove('active')
      }
    }
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
  }

  btnSalvar.onclick  = async e => {
    e.preventDefault();
    
    if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
      return
    }
    const payload = { "id": id, "titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value, "concluido": item.concluido}
  try{
    const response = await fetch(`http://localhost:8080/tarefas/editar/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
   
    const data = await response.json();
    
      itens.push(data)
      deleteItem(item.id)
    
      setItensBD()
      loadItens()

      modal.classList.remove('active') 
    }catch{
  
    }
}
}


// async function editItem(item, index) {
// console.log(JSON.stringify(item));

// openModal(item)

// if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
//   return
// }
// const payload = {"titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value}
// try{
//   const response = await fetch(`http://localhost:8080/tarefas/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body:JSON.stringify(payload),
//   })

//   const data = await response.json();
//   itens.splice(index, 1)

//   itens.push(data)
//   setItensBD()

//   modal.classList.remove('active')
//   loadItens()

// } catch{
  
// }

  
// }

// btnSalvar.onclick = async e => {
//   e.preventDefault();
  
//   if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
//     return
//   }
//   const payload = {"titulo": sNome.value, "descricao": sFuncao.value, "minutos": sSalario.value}
// try{
//   const response = await fetch('http://localhost:8080/tarefas', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(payload),
//   });
 
  
//   const data = await response.json();

  
//   // let id = data.id.value

//   // console.log("id do objeto salvo: ", id)
//       itens.push(data)
    
  
//     setItensBD()
  
//     modal.classList.remove('active')
//     loadItens()
//     // id = undefined
//   }catch{

//   }
// }

async function deleteItem(id, index)  {



  // console.log(JSON.stringify.index.value)
  try{
    const response = await fetch(`http://localhost:8080/tarefas/concluir/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body:{},
    })
    itens.splice(index, 1)
    setItensBD()
    loadItens()

  } catch{
    
  }
    
}


function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  const tituloTD = document.createElement('td');
  tituloTD.innerText = item.titulo
  const descricaoTD = document.createElement('td');
  descricaoTD.innerText = item.descricao
  const minutosTD = document.createElement('td');
  minutosTD.innerText = item.minutos

  const acaoTD = document.createElement('td');
  const editItemButton = document.createElement('button');
  editItemButton.onclick = () => openModalEdit(item);
  const bxEdit = document.createElement('i');
  bxEdit.className = 'bx bx-edit';
  editItemButton.appendChild(bxEdit)
  acaoTD.appendChild(editItemButton)

  const acaoDelete = document.createElement('td');
  const deleteItemButton = document.createElement('button');
  deleteItemButton.onclick = () => deleteItem(item.id);
  const bxDelete = document.createElement('i');
  bxDelete.className = 'bx bx-trash';
  deleteItemButton.appendChild(bxDelete)
  acaoDelete.appendChild(deleteItemButton)

  tr.appendChild(tituloTD)
  tr.appendChild(descricaoTD)
  tr.appendChild(minutosTD)
  tr.appendChild(acaoTD)
  tr.appendChild(acaoDelete)

  tbody.appendChild(tr)
}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()
