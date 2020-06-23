/**
 * Fase5 - Ejercico de LletresRepetides en JavaScript
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */
let listNombre5 = ['R','u','b','é','n']
let listCognom5 = ['R','o','d','r','í','g','u','e','z']
let nomComplert5 = []
let impresFs5 = false

var respostaFase5 = function(){

	//Comprobamos que no se ha impreso por pantalla. En caso afirmativo no hace nada.

	if (impresFs5){}
	else {
		impresFs5 = true
		let selectElement = document.getElementById('fase5Sortida')

		nomComplert5 = listNombre5.concat('\xa0').concat(listCognom5)

		//Imprimimos en el html la lista.

		nomComplert5.forEach(function(letra) {
			selectElement.innerHTML += letra+" "})
			
	}
}

//Nos aseguramos de cargar todo el JS al cargar el document html.

if (document.addEventListener){
    window.addEventListener('load',(function() {
    	document.getElementById('5').onclick = respostaFase5
    }),false)
} else {
    window.attachEvent('onload',(function() {
    	document.getElementById('5').onclick = respostaFase5
    }))  
}
