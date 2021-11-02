package clase2_11;

public class Ingreso {
	private String usuario, pass;
	private String miUsuario="luis";
	private String miPass="123"; 
	
	public Ingreso (String usuario, String pass) {
		this.usuario=usuario;
		this.pass=pass;
	}

	public String getUsuario() {
		return this.usuario;
	}

	public void setUsuario(String us) {
		this.usuario = us;
	}

	public String getPass() {
		return this.pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}
	
	public boolean Validar () {
		return miUsuario.equals(this.usuario) && miPass.equals(this.pass);
	}
	
}
