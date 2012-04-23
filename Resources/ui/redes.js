// 
//  redes.js
//  Flisol
//  
//  Created by addiel on 2012-04-21.
//  Copyright 2012 addiel. All rights reserved.
// 


tweet = Ti.UI.currentWindow;
tweet.backgroundColor='#000';


//imagen y logo de flisol
var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
	//left:'40dp',
});
tweet.add(logoPantalla);

// cuadro grande contenedor
var cuadroPrincipal= Ti.UI.createView({
	backgroundColor:'#000',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	top : '50dp',
});
tweet.add(cuadroPrincipal)

////////////////////////////////////////////////////////////////////////////////////////////////


var rows = [];

var activityIndicator = Ti.UI.createActivityIndicator({
	style : Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
});

activityIndicator.show();

var tableView = Ti.UI.createTableView({
	//height : 440,
	//width : 300,
	//top : 10,
	//left : 10,
	left:'15dp',
	right:'15dp',
	down:'25dp',
	top : '50dp',
	backgroundColor:'#000',
	minRowHeight : '55dp',
});

// tableView.addEventListener("click", function(el) {
// 
// var detalle=	Ti.UI.createWindow({
		// title : "Detalhe",
		// url : "/ui/detalleTweet.js",
		// tweet : el.rowData.tweet,
		// user_name : el.rowData.user_name,
		// backgroundColor : "#000",
		// _parent : Titanium.UI.currentWindow,
		// navGroup : tweet.navGroup,
		// rootWindow : tweet.rootWindow,
	// });
	// tweet.navGroup.open(detalle);
// });

tweet.add(tableView);

var loaderTwitterSearch = Ti.Network.createHTTPClient({
	timeout : 30000
});

loaderTwitterSearch.open("GET", "http://search.twitter.com/search.json?q=flisol");

loaderTwitterSearch.onload = function() {
	var result = JSON.parse(this.responseText);
	var tweets = result.results;
	for(var i = 0; i < tweets.length; i++) {
		var row = Ti.UI.createTableViewRow({
			height : '70dp',
			hasChild : false,
			tweet : tweets[i].text,
			user_name : tweets[i].from_user,
			backgroundColor:'#fff'
		});

		var image = Ti.UI.createImageView({
			image : tweets[i].profile_image_url,
			left : '7dp',
			top : '10dp',
			width : '30dp',
			height:'30dp',
		});
		row.add(image);

		var name = Ti.UI.createLabel({
			text : tweets[i].from_user,
			font : {
				fontSize : '10dp',
				fontWeight : 'bold'
			},
			left : '40dp',
			top : '5dp',
			height : '15dp',
			color:'#000',
		});
		row.add(name);

		var tweet = Ti.UI.createLabel({
			text : tweets[i].text,
			left : '40dp',
			font : {
				fontSize : '12dp'
			},
			height : '20dp',
			top : '18dp',
			width:'250dp',
			height : '43dp',
			color:'#000'
		});
		row.add(tweet);

		rows.push(row);
	}
	tableView.setData(rows);
	activityIndicator.hide();
}

loaderTwitterSearch.send();



/////////////////////////////////////////////////////////////////////////////////////////////////////
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
			//sedesTV.setData();
			//parsearJson(1);
			tweet.close();
			tweet.open();
		});
	}
}


