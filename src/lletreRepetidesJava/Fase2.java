/**
 * Fase2 - Ejercico de LletresRepetides
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */

package lletreRepetidesJava;

import java.util.ArrayList;
import java.util.List;

public class Fase2 {
	
	final String CONSONANTS = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ";
	
	private List<Character> listNombre = new ArrayList<Character>();
	
	protected Fase2() {
		listNombre.add('R');
		listNombre.add('u');
		listNombre.add('b');
		listNombre.add('é');
		listNombre.add('n');
		listNombre.add(' ');
		listNombre.add('R');
		listNombre.add('o');
		listNombre.add('4');
		listNombre.add('r');
		listNombre.add('í');
		listNombre.add('g');
		listNombre.add('u');
		listNombre.add('e');
		listNombre.add('@');
	}
	
	
	protected void fase2Print () {
		
		listNombre.forEach(letra->{
			
			 if ("AEIOUaeiouáéíóúÁÉÍÓÚ".indexOf(letra) != -1) 
		    	 System.out.println("Carácter "+letra+" es una VOCAL");
		     
			 else if ("0123456789".indexOf(letra) != -1)
		    	 System.out.println("Carácter "+letra +" ? ->Els noms de persones no contenen números!");
		     
			 else if (CONSONANTS.indexOf(letra) != -1)
		    	 System.out.println("Carácter "+letra +" es una CONSONANT");
		     
			 else if (letra == ' ')
		    	 System.out.println(" ");
		     
			 else
		    	 System.out.println("Carácter "+letra+"  no vàlid en un nom de persona.");			
		});
	}
	
}
	

