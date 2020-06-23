/**
 * Fase1 - Ejercico de LletresRepetides en JavaScript
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */

let nombre = [ 'R', 'u', 'b', 'é', 'n', '\xa0','R','o','d','r','í','g','u','e','z']
let impres = false


var respostaFase1 = function(){

	if (impres){}
	else {
		impres = true
		let selectElement = document.getElementById('fase1Sortida')
		nombre.forEach(function(letra) {
		selectElement.innerHTML += letra+" "}); 
	}
}


if (document.addEventListener){
    window.addEventListener('load',(function() {
    	document.getElementById('1').onclick = respostaFase1;
    }),false);
} else {
    window.attachEvent('onload',(function() {
    	document.getElementById('1').onclick = respostaFase1;
    }));    
}



