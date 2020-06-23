/**
 * Fase4 - Ejercico de LletresRepetides en JavaScript
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */
let listNombre4 = ['R','u','b','é','n']
let listCognom4 = ['R','o','d','r','í','g','u','e','z']
let impresFs4 = false


  
var respostaFase4 = function(){
	

	if (impresFs4){}
	else {
		impresFs4 = true
		let selectElement = document.getElementById('fase4Sortida')
		listNombre4.forEach(function(letra) {
			selectElement.innerHTML += letra+" "})
		
		listCognom4.forEach(function(letra) {
			selectElement.innerHTML += letra+" "}) 
		
	}
}

if (document.addEventListener){
    window.addEventListener('load',(function() {
    	document.getElementById('4').onclick = respostaFase4
    }),false)
} else {
    window.attachEvent('onload',(function() {
    	document.getElementById('4').onclick = respostaFase4
    }))  
}

