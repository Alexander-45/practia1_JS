
class Registro{
	constructor(nombre, apellido, pais, email, genero, fecha, paisResidencia, departamento, telefonoCasa, celular, domicilio){
		this.nombre = nombre;
		this.apellido = apellido;
		this.pais = pais;
		this.email = email;
		this.genero = genero;
		this.fecha = fecha;
		this.paisResidencia = paisResidencia;
		this.departamento = departamento;
		this.telefonoCasa = telefonoCasa;
		this.celular = celular;
		this.domicilio = domicilio;
		this.html = "";
	}

	mostrar(info){
		this.html += "<div class='result'>";
        this.html += "<h1>Datos del aspirante</h1>";
        this.html += "<p>Nombre: <span>"+this.nombre+" "+this.apellido+"</span></p>";
        this.html += "<p>Correo: <span>"+this.email+"</span></p>";
        this.html += "<p>Genero: <span>"+this.genero+"</span></p>";
        this.html += "<p>Fecha de Nacimiento: <span>"+this.fecha+"</span></p>";
        this.html += "<p>Pais de Nacimiento: <span>"+this.pais+"</span></p>";
        this.html += "<p>Pais de Residencia: <span>"+this.paisResidencia+"</span></p>";
        this.html += "<p>Departamento de Residencai: <span>"+this.departamento+"</span></p>";
        this.html += "<p>Telefono Casa: <span>"+this.telefonoCasa+"</span></p>";
        this.html += "<p>Telefono Celular: <span>"+this.celular+"</span></p>";
        this.html += "<p>Domicilio: <span>"+this.domicilio+"</span></p>";
        this.html += "</div>";
        info.innerHTML += this.html;
	}
}

function init(){
	var paises = new Array(5)
	var SelectPais = document.getElementById('paisr');;
	var SelectDepa;
	var submit = document.getElementById('submitDatos');
	var content = document.getElementById('content');

	paises["Guatemala"] = ["Jalapa","Jutiapa","Petén","Quetzaltenango","Alta Verapaz", "Baja Verapaz","Chimaltenago",
	"Chiquimula","Guatemala","El Progreso","Escuintla","Huehuetenango","Izabal","Quiché","Retalhuleu",
	"Sacatepequez","San Marcos","Santa Rosa","Sololá","Suchitepequez","Totonicapán","Zacapa"];

	paises["El Salvador"] =  ["La Libertad","San Salvador","Cuscatlán","La Paz","Cabañas",
	"San Vicente","Usulután","San Miguel","Morazán","La Unión",
	"Ahuachapán","Santa Ana","Sonsonate","Chalatenango",];

	paises["Costa Rica"] = ["Cartago", "Heredia", "Puntarenas", "Limón", "San José", "Alajuela", "Guanacaste"];

	paises["Honduras"] = ["Santa Bárbara", "Yoro", "Olancho", "Comayagua", "Tegucigalpa", "Gracias", "Choluteca"];

	paises["Nicaragua"] = ["Granada", "Jinotega", "León", "Madriz", "Managua", "Masaya","Atlántico Norte", "Atlántico Sur", 
	"Boaco", "Carazo", "Chinandega", "Chontales", "Esteli", "Matagalpa", "Nueva Segovia", "Río San Juan", "Rivas"];

	SelectPais.onchange = function(){
		SelectPais = document.getElementById('paisr');
		SelectDepa = document.getElementById('departamento');
		imprimirDepa(SelectPais.value, SelectDepa);
	}

	submit.onclick = function(){
		var nombre = document.getElementById("txtNombre").value;
		var apellido = document.getElementById("txtApellido").value;
		var paisN = document.getElementById("paisn").value;
		var email = document.getElementById("txtMail").value;
		var genero = document.getElementById("genero").value;
		var fecha = document.getElementById("fechaNac").value;
		var paisR = document.getElementById("paisr").value;
		var departamento = document.getElementById("departamento").value;
		var telefonoCasa = document.getElementById("telCasa").value;
		var celular = document.getElementById("telCelular").value;
		var domicilio = document.getElementById("txtDomicilio").value;
		if(isNaN(telefonoCasa)){
			return;
		}
		if(isNaN(celular)){
			return;
		}
		const registro = new Registro(nombre, apellido, paisN, email, genero, fecha, paisR, departamento, telefonoCasa, celular, domicilio);
		registro.mostrar(content);
					
		}		


	function convertir(array, select){
		var i;
		var array_depa = new Array;
		for(i = 0; i < array.length; i++){
			array_depa[i] = "<option>"+ array[i] + "</option>";
		}
		select.innerHTML = array_depa;
	}

	function imprimirDepa(pais, select){
			convertir(paises[pais], select);	
	}
}
window.onload = init;
