
var dia
var mes
var nombre
nombre= prompt("Ingresa tu nombre: ");
alert("Hola "+nombre+", adivinaremos tu signo zodiacal :D");
mes= prompt("Ingresa tu mes de nacimiento ");
dia= prompt("Ingresa tu día de nacimiento ");

var zodiaco
var zodiaco;

while(dia > 31 || mes > 12){

  alert ("Fecha incorrectas")

}
if (mes == 3 && dia >= 21 || mes == 4 && dia <= 20 ){
  zodiaco = alert("Su signo zodiacal es Aries ")
  }
if (mes == 4 && dia >= 21 || mes == 5 && dia <= 20 ){
  zodiaco = alert("Su signo zodiacal es Tauro ")
  }
if (mes == 5 && dia >= 21 || mes == 6 && dia <= 20 ){
  zodiaco = alert("Su signo zodiacal es Géminis ")
  }
if (mes == 6 && dia >= 21 || mes == 7 && dia <= 22 ){
  zodiaco = alert("Su signo zodiacal es Cáncer ")
  }
if (mes == 7 && dia >= 23 || mes == 8 && dia <= 23 ){
  zodiaco = alert("Su signo zodiacal es Leo ")
  }
if (mes == 8 && dia >= 24 || mes == 9 && dia <= 22 ){
  zodiaco = alert("Su signo zodiacal es Virgo ")
  }
if (mes == 9 && dia >= 23 || mes == 10 && dia <= 23 ){
  zodiaco = alert("Su signo zodiacal es Libra ")
  }
if (mes == 10 && dia >= 24 || mes == 11 && dia <= 22 ){
  zodiaco = alert("Su signo zodiacal es Escorpio ")
  }
if (mes == 11 && dia >= 23 || mes == 12 && dia <= 21 ){
  zodiaco = alert("Su signo zodiacal es Sagitario ")
  }
if (mes == 12 && dia >= 22 || mes == 1 && dia <= 20 ){
  zodiaco = alert("Su signo zodiacal es Capricornio ")
  }
if (mes == 1 && dia >= 21 || mes == 2 && dia <= 19 ){
  zodiaco = alert("Su signo zodiacal es Acuario ")
  }
if (mes == 2 && dia >= 20 || mes == 3 && dia <= 20 ){
  zodiaco = alert("Su signo zodiacal es Piscis ")
  }
  alert("Gracias por participar")