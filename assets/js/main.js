/*function agregandoFuncionalidad(){
	var btnDos = document.createElement("input");
	btnDos.type = "button";
	btnDos. value = "Guardar";
	btnDos.setAttribute("onclick", "mostrarInfo()");
	document.getElementById("divObjetivo").appendChild(btnDos);
}

function mostrarInfo(){
	var mostrar = document.getElementById("funciona").value;
	document.getElementById("divObjetivo").innerHTML = mostrar;


}*/
	var nuevoBoton= function(){
		var miBtn = document.createElement("input"); //crea mi input que es de tipo boton y se le crea una clase llamada mi-btn
		miBtn.setAttribute("class", "mi-btn");
		miBtn.setAttribute("type", "button");
		miBtn.setAttribute("value", "Guardar")
			document.getElementById("divObjetivo").appendChild(miBtn); // al input creado de tipo boton se le asigna como padre al div llamado divObjetivo

	};

	var crearSegundoInput = function(){
		var inputNuevo = document.createElement("input");
		var texto = document.createTextNode(" ");
		inputNuevo.setAttribute("class", "mi-segundo-input");
		inputNuevo.setAttribute("type", "text");
		inputNuevo.setAttribute("placeholder", "Añadir una tarjeta...");
		inputNuevo.appendChild(texto);
		document.getElementById("divObjetivo").appendChild(inputNuevo);
	};

	function anadirLista() {
	var aLista = document.getElementById("primer-input");
	aLista.addEventListener("click", crearSegundoInput);
	aLista.addEventListener("click", nuevoBoton);
	}
	
	anadirLista();
	
	var mostrarTarea = function(){
		var valorInput = document.getElementById("mi-btn").value;
		document.getElementById("cajaSegundoInput").appendChild(valorInput);
	};
