class tareas  {

 idactual = 1;
 registro = {id:0,titulo:"",descripcion:"",estado:""};

 actividades = [{id:1,titulo:"Tarea 1",descripcion:"Tarea de Ejemplo",estado:"porhacer"}];

 listartarea(estado) {
    let encontrados = [];
    this.actividades.forEach(element => {
        if (element.estado == estado) {
            encontrados.push(element);
            console.log(element);
            console.log(estado);
        }
        
    });
    return encontrados;
}

 agregartarea(registro) {
    registro.id = this.idactual + 1;
    this.actividades.push(registro)
}

 eliminartarea(registro) {

}

}

module.exports = tareas