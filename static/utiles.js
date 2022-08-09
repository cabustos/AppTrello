
const formulario = document.querySelector("#agregaractividades");

pintar_tareas_porhacer();
pintar_tareas_enproceso();
pintar_tareas_realizado();

function pintar_tareas_porhacer() {
    let porhacer = document.getElementById("tareasporhacer");
    //porhacer.innerHTML = '<div class="tareas-container-unit" id="tareasunitaria">Prueba</div>'
    let tareas = [];
    axios.get('http://localhost:3000/task?estado=porhacer', {
        responseType: 'json'
      })
        .then(function(res) {
          if(res.status==200) {
            tareas = res.data;
            tareas.forEach(element => {
                porhacer.innerHTML += `<div draggable="true" class="tareas-container-unit" id="tareasunitaria"><div>Titulo: ${element.titulo}</div><div> Descripcion: ${element.descripcion}</div></div>`;
            });
          }
         // console.log(res);
        })
        .catch(function(err) {
          mensaje.innerText = 'Error de conexión ' + err;
        })
}

function pintar_tareas_enproceso() {
    let enproceso = document.getElementById("tareas-proceso");
    //enproceso.innerHTML = '<div class="tareas-container-unit" id="tareasunitaria">Prueba</div>'
    let tareas = [];
    axios.get('http://localhost:3000/task?estado=enproceso', {
        responseType: 'json'
      })
        .then(function(res) {
          if(res.status==200) {
            tareas = res.data;
            tareas.forEach(element => {
                enproceso.innerHTML += `<div draggable="true" class="tareas-container-unit" id="tareasunitaria"><div>Titulo: ${element.titulo}</div><div> Descripcion: ${element.descripcion}</div></div>`;
            });
          }
         // console.log(res);
        })
        .catch(function(err) {
          mensaje.innerText = 'Error de conexión ' + err;
        })
}

function pintar_tareas_realizado() {
    let tareas = [];
    let realizado = document.getElementById("tareas-finalizadas");
    //realizado.innerHTML = '<div class="tareas-container-unit" id="tareasunitaria">Prueba</div>'
    axios.get('http://localhost:3000/task?estado=realizado', {
        responseType: 'json'
      })
        .then(function(res) {
          if(res.status==200) {
            tareas = res.data;
            tareas.forEach(element => {
                realizado.innerHTML += `<div draggable="true" class="tareas-container-unit" id="tareasunitaria"><div>Titulo: ${element.titulo}</div><div> Descripcion: ${element.descripcion}</div></div>`;
            });
          }
         // console.log(res);
        })
        .catch(function(err) {
          mensaje.innerText = 'Error de conexión ' + err;
        })
}
