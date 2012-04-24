Titanium.include('/json/json.js');

function BaseDeDatos() {
	var db = Titanium.Database.open("Flisol");
	db.execute("CREATE TABLE IF NOT EXISTS SEDES(idSede INTEGER PRIMARY KEY NOT NULL,  nombre TEXT NOT NULL , direccion  TEXT NOT NULL, horario   TEXT NOT NULL, contacto TEXT NOT NULL, url TEXT NULL, logo TEXT NOT NULL)");
	db.execute("CREATE TABLE IF NOT EXISTS MAPAS(idMapa INTEGER PRIMARY KEY NOT NULL, latitud DOUBLE NOT NULL, longitud DOUBLE NOT NULL, nombreMapa TEXT NOT NULL)");
	db.close();
	iconDir = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory, 'icons');
	if(!iconDir.exists()) {
		iconDir.createDirectory();
	}
	iconDir = null;

	this.NumeroDeFilas = function() {
		var db = Ti.Database.open('Flisol');
		var resultSedesDatos = db.execute('select *  from SEDES');
		var numeroFilas = resultSedesDatos.rowCount
		resultSedesDatos.close();
		Ti.API.info('Numero de filas -- DB-- # ' + numeroFilas);
		return numeroFilas;

	}

	this.ActualizarSedes = function(json) {

		var db = Ti.Database.open("Flisol");
		var cuenta = json.length;
		for(var i = 0; i < cuenta; i++) {
			var sede = json[i];
			db.execute('INSERT INTO SEDES(idSede, nombre, direccion,horario, contacto, url, logo) VALUES(?,?,?,?,?,?,?)', sede.id_sede, sede.nombre, sede.direccion, sede.horario, sede.contacto, sede.url, sede.logo);
			db.execute('INSERT INTO MAPAS(idMapa, latitud, longitud, nombreMapa) VALUES(?,?,?,?)', sede.id_sede, sede.latitud, sede.longitud,sede.nombre);
			
		}
		db.close();

	}

	this.SedesDatosPrincipal = function(callback) {
		var db = Ti.Database.open('Flisol');
		var resultSedesDatos = db.execute('select idSede, nombre,horario, logo, direccion  from SEDES');
		Ti.API.info('Seleccionando de registros de SEDES --DB--');
		actualiz = new Object();
		actualiz.sedes = new Array();
		var l = 0;
		while(resultSedesDatos.isValidRow()) {
			var row = new Object();
			row.idSede = resultSedesDatos.fieldByName("idSede");
			row.nombre = resultSedesDatos.fieldByName("nombre");
			row.horario = resultSedesDatos.fieldByName("horario");
			row.direccion = resultSedesDatos.fieldByName("direccion");
			row.logo = resultSedesDatos.fieldByName("logo");
			actualiz.sedes[l] = row;
			l++;
			resultSedesDatos.next();
			Ti.API.info('Parseando datos DB para pasar a Table --DB-- #' + l);
		}
		resultSedesDatos.close();
		callback(actualiz);

	}

	this.EliminarTablas = function() {
		var db = Ti.Database.open('Flisol');
		db.execute('DELETE FROM SEDES');
		db.execute('DELETE FROM MAPAS');
		Ti.API.info('Tablas Eliminadas -- BD');
		db.close();
	}

	this.Sedes = function() {
		var sedes = [];
		var db = Ti.Database.open('Flisol');
		var resultSedesDatos = db.execute('select idSede, nombre,horario,direccion, logo from SEDES');

		var l = 0;
		while(resultSedesDatos.isValidRow()) {
			var row = new Object();
			row.idSede = resultSedesDatos.fieldByName("idSede");
			row.nombre = resultSedesDatos.fieldByName("nombre");
			row.horario = resultSedesDatos.fieldByName("horario");
			row.direccion = resultSedesDatos.fieldByName("direccion");
			row.logo = resultSedesDatos.fieldByName("logo");
			sedes.push(row);
			l++;
			resultSedesDatos.next();
		}
		resultSedesDatos.close();
		return sedes;
	}

	this.InformacionSede = function(id) {
		var db = Ti.Database.open('Flisol');
		var resultSedesDatos = db.execute('select  idSede,nombre,horario,direccion, logo, contacto, url from SEDES where idSede =' + id + ' ');
		var sede = [];
		while(resultSedesDatos.isValidRow()) {
			var row = new Object();
			row.idSede = resultSedesDatos.fieldByName("idSede");
			row.nombre = resultSedesDatos.fieldByName("nombre");
			row.horario = resultSedesDatos.fieldByName("horario");
			row.direccion = resultSedesDatos.fieldByName("direccion");
			row.logo = resultSedesDatos.fieldByName("logo");
			row.contacto = resultSedesDatos.fieldByName("contacto");
			row.url = resultSedesDatos.fieldByName("url");
			sede.push(row);
			resultSedesDatos.next();
		}
		resultSedesDatos.close();
		return sede;
	}
	this.InformacionMapa = function(){
	var db = Ti.Database.open('Flisol');
	var resultSedesDatos = db.execute('select latitud, longitud, nombreMapa from MAPAS');
	var mapa = [];
	var l = 0;
	while(resultSedesDatos.isValidRow()) {
	var row = new Object();
	row.latitud = resultSedesDatos.fieldByName("latitud");
	row.longitud = resultSedesDatos.fieldByName("longitud");
	row.nombreMapa = resultSedesDatos.fieldByName("nombreMapa");
	mapa.push(row);
	l++;
	Ti.API.info(l);
	resultSedesDatos.next();
	}
	resultSedesDatos.close();
	return mapa;

}

this.InformacionMapaIndividual = function(id){
		var db = Ti.Database.open('Flisol');
		var resultSedesDatos = db.execute('select  latitud, longitud, nombreMapa from MAPAS where idMapa =' + id + ' ');
		var mapa = [];
		var l = 0;
		while(resultSedesDatos.isValidRow()) {
			var row = new Object();
			row.latitud = resultSedesDatos.fieldByName("latitud");
			row.longitud = resultSedesDatos.fieldByName("longitud");
			row.nombreMapa = resultSedesDatos.fieldByName("nombreMapa");
			mapa.push(row);
			l++;
			Ti.API.info(l);
			resultSedesDatos.next();
		}
		resultSedesDatos.close();
		return mapa;

	}



}