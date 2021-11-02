package clase2_11;

import java.util.Scanner;

public class clase2Java {

	public static void main(String[] args) {
		
		
		Scanner scanner =new Scanner (System.in);
		System.out.println("Ingrese ususario");
		String nombre=scanner.nextLine();
		System.out.println("Ingrese contraseña");
		String pass=scanner.nextLine();
		
		Ingreso ing=new Ingreso();
		ing.setUsuario(nombre);
		ing.setPass(pass);
				
		System.out.println(ing.Validar());
	
		/*
	if(nombre.equals("luis")) {
		System.out.println("Bienvenido "+nombre);
	}else {
		System.out.print("usuario incorrecto");
	}*/
	
	}

}
