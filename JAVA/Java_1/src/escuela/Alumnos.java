package escuela;

public class Alumnos {
	public String nombre, apellido,email, curso;
	private String dni, telefono;
	
	public Alumnos(String nombre, String apellido, String email, String curso) {
		this.apellido=apellido;
		this.curso=curso;
		this.email=email;
		this.nombre=nombre;
	}

	public boolean rendirExamen (String curso, String materia, String tema, float nota) {
		if(nota>=6) {
			return true; 
		}
	}

}
