/**
 * Fase3 - Ejercico de LletresRepetides
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */

package lletreRepetidesJava;

import java.util.ArrayList;
import java.util.List;
import java.util.HashMap;

public class Fase3 {
	
	final String CONSONANTS = "bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ";
	
	private List<Character> listNombre = new ArrayList<Character>();
	HashMap<Character, Byte> repeticionsLletres = new HashMap<Character, Byte>();
	
	
	protected Fase3() {
		listNombre.add('R');
		listNombre.add('u');
		listNombre.add('b');
		listNombre.add('e');
		listNombre.add('n');
		listNombre.add(' ');
		listNombre.add('R');
		listNombre.add('o');
		listNombre.add('d');
		listNombre.add('r');
		listNombre.add('i');
		listNombre.add('g');
		listNombre.add('u');
		listNombre.add('e');
		listNombre.add('z');
	}
	
	
	protected void fase3Print () {
		
		listNombre.forEach(letra->{
			
			//Verificamos si está en el Hashmap. Si está +1 al value, sino inicialiamos.
			
			if (repeticionsLletres.containsKey(letra)) 
				repeticionsLletres.put(letra, (byte)(repeticionsLletres.get(letra)+1));
			else {
				repeticionsLletres.put(letra, (byte)1);
			}
				
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
		
		//Imprimimos por consola el hashmap completo.
		
		System.out.println("\nRepeticiones de letras del nombre");
				
		repeticionsLletres.forEach((k,v) -> {
		    System.out.println(k + "[" + v + "]");
		});
	}
	
}
	
