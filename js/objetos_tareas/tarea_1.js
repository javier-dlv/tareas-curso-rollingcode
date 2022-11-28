
/*
Crea un objeto llamado auto que tenga algunas características como el color,
 marca, modelo y si está encendido o apagado. 
Crea los métodos necesarios para permitir encender y apagar el auto.
*/

let auto = {
    color : "verde",
   marca : "bmw",
   modelo : "X5",
   
encenderAuto : function (){
   confirm("desea encender el auto?")
   console.log("el auto esta encendido")  
},

apagarAuto : function(){
   confirm("desea apagar el auto?")
   console.log("el auto esta apagado")
},    
}
