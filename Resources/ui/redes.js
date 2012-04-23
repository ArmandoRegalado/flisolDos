//
//  redes.js
//  Flisol
//
//  Created by addiel on 2012-04-21.
//  Copyright 2012 addiel. All rights reserved.
//

tweet = Ti.UI.currentWindow;
tweet.backgroundColor = '#000';

var logoPantalla = Titanium.UI.createImageView({
	image : '../images/FLISOLgeneral.png',
	height : '40dp',
	width : '230dp',
	top : '5dp',
});
tweet.add(logoPantalla);

var tableView = Ti.UI.createTableView({
	left : '15dp',
	right : '15dp',
	down : '25dp',
	top : '50dp',
	backgroundColor : '#000',
	minRowHeight : '55dp',
});
tweet.add(tableView);

var activityIndicator = Ti.UI.createActivityIndicator({
});



var parsearTwitter = function(id) {

	var rows = [];

	var loaderTwitterSearch = Ti.Network.createHTTPClient();

	loaderTwitterSearch.open("GET", "http://search.twitter.com/search.json?q=flisol");

	loaderTwitterSearch.onload = function() {

		try {

			if(id === 1) {
				tableView.setData();
			};

			var result = JSON.parse(this.responseText);
			var tweets = result.results;
			for(var i = 0; i < tweets.length; i++) {
				var row = Ti.UI.createTableViewRow({
					height : '70dp',
					hasChild : false,
					tweet : tweets[i].text,
					user_name : tweets[i].from_user,
					backgroundColor : '#fff'
				});

				var image = Ti.UI.createImageView({
					image : tweets[i].profile_image_url,
					left : '7dp',
					top : '10dp',
					width : '30dp',
					height : '30dp',
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
					color : '#000',
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
					width : '250dp',
					height : '43dp',
					color : '#000'
				});
				row.add(tweet);

				rows.push(row);
			}
			tableView.setData(rows);
			activityIndicator.hide();

		} catch(E) {
			activityIndicator.hide();
			alert(E);

		}

	}
	loaderTwitterSearch.send();
}
if(Titanium.Network.online) {
	activityIndicator.show();
	tweet.add(tableView);
	parsearTwitter(0);

} else {
	alert('Necesitas Conexion a Internet');
}

if(Titanium.Platform.osname == 'android') {

	var activity = Ti.Android.currentActivity;

	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;

		var actualizar = menu.add({
			title : "Actualizar Lista"
		});

		actualizar.addEventListener("click", function(e) {
			if(Titanium.Network.online) {
				activityIndicator.show();
				parsearTwitter();

			} else {
				alert('Necesitas Conexion a Internet');
			}

			
		});
	}
}

