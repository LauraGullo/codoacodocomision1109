package clase3;

public class Clase3 {

	public static void main(String[] args) {
		
		Personal persona=new Personal("Luis", "Nacvas", 48);
		
		persona.setSueldo(250000);
				
		Personal administrativo=new Personal("Laura", "Gullo", 35);
		administrativo.setSueldo(80000);
		
		Personal mantenimiento=new Personal("Juan", "Perez", 24);
		mantenimiento.setSueldo(60000);
		
		System.out.println("El sueldo para administrativo es: "+administrativo.getSueldo());

		Departamento it= new Departamento("Vero", "Furlan", 32, "Desarrollo");
	
		it.setSueldo(500000);
		System.out.println(it.nombre+"esta ganando"+it.getSueldo());
		it.dpto="Gerencia";
		System.out.println(it.MostrarDatos());
	}

}
