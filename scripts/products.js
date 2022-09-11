
let token = sessionStorage.getItem('token')

async function drawCards(){
    const response = await fetch("http://129.213.20.209/products",{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    let result = await response.json()

    let cards=""
    result.results.forEach((result)=>{
        cards +=`<div class="card col" style="width: 18rem;">
        <img src="${result.imgUrl}" class="card-img-top mx-auto" height="100%" alt="">
        <div class="card-body">
          <h5 class="card-title">${result.name}</h5>
          <p class="card-text">${result.price}</p>
          <button href="#" class="btn btn-primary" onclick="addToCar(${result.id})">Agregar al carro</button>
        </div>
    </div>`
    })

    document.getElementById('cards').innerHTML = cards
}

async function addToCar(id){
    const response = await fetch("http://129.213.20.209/user/car",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            "id": id
        })
    })

    let result = await response.json()

    if (result.status){
        alert(result.status)
    }else{
        alert('Error, algo salio mal')
    }
}

if (token){
    drawCards()
}else{
    alert('Debe iniciar sesion')
    location.href = '/login.html'
}