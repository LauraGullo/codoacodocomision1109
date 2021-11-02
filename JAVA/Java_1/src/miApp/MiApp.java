package miApp;

import niveles.Niveles;

public class MiApp {

	public static void main(String[] args) {
		Juego jugador= new Juego(0,3, "ak45", "juan", "netbeans");
		Juego jugador2= new Juego(0,3, "ak45", "pedro", "netbeans");
		
		Niveles niveles=new Niveles("media", "principiante", "dos");
		niveles.setDificultad("principiante");	
		
		
	System.out.println("Soy: "+jugador.personaje);
	System.out.println(jugador.mostrarVidas());
	System.out.println(niveles.dificultad);	
	
	jugador.vidas=0;
	
	if (jugador.vidas==0) {
		System.out.println(niveles.reiniciar());
	}
	
	}
}
