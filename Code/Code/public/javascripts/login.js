async function Login() {
    let name = $("#nome").val();
    console.log(name);
    
    let result = await $.ajax({
        url: "/API/logins/login/"+name,
        method: "get",
        
    });
    console.log(result);
   

    if(result.accountType == 'Cliente') {
        sessionStorage.setItem('conta', JSON.stringify(result));
        window.location = "home.html";
    }

    else {
        alert('Tente Novamente')
        
    }
    
}

function Register() {
    window.location = "register.html"
}

