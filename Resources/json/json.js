// 
	//  json.js
	//  Flisol Mx
	//  
	//  Created by Antonio Sandoval Garcia on 2012-03-06.
	//  Copyright 2012 Antonio Sandoval Garcia. All rights reserved.
	//

//Se reciben dos parametros, la url que se va a parsear, y la funcion con la que se trabajara	
ActualizarDatos=  function(url,callback) {

	 // Se crea el cliente para hacer el GET
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", url);

	//Aqui se parsea el json cuando se carga
	xhr.onload = function() {

		try {
			//Se crea un objecto donde va a agregar la informacion de la sedes
			// en el array
			actualizacion = new Object();
			actualizacion.sedes = new Array();
			
			//la respuesta del servidor se parsea a formato json
			json = JSON.parse(this.responseText);

			//Se obtienen todos los valores del json para guardarlos en
			//actualizacion.sedes
			for( i = 0; i < json.length; i++) {
				
				//En sede se agregaran los datos del parseo
				var sede = new Object();
				sede.idSede = json[i].idSede;
				sede.nombre = json[i].nombre;
				sede.direccion = json[i].direccion;
				sede.horario = json[i].horario;
				sede.contacto = json[i].contacto;
				sede.url = json[i].url;
				sede.logo = json[i].logo;
				sede.idMapa = json[i].idSede;
				sede.latitud = json[i].latitud;
				sede.longitud = json[i].longitud;
				sede.latitudP = json[i].latitudP;
				sede.longitudP = json[i].longitudP;
				
				actualizacion.sedes[i] = sede;
			}
			
			//Los datos ya parseados se pasan al callback para
			// guardarlos a la base de datos
			callback(actualizacion);

		} catch(E) {
			//alert(E);

		}

	};

	//Al final solo se envia el objeto
	xhr.send();

}