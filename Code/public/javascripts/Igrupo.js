let grupo;
let cliente;

window.onload = function () {
    cliente = JSON.parse(sessionStorage.getItem("conta"));
  grupo = JSON.parse(sessionStorage.getItem("grupo"));


}



async function submit() {



  

  {


    let body = {
      
      G_id: grupo,
      C_id: cliente.C_id

    };

    console.log(body.G_id)
    console.log(body.M_id)

    let res = await $.ajax({
      type: "POST",
      url: "/api/grupos",
      data: JSON.stringify(body),
      dataType: "json",
      contentType: "application/json",
    });
    if (res.insertId) {
      alert("Adicionado ao grupo");
      window.location = "home.html";
    } else {
      alert("Algo correu mal.\n Tente mais tarde.");
    }
  } 
}