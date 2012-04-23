Titanium.include('/db/db.js');
Titanium.include('/data/images.js');
var mapaSede = Titanium.UI.currentWindow;
mapaSede.backgroundColor = '#000';
// var view = Ti.UI.createView({
	// backgroundColor : '#f1701c',
	// width : 320,
	// height : 44,
	// top : 0,
// });
// MapaView = Ti.UI.createView({
	// height : 400,
	// width : 320
// });

//imagen para regresar
// var regresar = Ti.UI.createImageView({
	// image:'../images/BARRITA.png',
	// width : '320dp',
	// height : '35dp',
	// top : '0dp',
// });
// mapaSede.add(regresar);
// 
// regresar.addEventListener('click', function(e) {
	// mapaSede.close();
// });




//imagen y logo de flisol
var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
});
mapaSede.add(logoPantalla);


//cuadro grande contenedor
var mapaView= Ti.UI.createView({
	borderRadius:7,
	backgroundColor:'#fff',
	borderColor:'#f1701c',
	borderWidth:'6',
	//top : '50dp',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	
	top : '50dp',
});
mapaSede.add(mapaView);



//var mapa = new BaseDeDatos().InformacionMapa(mapaSede.id);

var datos = Titanium.Map.createAnnotation({

	latitude : parseFloat(mapa[0].latitudP),
	longitude : parseFloat(mapa[0].longitudP),
	title : mapa[0].nombreMapa,
	subtitle : 'Sede FLISOL',
	pincolor : Titanium.Map.ANNOTATION_RED,
	animate : true,
	//leftButton:getImage(mapaSede.logo),
	//leftButton: '../images/appcelerator_small.png',
	myid : 1 // CUSTOM ATTRIBUTE THAT IS PASSED INTO EVENT OBJECTS
});

var mapita = Ti.Map.createView({

	mapType : Titanium.Map.STANDARD_TYPE,
	region : {
		latitude : parseFloat(mapa[0].latitud),
		longitude : parseFloat(mapa[0].longitud),
		latitudeDelta : 0.005,
		longitudeDelta : 0.005,
		
	},
	animate : true,
	regionFit : true,
	userLocation : true,
	annotations : [datos]
});

view.addEventListener('click', function(e){
	mapaSede.close();
});


MapaView.add(mapita);
mapaSede.add(MapaView);
mapaSede.add(view);
