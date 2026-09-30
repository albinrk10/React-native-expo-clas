///variables-----------
const curso: string = "Aplicaciones Moviles 1";
//const curso: string = "Aplicaciones Moviles 2";
let semana: number = 2;
 semana = 3;

const hayPractica: boolean = true; 


// console.log("Curso:", curso)
// console.log("Semana", semana)
// console.log("Hoy hay practica?", hayPractica)

//Interfaces-------
interface Alumno {
    nombre: string;
    edad: number;
    direccion:string;
    curso:string;
    modalidad?:string;
}

const alumno:Alumno = {
    nombre: "Andy",
    edad: 22,
    direccion: "Cercado de lima",
    curso: "Desarrollo Moviles",
    modalidad:"Remoto"

}

// console.log("Alumno:", alumno);

//funcion-------------
function saludar(alumno:Alumno):string {
    return `Hola ${alumno.nombre}. Tienes ${alumno.edad} años`;
} 

const saludo =saludar(alumno);
//console.log(saludo)


function indicarResultado(nota:number): string{
    if(nota>= 13){
        return `Nota ${nota}: aprobado`
    }

    return `Nota ${nota}: todavia puedes mejorar`;
}

// console.log(indicarResultado(17));
// console.log(indicarResultado(11));


interface BotonProps {
    titulo: string;
    color? : string;
    desabilitado: boolean;
}

function mostrarBoton(boton: BotonProps): void{
 const color = boton.color ?? "Celeste";
 const estado = boton.desabilitado ? "Bloqueado" : "Disponible"

 console.log(`Boton ${boton.titulo}`);
 console.log(`Color ${color}`);
 console.log(`Estado ${estado}`);
 console.log("----")
}

mostrarBoton({
    titulo:"Iniciar sesion",
    color:"verde",
    desabilitado:false

})

mostrarBoton({
    titulo:"Eliminar cuenta",
    color: "Rojo",
    desabilitado: true
})

mostrarBoton({
    titulo:"Editar Usuario",
    desabilitado:false
})


//listado

const lenguajes: string[] =[
    "Flutter",
    "React native",
    "Angular",
    ".net"
]
console.log("Mi stack");

lenguajes.forEach((lenguajes) => {
    console.log("- "+ lenguajes);
})

//funcion que calcule un promedio
function calcularPromedio(nota1:number, nota2:number): number{
    return (nota1 + nota2) / 2
}

const promedio = calcularPromedio(16,18);
console.log("Promedio es : ", promedio)