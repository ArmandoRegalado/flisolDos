Titanium.include('/db/db.js');
var acerca = Ti.UI.currentWindow;

acerca.backgroundColor='#000';

var logoPantalla = Titanium.UI.createImageView({
image:'../images/FLISOLgeneral.png',
height:'40dp',
width:'230dp',
top:'5dp',

});
acerca.add(logoPantalla);

// cuadro grande contenedor
var cuadroPrincipal= Ti.UI.createScrollView({
borderRadius:7,
backgroundColor:'#000',
borderColor:'#f1701c',
borderWidth:'6',
//top : '50dp',
left:'15dp',
right:'15dp',
down:'25dp',

top : '50dp',
});
acerca.add(cuadroPrincipal)


var acerca1 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca1.png',
top:'200dp',

});
var acerca2 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca2.png',
top:'460dp',

});
var acerca3 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca3.png',
top:'720dp',

});
var acerca4 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca4.png',
top:'980dp',

});
var acerca5 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca5.png',
top:'1240dp',

});
var acerca6 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca6.png',
top:'1500dp',

});

var acerca7 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca7.png',
top:'1760dp',

});
var acerca8 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca8.png',
top:'2020dp',

});
var acerca9 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca9.png',
top:'2280dp',

});
var acerca10 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca10.png',
top:'2540dp',

});
var acerca11 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca11.png',
top:'2800dp',

});
var acerca12 = Ti.UI.createImageView({
width : '250dp',
height : '250dp',
image : '/images/acerca12.png',
top:'3060dp',

});




var marco = Titanium.UI.createView({
borderRadius:5,
backgroundColor:'#FACC2E',
borderColor:'#000',
borderWidth:'3',
//top : '50dp',
left:'15dp',
right:'15dp',
heigth:'200dp',
//down:'25dp',

top : '5dp',
});
cuadroPrincipal.add(marco);

var queEs = Ti.UI.createLabel({
text : 'El Festival Latinoamericano de Instalación de Software Libre (FLISoL) es el evento de difusión de Software Libre más grande en Latinoamérica. Se realiza desde el año 2005 y desde el 2008 se adoptó su realización el 4to Sábado de abril de cada año. En el 2012 será el día 28 de Abril.',
left : '20',
//	height : '180dp',
top : '2dp',
width:'200dp',
color: '#312c2a'
});
marco.add(queEs);

cuadroPrincipal.add(acerca1);
cuadroPrincipal.add(acerca2);
cuadroPrincipal.add(acerca3);
cuadroPrincipal.add(acerca4);
cuadroPrincipal.add(acerca5);
cuadroPrincipal.add(acerca6);
cuadroPrincipal.add(acerca7);
cuadroPrincipal.add(acerca8);
cuadroPrincipal.add(acerca9);
cuadroPrincipal.add(acerca10);
cuadroPrincipal.add(acerca11);
cuadroPrincipal.add(acerca12);


if(Titanium.Platform.osname == 'android') {

	var activity = Ti.Android.currentActivity;

	activity.onCreateOptionsMenu = function(e) {
		var menu = e.menu;

		var acercaAlert = menu.add({
			title : "Acerca"
		});

		acercaAlert.addEventListener("click", function(e) {
			 var alertDialog = Titanium.UI.createAlertDialog({
              title: 'Acerca',
              message: 'Aplicacion creada por @__arch3r, @addieljuarez, Denisse Lopez ',
              buttonNames: ['OK']
            });
            alertDialog.show();
			
		});
	}
}

