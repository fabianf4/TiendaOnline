async function signin() {
    let name = document.getElementById('name').value
    let lastname = document.getElementById('lastname').value
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(name && lastname && username && email && password){
        const response = await fetch("http://129.213.20.209:8080/user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "lastName": lastname,
                "userName": username,
                "email": email,
                "password": password
            })
        })

        let result = await response.json();

        if(result.eror){
            alert('El usuario no esta disponible')
        }
        if(result.status){
            alert(`Se registro su usuario ${result.userName}`)
        }
    }else{
        alert('Debe llenar todos los campos')
    }
}

document.getElementById('signin').addEventListener('click', signin)