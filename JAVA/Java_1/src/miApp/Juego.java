package miApp;

public class Juego {
	public int puntos, vidas;
	public String personaje, enemigos, armas;
	
	
	Juego(int puntos, int vidas, String armas, String personajes, String enemigos){
		this.puntos=puntos;
		this.vidas=vidas;
		this.armas=armas;
		this.personaje=personajes;
		this.enemigos=enemigos;
	}
	
	public String mostrarVidas() {
		return "tengo "+this.vidas+" vidas";
		
		
	}
}
