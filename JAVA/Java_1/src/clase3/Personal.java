package clase3;

public class Personal {
	public String nombre, apellido, email;
	public int edad;
	private double sueldo;
	
 Personal(String nombre, String apellido, int edad) {
	 this.nombre=nombre;
	 this.apellido=apellido;
	 this.edad=edad;

 }

	
	public double getSueldo() {
		return sueldo;
	}
	public void setSueldo(double sueldo) {
		this.sueldo = sueldo;
	}

	
	
}
