import Cl_universidad from "./Cl_universidad.JS";
import Cl_estudiante from "./Cl_estudiante.JS";
//instancia
let est1 = new Cl_estudiante(13457856, "M", 15, 20, 25);
let est2 = new Cl_estudiante(15432551, "F", 10, 10, 10);
let est3 = new Cl_estudiante(32455678, "M", 18, 22, 20);
let est4 = new Cl_estudiante(28678900, "F", 18, 25, 24);

let universidad = new Cl_universidad();

universidad.procesarEstudiante(est1);
universidad.procesarEstudiante(est2);
universidad.procesarEstudiante(est3);
universidad.procesarEstudiante(est4);

let salida = document.getElementById("salida");
salida.innerHTML=`
Resultado:
<br> El estudiante con cedula: ${est1.ced} obtuvo una nota total de: ${est1.calcNotFi()}
<br> El estudiante con cedula: ${est2.ced} obtuvo una nota total de: ${est2.calcNotFi()}
<br> El estudiante con cedula: ${est3.ced} obtuvo una nota total de: ${est3.calcNotFi()}
<br> El estudiante con cedula: ${est4.ced} obtuvo una nota total de: ${est4.calcNotFi()}
<br>
<br> La mayor nota obtenida es de: ${universidad.mayor}
<br> La cantidad de estudiantes femeninas aprobadas es de: ${universidad.contEstFemAp}
<br> El promedio de notas es de: ${universidad.calcProm()}
`