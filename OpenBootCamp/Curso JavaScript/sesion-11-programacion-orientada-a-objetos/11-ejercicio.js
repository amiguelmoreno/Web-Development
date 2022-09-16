class Estudiante {
  constructor(nombre) {
    this.nombre = nombre;
    this.asignaturas = ["Javascript", "HTML", "CSS"];
  }
  obtenDatos() {
    let objetoDatos = {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    };
    console.log(objetoDatos);
  }
}

let new_student = new Estudiante("Miguel");
new_student.obtenDatos();
