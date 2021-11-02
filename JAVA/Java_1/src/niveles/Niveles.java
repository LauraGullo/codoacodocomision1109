package niveles;

public class Niveles {
	public String dificultad;
	public String experiencia;
	public String checkpoint;
		
	public Niveles(String dificultad, String experiencia, String checkpoint) {
		this.dificultad=dificultad;
		this.experiencia=experiencia;
		this.checkpoint=checkpoint;
		
	}
	
	public String reiniciar() {
		return "estamos en el nivel: "+this.checkpoint;
	}

	public String getDificultad() {
		return dificultad;
	}

	public void setDificultad(String dificultad) {
		this.dificultad = dificultad;
	}
}
