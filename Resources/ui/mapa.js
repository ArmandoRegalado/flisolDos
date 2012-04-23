Titanium.include('/db/db.js');

mapaL= function(){

	var mapaDB = new BaseDeDatos().InformacionMapaIndividual(sede.ID);
	

	var ventanaM = Titanium.UI.createWindow({
		backgroundColor:'#000',
		navBarHidden:true
	});

	var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
	//left:'40dp',
});
ventanaM.add(logoPantalla);



	MapaView = Ti.UI.createView({
		top:'50dp',
	width : Ti.UI.SIZE,
		});

var detalle = Titanium.Map.createAnnotation({
latitude:parseFloat(mapaDB[0].latitud), 
longitude:parseFloat(mapaDB[0].longitud),
image:'../images/map-marker.png',
animate:true,
title : mapaDB[0].nombreMapa,
});



var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:parseFloat(mapaDB[0].latitud), longitude:parseFloat(mapaDB[0].longitud), 
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true,
	annotations:[detalle]
});

MapaView.add(mapview);

ventanaM.add(MapaView);


	return ventanaM;

}