mapaL= function(lat,log){

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


var mapview = Titanium.Map.createView({
    mapType: Titanium.Map.STANDARD_TYPE,
    region: {latitude:parseFloat(lat), longitude:parseFloat(log), 
            latitudeDelta:0.01, longitudeDelta:0.01},
    animate:true,
    regionFit:true,
    userLocation:true,

});

MapaView.add(mapview);

ventanaM.add(MapaView);


	return ventanaM;

}