exports.FuncionJson = function() {

	Ti.API.info('Se crea el cliente para hacer la peticion')
	var xhr = Ti.Network.createHTTPClient();

	Ti.API.info('Se dice que tipo de peticion sera y la url');
	xhr.open("GET", "https://www.dimsatec.com/services/flisol/api/sedes/format/json");

	xhr.onload = function() {
		Ti.API.info('Obtiene informacion json del servidor y se parsea')
		try {
			sedes =new Array ;
			json = JSON.parse(this.responseText);
			
			for( i = 0; i < json.length; i++) {

			sedes.push({'title':json[i].nombre});
				
			}

		} catch(E) {
			Ti.API.info(E);
			return 0;

		}

	};

	xhr.send();

}