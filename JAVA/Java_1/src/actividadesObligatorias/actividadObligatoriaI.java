package actividadesObligatorias;

import java.util.Scanner;

public class actividadObligatoriaI {

	public static void main(String[] args) {
		Scanner scanner =new Scanner (System.in);
		System.out.println("Ingrese su nombre");
		String nombre=scanner.nextLine();
		System.out.println("Ingrese su apellido");
		String apellido=scanner.nextLine();
		System.out.println("Ingrese su edad");
		byte edad=scanner.nextByte();
		System.out.println("Ingrese su hobbie");
		String hobbie=scanner.next();
		System.out.println("Ingrese el editor de texto que utiliza");
		String editorTexto=scanner.next();
		System.out.println("Ingrese el sistema operativo que utiliza");
		String sistemaOperativo=scanner.next();
		
		System.out.println(" Nombre: "+nombre+"\n Apellido: "+apellido +"\n Edad: "+edad+"\n Editor de texto: "+editorTexto+
							"\n Sistema Operativo: "+sistemaOperativo); 
		
	
	}

}
