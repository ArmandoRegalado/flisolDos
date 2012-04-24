// 
//  app.js
//  Flisol
//  
//  Created by @addieljuarez, @__arch3r on 2012-04-20.
//  Copyright 2012 addiel, antonio. All rights reserved.
// 

Titanium.include('/db/db.js');
Titanium.include('/json/json.js');
Titanium.include('/data/images.js');

var sedes = Ti.UI.currentWindow;
sedes.backgroundColor = '#000';

var activityIndicator = Ti.UI.createActivityIndicator();

var search = Titanium.UI.createSearchBar({
	  barColor: '#385292', 
	height : '40dp',
	hintText : 'Busca tu sede',
	top : '0dp',
	showCancel:false,
	
});


var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
});
sedes.add(logoPantalla);


var sedesTV = Titanium.UI.createTableView({

	top : '50dp',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	//width:'25dp',
	minRowHeight : '55dp',
	maxRowHeight : '60dp',
	editable : true,
	backgroundColor:'#000',
	search: search,
    filterAttribute:'filter',
});


parsearBd = function(){
			var tableData = [];

			var json= new BaseDeDatos().Sedes();

			for( i = 0; i < json.length; i++) {

				var caja = Titanium.UI.createTableViewRow({
					id : json[i].idSede,
					hasChild : false,
					filter:json[i].nombre,
					backgroundColor : '#fff',
				});
				var logoSede = Titanium.UI.createImageView({
					height : '47dp',
					width : '47dp',
					top : '3dp',
					left : '7dp',
					image : getImage(json[i].logo),
					touchEnabled : false,
					backgroundColor : '#000',

				});

				var nombreSede = Titanium.UI.createLabel({
					text : json[i].nombre,
					font : {
						fontSize : '18dp',
						fontWeight : 'bold'
					},
					left : '70dp',
					top : '15dp',
					//color:'#000',
					color:'#000',
					width:'280dp',
					
					touchEnabled : false
				});

			caja.add(logoSede);
			caja.add(nombreSede);
			tableData.push(caja);

			}

			sedesTV.setData(tableData);

}


parsearJson = function(num) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.open("GET", "https://www.dimsatec.com/services/flisol/api/sedes/format/json");
	xhr.onload = function() {
		try {
			var tableData = [];
			json = JSON.parse(this.responseText);

			if(num==1){
				new BaseDeDatos().EliminarTablas();
				};
				

			for( i = 0; i < json.length; i++) {

				var caja = Titanium.UI.createTableViewRow({
					id : json[i].id_sede,
					pagina: json[i].url,
					hasChild : false,
					filter:json[i].nombre,
					backgroundColor : '#fff',
				});
				var logoSede = Titanium.UI.createImageView({
					height : '47dp',
					width : '47dp',
					top : '3dp',
					left : '7dp',
					image : getImage(json[i].logo),
					touchEnabled : false,
					backgroundColor : '#fff',

				});

				var nombreSede = Titanium.UI.createLabel({
					text : json[i].nombre,
					font : {
						fontSize : '18dp',
						fontWeight : 'bold'
					},
					left : '70dp',
					top : '15dp',
					color:'#000',
					width:'280dp',
					
					touchEnabled : false
				});
				var direccionSede = Titanium.UI.createLabel({
					text : json[i].direccion.substring(0, 40),
					font : {
						fontSize : '12dp'
					},
					left : '60dp',
					top : '10dp',
					color : '#1f1f1d',
					touchEnabled : false
				});

				var horarioSede = Titanium.UI.createLabel({
					text : json[i].horario,
					font : {
						fontSize : '12dp',
					},
					height : 'auto',
					left : '64dp',
					top : '38dp',
					color : '#878681',
					touchEnabled : false

				});
			caja.add(logoSede);
			caja.add(nombreSede);
			tableData.push(caja);


			}
			//new BaseDeDatos().ActualizarSedes(json);
			new BaseDeDatos().ActualizarSedes(json);
			sedesTV.setData(tableData);
			activityIndicator.hide();

		} catch(E) {
			alert(E);
			activityIndicator.hide();

		}

	};
	xhr.send();
}




if (new BaseDeDatos().NumeroDeFilas()==0){
	if(Titanium.Network.online) {
				parsearJson(0); 
	activityIndicator.show();

			} else {
				alert('Necesitas Conexion a Internet');
			}

	
	
	}
	else{
		parsearBd();
	}

// view.addEventListener('click', function(e){
	// sedesTV.setData();
	// alert('Actualizando');
	// parsearJson(1);
// });


sedesTV.addEventListener('click', function(e){
	
	E=e.rowData.id;
	
	var sede = Ti.UI.createWindow({
		url:'/ui/detalleSede.js',
		ID:E,
		navBarHidden:true ,
		
	});
	sede.open({modal:true});

});

//sedes.add(view);
//sedes.add(search);
sedes.add(sedesTV);



//////////////////////////////////////////////////////////////////////////////////////////////////////
//  menu del botón
if(Titanium.Platform.osname == 'android') {
	//Se hace referencia a la activity
	var activity = Ti.Android.currentActivity;

	//Se crea el menu y se agrega la opcion de 
	//salir, desautentificacion
	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;

		var actualizar = menu.add({
			title : "Actualizar Lista"
		});

		//cuando se selecciona 'salir' se cambia el valor de
		//autenficacion a falso, y se activa el evento desautenticacion
		//para que se abra la ventana de autentificacion
		actualizar.addEventListener("click", function(e) {
			if(Titanium.Network.online) {
				sedesTV.setData();
	        activityIndicator.show();
			parsearJson(1);

			} else {
				alert('Necesitas Conexion a Internet');
			}

			
			
		});
	}
}