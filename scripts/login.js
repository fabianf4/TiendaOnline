async function login (){

    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    const response = await fetch("http://129.213.20.209:8080/user/login",{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "userName": username,
            "password": password
        })
    })

    const result = await response.json()

    if(result && result.login){
        sessionStorage.setItem('token',result.token)
 
        alert("Usted inicio sesion")

        if(result.rol == 1){
            location.href = '/users.html'
        }else{
            location.href = '/products.html'
        }

    }else{
        alert("Usuario y/o contraseña incorrectos")
    }
}

document.getElementById('login').addEventListener('click',login)