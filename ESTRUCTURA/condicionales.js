//pide al usuario un numero y determina si es par o impar y si es positivo o negativo

//1
/*let numero = Number (prompt('Digite un numero'))
//forma compuesta 
if (numero > 0 && (numero % 2) == 0){
    document.write('El numero '+numero+' es positivo par')
}else if( numero > 0 && (numero % 2) != 0){
    document.write('El numero '+numero+' es positivo impar')
}else if( numero < 0 && (numero % 2) == 0){
    document.write('El numero '+numero+' es negativo par')
}else if( numero < 0 && (numero % 2) != 0){
    document.write('El numero '+numero+' es negativo impar')
}else{
    document.write('El numero '+numero+' es neutro')
}*/
//forma anidada
/*if (numero > 0){
    if((numero % 2) == 0){
        document.write('El numero '+numero+' es positivo par');
    }else{
        document.write('El numero '+numero+' es positivo impar')
    }
}else if(numero < 0){
    if((numero % 2) == 0){
        document.write('El numero '+numero+' es negativo par');
    }else{
        document.write('El numero '+numero+' es negativo impar')
    }
}else{
    document.write('El numero '+numero+' es neutro');
}*/

//3
/*let dia = Number(prompt('Digite un numero del 1 al 7'));
switch(dia){
    case 1: document.write('1 : lunes');
    break;
    case 2: document.write('2 : martes');
    break;
    case 3: document.write('3 : miercoles');
    break;
    case 4: document.write('4 : jueves');
    break;
    case 5: document.write('5 : viernes');
    break;
    case 6:
    case 7: document.write('Fin de semana');
    break;
    default: document.write('El numero no corresponde a un dia de la semana');
    break;
}*/


/*let fruta = prompt('Digite una fruta');
switch(fruta.toLocaleLowerCase()){
    case 'banano':
    case 'mango':
    case 'sandia':
    case 'fresa': document.write(fruta +' es dulce');
    break;
    case 'limon':
    case 'naranja':
    case 'mora':
    case 'maracuya': document.write(fruta +' es acida');
    break;
    case 'mani':
    case 'coco':
    case 'avellana':
    case 'almendra': document.write(fruta +' es seca');
    default: document.write(fruta +' no tiene categoria');
    break;
}*/

let edad = 18;
/*if(edad < 17){
    alert('Acceso denegado');
}else{
    alert('Acesso permitido');
}*/
edad = (edad <= 17) ? 'Acceso denegado' : 'Acceso permitido'

alert(edad);














