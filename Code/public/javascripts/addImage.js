let grupo;
let cliente;

window.onload = function () {
    cliente = JSON.parse(sessionStorage.getItem("conta"));
  grupo = JSON.parse(sessionStorage.getItem("grupo"));


}



async function submit() {

  let image = $("#image").val();
  let desc = $("#desc").val();
  console.log(image)
  console.log(desc)

  
  if (
    
    image != "" &&
    desc != "" 
    

   ) 
  {


    let body = {
      
      URL: image,
      I_descricao: desc,
      G_id: grupo,
      M_id: cliente.C_id

    };

    console.log(body.G_id)
    console.log(body.M_id)

    let res = await $.ajax({
      type: "POST",
      url: "/api/images",
      data: JSON.stringify(body),
      dataType: "json",
      contentType: "application/json",
    });
    if (res.insertId) {
      alert("Imagem adicionada!");
      window.location = "grupoM.html";
    } else {
      alert("Algo correu mal.\n Tente mais tarde.");
    }
  } else {
    alert("Por favor preencha os campos todos");
  }
}
