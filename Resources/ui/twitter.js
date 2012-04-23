tweet = Ti.UI.currentWindow;
tweet.backgroundColor='#fff';

var rows = [];

var activityIndicator = Ti.UI.createActivityIndicator({
	style : Titanium.UI.iPhone.ActivityIndicatorStyle.BIG
});

activityIndicator.show();

var tableView = Ti.UI.createTableView({
	height : 440,
	width : 300,
	top : 10,
	left : 10,
	backgroundColor:'#000'
});


tweet.add(tableView);

var loaderTwitterSearch = Ti.Network.createHTTPClient({
	timeout : 30000
});

loaderTwitterSearch.open("GET", "http://search.twitter.com/search.json?q=upiicsalibre");

loaderTwitterSearch.onload = function() {
	var result = JSON.parse(this.responseText);
	var tweets = result.results;
	for(var i = 0; i < tweets.length; i++) {
		var row = Ti.UI.createTableViewRow({
			height : 50,
			tweet : tweets[i].text,
			user_name : tweets[i].from_user,
			backgroundColor : '#fff',
			hasChild : false,
		});

		var image = Ti.UI.createImageView({
			image : tweets[i].profile_image_url,
			left : 5,
			top : 5,
			bottom : 5,
			width : 40
		});
		row.add(image);

		var name = Ti.UI.createLabel({
			text : tweets[i].from_user,
			font : {
				fontSize : '14dp',
			},
			left : 50,
			top : 5,
			height : 15
		});
		row.add(name);

		var tweet = Ti.UI.createLabel({
			text : tweets[i].text,
			left : 50,
			height : 30,
			top : 20,
			font : {
				fontSize : '12dp',
			}
		});
		row.add(tweet);

		rows.push(row);
	}
	tableView.setData(rows);
	activityIndicator.hide();
}

loaderTwitterSearch.send();
