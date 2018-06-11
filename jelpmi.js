
function servicios() {
 var confirmados = [
    {
      "id":"0001",
      "city":"CDMX",
      "customer":"Román López",
      "addres_street": "Zamora 177, Int 101",
      "addres_neighborhood": "Condesa",
      "service_type": "Recurrente",
      "date": "30 feb",
      "hour": "7:00 AM",
      "lenght": "4 hr",
      "lat_service": "19.412901",
      "long_service": "-99.180274"
    },

    {
        "id":"0002",
        "city":"CDMX",
        "customer":"Mauricio Morales",
        "addres_street": "Amatlán 18",
        "addres_neighborhood": "Condesa",
        "service_type": "Expres",
        "date": "30 feb",
        "hour": "12:00 AM",
        "lenght": "3",
        "lat_service": "19.413958",
        "long_service": "-99.174357"
      }
    
  ];


    var content = "";

    for(var i = 0; i < confirmados.length; i++){

        content += '<div class="card shadow p-3 mb5">';
        content += '<ul class="list-group list-group-flush">';
        content += '<li class="list-group-item">' + '<p>'+'Dirección:'+'</p>';
        content += '<h3>' + confirmados [i].addres_street + '</h3>'+'</li>';

        content += '<li class="list-group-item">' + '<p>'+'Hora:' +'</p>';  
        content += '<p class="font-weight-bold">'+ confirmados [i].hour + '</p>'+'</li>';
        

        content += '<li class="list-group-item">'+ '<p>'+'Fecha:'+ '</p>';
        content += '<p class="font-weight-bold">' + confirmados [i].date + '</p>'+ '</li>' ;
        

        content += '<li class="list-group-item">'+ '<p>'+'Duración:'+'</p>';
        content += '<p class="font-weight-bold">' + confirmados[i].lenght + '</p>'+ '</li>'

        content += '<li class="list-group-item">'+ '<p>'+'Tipo de Servicio:'+'</p>';
        content += '<p class="font-weight-bold">'+ confirmados[i].service_type + '</p>' +'</li>';
        content += '<a href="detalle.html" class="btn btn-lg shadow p-3 m-3 detalle" role="button">'+ 'VER DETALLE'+ '</a>';
        content += '</ul>'+'</div>'


        document.getElementById("confirmados").innerHTML = content;
    }
}