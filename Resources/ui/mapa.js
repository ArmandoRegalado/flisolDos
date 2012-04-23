mapaL= function(lat,log){

	var ventanaM = Titanium.UI.createWindow({
		backgroundColor:'#fff',
		navBarHidden:true
	});


	MapaView = Ti.UI.createView({
	height : Ti.UI.SIZE,
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