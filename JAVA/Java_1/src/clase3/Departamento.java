package clase3;

public class Departamento extends Personal {
	
	public String dpto;
	
	public Departamento (String nombre, String apellido, int edad, String dpto ) {
		super(nombre, apellido, edad);
		this.dpto=dpto;
	}
	
	public String MostrarDatos() {
		return "Nombre "+nombre+ "Apellido: "+apellido+ "edad: "+edad+
				"sueldo: "this.getSueldo()+ "pertenece al dpto: "+dpto;
	}
}
