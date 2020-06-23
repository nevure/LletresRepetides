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

	//Comprobamos que no se ha impreso por pantalla. En caso afirmativo no hace nada.
	
	if (impres){}
	else {
		impres = true
		
		let selectElement = document.getElementById('fase1Sortida')
		
		//Imprimimos en el html la lista.
		
		nombre.forEach(function(letra) {
		selectElement.innerHTML += letra+" "}); 
	}
}

// Nos aseguramos de cargar todo el JS al cargar el document html.

if (document.addEventListener){
    window.addEventListener('load',(function() {
    	document.getElementById('1').onclick = respostaFase1;
    }),false);
} else {
    window.attachEvent('onload',(function() {
    	document.getElementById('1').onclick = respostaFase1;
    }));    
}



