/**
 * Fase4 - Ejercico de LletresRepetides
 * @author Rubén Rodríguez
 * IT Academy
 * Barcelona Activa
 *
 */

package lletreRepetidesJava;

import java.util.ArrayList;
import java.util.List;

public class Fase4 {
	
	private List<Character> listNombre = new ArrayList<Character>();
	private List<Character> listCognom = new ArrayList<Character>();
	
	
	protected Fase4() {
		listNombre.add('R');
		listNombre.add('u');
		listNombre.add('b');
		listNombre.add('e');
		listNombre.add('n');
		listCognom.add('R');
		listCognom.add('o');
		listCognom.add('d');
		listCognom.add('r');
		listCognom.add('i');
		listCognom.add('g');
		listCognom.add('u');
		listCognom.add('e');
		listCognom.add('z');
	}
	
	
	protected void fase4Print () {
		
		listNombre.forEach(letra->{
			System.out.print(letra);
		});
		listCognom.forEach(letra->{
			System.out.print(letra);
		});
		
	}
	
}
	