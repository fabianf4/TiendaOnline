let token = sessionStorage.getItem('token')

async function addProduct() {
    let name = document.getElementById('name').value
    let price = document.getElementById('price').value
    let amount = document.getElementById('amount').value
    let imgUrl = document.getElementById('imgUrl').value

    if(name && price && amount && imgUrl){
        const response = await fetch("http://129.213.20.209/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                "name": name,
                "price": price,
                "amount": amount,
                "imgUrl": imgUrl,
            })
        })

        let result = await response.json();

        console.log(result)

        if(result.id){
            alert(`Se registro su producto con id ${result.id}`)
        }
        if(result.errors){
            alert('Error, no se registro el producto')
        }
    }else{
        alert('Debe llenar todos los campos')
    }
}

if (!token){
    alert('Debe iniciar sesion')
    location.href = '/login.html'
}

document.getElementById('addProduct').addEventListener('click', addProduct)