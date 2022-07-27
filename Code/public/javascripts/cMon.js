let parsed; 
let user;

window.onload = function () {
  user = JSON.parse(sessionStorage.getItem("conta"));

  $( "#start" ).autocomplete({
    source: function( request, response ) {
      $.ajax({
        url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${request.term}.json?access_token=pk.eyJ1IjoibWN2aXR6eiIsImEiOiJja2tpdDcwZHUxcXR4Mm5tbnpoY3JwcXZ1In0.AVRKDMASEL6fSFbPRFXw7w`,
        dataType: "json",
        success: function( data ) {
          response( parseData(data) );
        }
      });
    },
    minLength: 4,
    open: function() {
      $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
    },
    close: function() {
      $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
    }
  });
};

function parseData(data) { 
  parsed = []
  for(let item of data.features) {
    let obj = {};
    obj.label = item.place_name;
    obj.value = `[${item.center[0]}, ${item.center[1]}]`;
    parsed.push(obj)
  }
  return parsed;
}





async function submit() {

  let Nome = $("#nome").val();
  let image = $("#image").val();
  let desc = $("#desc").val();
  let freguesia = $("#freguesia").val();
  let ano = $("#ano").val();
  let coo = $("#start").val();

  
  if (
    Nome != "" &&
    image != "" &&
    desc != "" &&
    freguesia != "" &&
    ano != "" &&
    coo != ""

   ) 
  {
    coo = coo.toString().replace('[', '');
    coo = coo.replace(']', '');
    coo = coo.replace(' ', '')
    coo = coo.split(',');
    console.log(coo)

    let body = {
      Nome: Nome,
      image: image,
      M_desc: desc,
      freguesia: freguesia,
      ano_construcao: ano,
      M_lat: coo[1],
      M_long: coo[0]
    };

    let res = await $.ajax({
      type: "POST",
      url: "/api/mons",
      data: JSON.stringify(body),
      dataType: "json",
      contentType: "application/json",
    });
    if (res.insertId) {
      alert("Monumento criado!");
      window.location = "home.html";
    } else {
      alert("Algo correu mal.\n Tente mais tarde.");
    }
  } else {
    alert("Por favor preencha os campos todos");
  }
}
