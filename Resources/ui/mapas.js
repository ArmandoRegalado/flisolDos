Titanium.include('../db/db.js')

var mapas = Ti.UI.currentWindow;
mapas.backgroundColor = '#000';

// var logoPantalla = Titanium.UI.createImageView({
	// image:'../images/FLISOLgeneral.png',
	// height:'40dp',
	// width:'230dp',
	// top:'5dp',
// });
// mapas.add(logoPantalla);

var mapview = Titanium.Map.createView({
	height:Ti.UI.SIZE,
	width:Ti.UI.SIZE,
	mapType: Titanium.Map.STANDARD_TYPE,
	region:{latitude:19.4311, longitude:-99.1367, latitudeDelta:0.2, longitudeDelta:0.3},
	animate:true,
	regionFit:true,
	userLocation:true
});

parsearMapa= function(){

		var json= new BaseDeDatos().InformacionMapa();

		for( i = 0; i < json.length; i++) {

			var anotacion = Titanium.Map.createAnnotation({
				latitude : parseFloat(json[i].latitud),
				longitude : parseFloat(json[i].longitud),
				title : json[i].nombreMapa,
				pincolor : Titanium.Map.ANNOTATION_GREEN,
				animate : true,
				myid : parseInt(json[i].id_sede)
			});
			mapview.addAnnotation(anotacion);			

		}

	}

parsearMapa();
mapas.add(mapview);