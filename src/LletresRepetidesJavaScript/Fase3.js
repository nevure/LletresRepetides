/**
 * Fase2 - Ejercico de LletresRepetides en JavaScript
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */
const CONSONANTS3 = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ";
let listNombre3 = ['R','u','b','e','n',' ','R','o','d','r','i','g','u','e','z']
let impresFs3 = false
let lletresRepetides = new Map();

var respostaFase3 = function(){
	
	let selectElement = document.getElementById('fase3Sortida')
	
	//Comprobamos que no se ha impreso por pantalla. En caso afirmativo no hace nada.

	if (impresFs3){}
	else {
		impresFs3 = true

		//Imprimimos en el html la lista verificando antes el tipo de carácter.

		listNombre3.forEach(function(letra) {
			if (lletresRepetides.has(letra)) {
				lletresRepetides.set(letra, parseInt(lletresRepetides.get(letra) )+ 1)
			}
			else 
				lletresRepetides.set(letra,1)

			if ("AEIOUaeiouáéíóúÁÉÍÓÚ".indexOf(letra) != -1) 
					selectElement.innerHTML += "Carácter "+letra+" es una VOCAL <br>"
			else if ("0123456789".indexOf(letra) != -1)
					selectElement.innerHTML += "Carácter "+letra +" ? ->Els noms de persones no contenen números! <br>"
			else if (CONSONANTS3.indexOf(letra) != -1)
					selectElement.innerHTML += "Carácter "+letra +" es una CONSONANT <br>"
			else if (letra == ' ')
					selectElement.innerHTML += "<br> "
			else
					selectElement.innerHTML += "Carácter "+letra+"  no vàlid en un nom de persona. <br>"	
		})

		lletresRepetides.forEach((value, key, self) => {
			   selectElement.innerHTML += key + ":" + value + "<br>"	

				})		
		}
				
}
	
//Nos aseguramos de cargar todo el JS al cargar el document html.

if (document.addEventListener){
    window.addEventListener('load',(function() {
    	document.getElementById('3').onclick = respostaFase3;
    }),false);
} else {
    window.attachEvent('onload',(function() {
    	document.getElementById('3').onclick = respostaFase3;
    }));    
}	