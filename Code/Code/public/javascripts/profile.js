let cliente;

async function createCards() {
    let main = document.getElementById('monbox');
    cliente = JSON.parse(sessionStorage.getItem("conta"));
    let clientes = await $.ajax({
        url: "/API/clientes/getByCliente/" + cliente.C_id,
        method: "get",
        dataType: "json"
    });
    console.log(clientes)
    for (let idx in clientes) {  
        main.innerHTML += showclientebox(clientes[idx]);
    }
}



function showclientebox(cliente) {
    let html = "";
        html += `
        <h2>Perfil</h2>
        <img src = "images/UserP.jpg" id="profileP">
        <div id="information">       
        <p>Nome</p>
        <p>Email</p>
        <p>Nacionalidade</p>
        <p class="DB">${cliente.C_Name}</p>
        <p class="DB">${cliente.C_Email}</p>
        <p class="DB">${cliente.C_Nacionalidade}</p>`;
    return html;
}


window.onload = () => {
    createCards();   
}

