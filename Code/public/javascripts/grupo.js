let cliente;
let grupos;

async function createCards() {
    let main = document.getElementById('grupoT');
    cliente = JSON.parse(sessionStorage.getItem("conta"));
    grupos = await $.ajax({
        url: "/API/grupos/getByMember/" + cliente.C_id,
        method: "get",
        dataType: "json"
    });
    console.log(grupos)
    for (let idx in grupos) {  
        main.innerHTML += makeCard(grupos[idx]);
    }
}





function makeCard(grupo) {
    return `<table>
            <tr onclick = "mostrarGrupo(${grupo.G_id})">
                <td>${grupo.G_name}</td>
                <td>${grupo.C_Name}</td>
                <td>${grupo.G_descricao}</td>


            </tr>

        
            </table>`;
}

function mostrarGrupo(grupos){
    sessionStorage.setItem('grupo', JSON.stringify(grupos));
    window.location = "grupoM.html"
}



window.onload = () => {
    createCards();   
}
