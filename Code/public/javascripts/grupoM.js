let cliente;
let image;
let grupo;

async function createCards() {
    let main = document.getElementById('grupoI');
    grupo = JSON.parse(sessionStorage.getItem("grupo"));
    image = await $.ajax({
        url: "/API/grupos/getByImage/" + grupo,
        method: "get",
        dataType: "json"
    });
    console.log(image)
    for (let idx in image) {  
        main.innerHTML += makeCard(image[idx]);
    }

}





function makeCard(image) {
    return `<img src= ${image.URL} id="imgGrupo">
    <p>Nome do membro: ${image.C_name}</p>
    <p>Descrição: ${image.I_descricao}</p>

    `;
}

function addImage(){
    window.location = "addImage.html"
}




window.onload = () => {
    createCards();   
}
