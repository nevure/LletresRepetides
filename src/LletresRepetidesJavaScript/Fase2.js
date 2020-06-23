/**
 * Fase2 - Ejercico de LletresRepetides en JavaScript
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */
const CONSONANTS = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ";
let listNombre = ['R','u','b','é','n',' ','R','o','d','r','í','5','u','e','@']
let impresFs2 = false

var respostaFase2 = function(){
	
	//Comprobamos que no se ha impreso por pantalla. En caso afirmativo no hace nada.

	if (impresFs2){}
	else {
		impresFs2 = true
		
		let selectElement = document.getElementById('fase2Sortida')
		
		//Imprimimos en el html la lista.

		listNombre.forEach(function(letra) {
			if ("AEIOUaeiouáéíóúÁÉÍÓÚ".indexOf(letra) != -1) 
				selectElement.innerHTML += "Carácter "+letra+" es una VOCAL <br>"
				else if ("0123456789".indexOf(letra) != -1)
					selectElement.innerHTML += "Carácter "+letra +" ? ->Els noms de persones no contenen números! <br>"
				else if (CONSONANTS.indexOf(letra) != -1)
					selectElement.innerHTML += "Carácter "+letra +" es una CONSONANT <br>"
				else if (letra == ' ')
					selectElement.innerHTML += "<br> "
				else
					selectElement.innerHTML += "Carácter "+letra+"  no vàlid en un nom de persona. <br>"	})			
	}
}

//Nos aseguramos de cargar todo el JS al cargar el document html.


if (document.addEventListener){
    window.addEventListener('load',(function() {
    	document.getElementById('2').onclick = respostaFase2;
    }),false);
} else {
    window.attachEvent('onload',(function() {
    	document.getElementById('2').onclick = respostaFase2;
    }));    
}

	