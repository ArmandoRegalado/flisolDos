// 
//  main.js
//  Flisol
//  
//  Created by @addieljuarez, @__arch3r on 2012-04-22.
//  Copyright 2012 addiel, antonio. All rights reserved.
// 


exports.Main = function() {

	Ti.UI.setBackgroundColor('#fff');

	var tabGroup = Titanium.UI.createTabGroup({
		
	});

	var sedesW = Titanium.UI.createWindow({
		title : 'Sedes',
		url:'/ui/sedes.js',
		navBarHidden:true ,
		//backgroundColor:'#000',
		//backgroundImage:'../images/general.jpg'
	});

	var mapasW = Ti.UI.createWindow({
		title : 'Mapa',
		url:'/ui/mapas.js',
		navBarHidden:true,
	//	orientationModes:[Titanium.UI.LANDSCAPE_LEFT]
	});

	var redesW = Ti.UI.createWindow({
		title:'Redes',
		url:'/ui/redes.js',
		navBarHidden:true ,
		//orientationModes:[Titanium.LANDSCAPE_LEFT]
	});
	
	var acercaW = Ti.UI.createWindow({
		title : 'Acerca',
		url:'/ui/acerca.js',
		navBarHidden:true  ,
		//orientationModes:[Titanium.LANDSCAPE_LEFT]
	});

	var sedesT = Titanium.UI.createTab({
		//title : 'Sedes',
		icon:'/images/SEDES.png',
		top:'0dp',
		left:'0dp',
		right:'0dp',
		window : sedesW,
		
		//orientationModes:[Titanium.UI.LANDSCAPE_LEFT]
	});

	var mapasT = Ti.UI.createTab({
		//title : 'MAPA',
		icon:'/images/MAPA.png',
		window : mapasW
	});

	var redesT = Ti.UI.createTab({
		//title : 'Redes',
		icon:'/images/REDES.png',
		window : redesW
	});

	var acercaT = Ti.UI.createTab({
		icon:'/images/ACERCA.png',
		//title : 'Acerca de',
		
		window : acercaW
	})
	tabGroup.addTab(sedesT);
	tabGroup.addTab(mapasT);
	tabGroup.addTab(redesT);
	tabGroup.addTab(acercaT);

	return tabGroup;

}