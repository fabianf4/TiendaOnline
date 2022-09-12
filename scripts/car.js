let token = sessionStorage.getItem('token')

async function drawProducts(){
    const response = await fetch("http://129.213.20.209:8080/user/getProducts",{
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    let result = await response.json()

    let total = 0;
    let bodyTable=""
    result.results.forEach((result)=>{
        bodyTable +=`<tr>
            <th>${result.id}</th>
            <td>${result.name}</td>
            <td>${result.price}</td>
        </tr>`
        total += result.price
    })

    document.getElementById('total').innerHTML = 'Total: '+total
    document.getElementById('bodyTable').innerHTML = bodyTable
}

if (token){
    drawProducts()
}else{
    alert('Debe iniciar sesion')
    location.href = '/login.html'
}

document.getElementById('pagar').addEventListener('click',async ()=>{
    const response = await fetch("http://129.213.20.209:8080/user/carDelete",{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    let result = await response.json()

    if (result){
        alert('Usted completo la compra')
    }else{
        alert('Error, algo salio mal')
    }

    location.reload()
})