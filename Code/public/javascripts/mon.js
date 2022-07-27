let mon;

async function createCards() {
    let main = document.getElementById('monbox');
    mon = JSON.parse(sessionStorage.getItem("mon"));
    let mons = await $.ajax({
        url: "/API/mons/getByMon/" + mon.id_monumento,
        method: "get",
        dataType: "json"
    });
    console.log(mons)
    for (let idx in mons) {  
        main.innerHTML += showmonbox(mons[idx]);
    }
}

function showmonbox(mon) {
    let html = "";
        html += `
        <h2>${mon.Nome}</h2>
        <img src = ${mon.image} id = 'monimg'>
        <H4>Information</H4>
        <div id="information">       
        <p>Ano de Construção</p>
        <p>Freguesia</p>
        <p>Localização</p>
        <p class="DB">${mon.ano_construcao}</p>
        <p class="DB">${mon.freguesia}</p>
        <p class="DB">${mon.M_lat} ${mon.M_long}</p>
        </div>
        <div>
        <p>Descrição</p>
        <p class="desc">${mon.M_desc}</p>
        `;
    return html;
}


window.onload = function(){
    createCards();
}
