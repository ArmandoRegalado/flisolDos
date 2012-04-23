Titanium.include('/db/db.js');
Titanium.include('/data/images.js');


pagW= function(pagina1){

	var ventanaL = Titanium.UI.createWindow({
		backgroundColor:'#000',
		navBarHidden:true
	});

var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
});
ventanaL.add(logoPantalla);

	var webP = Titanium.UI.createWebView({
		 url : pagina1,
		borderRadius:7,
	backgroundColor:'#000',
	borderWidth:'6',
	top : '50dp',
	left:'15dp',
	right:'15dp',
	down:'25dp',
	});


ventanaL.add(webP);

var activityIndicator = Ti.UI.createActivityIndicator({
});

	
	webP.addEventListener('beforeload', function(){
    
    		activityIndicator.show();
    
});
 
webP.addEventListener('load', function(){
    
    		activityIndicator.hide();
});
 
webP.addEventListener('error', function(){
    
    		activityIndicator.hide();
    
});





	return ventanaL;




}