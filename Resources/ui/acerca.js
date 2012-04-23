Titanium.include('/db/db.js');
var acerca = Ti.UI.currentWindow;

acerca.backgroundColor='#000';

// var view = Ti.UI.createView({
	// backgroundColor : '#f1701c',
	// width : 320,
	// height : 44,
	// top : 0,
// });
// 
// acerca.add(view);
// 
// 
// 
// var boton = Titanium.UI.createButton({
	// title:'prueba',
	// top:100,
// });
// 
// acerca.add(boton);
// 
// boton.addEventListener('click', function(e){
	// alert( new BaseDeDatos().NumeroDeFilas());
// });
// 
// var historia = Ti.UI.createLabel({
	// text:'Historia',
	// left:'40dp',
	// top:'45dp',
	// width:'300dp',
	// height:'35dp',
	// font : {
		// fontSize : '30dp',
		// //fontWeight : 'bold',
		// fontFamily:'Arial'
	// },
	 // shadowColor:'#aaa',
    // shadowOffset:{x:3,y:3},
    // color:'#4b819c'
//      
// });
// 

// acerca.add(historia);


var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
});
acerca.add(logoPantalla);

// cuadro grande contenedor
var cuadroPrincipal= Ti.UI.createView({
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
acerca.add(cuadroPrincipal)


var acerca1 = Ti.UI.createImageView({
	width : '80dp',
	height : '80dp',
	image : '/images/acerca1.png',
	top:'50dp',
	left:'5%'
});
var acerca2 = Ti.UI.createImageView({
	width : '80dp',
	height : '80dp',
	image : '/images/acerca2.png',
	top:'80dp',
	left:'38%'
});
var acerca3 = Ti.UI.createImageView({
	width : '80dp',
	height : '80dp',
	image : '/images/acerca3.png',
	top:'120dp',
	left:'70%'
});



var marco = Titanium.UI.createView({
	borderRadius:5,
	backgroundColor:'#FACC2E',
	borderColor:'#000',
	borderWidth:'3',
	//top : '50dp',
	left:'15dp',
	right:'15dp',
	//down:'25dp',
	
	top : '200dp',
});
cuadroPrincipal.add(marco);

var queEs = Ti.UI.createLabel({
			text : 'El Festival Latinoamericano de Instalación de Software Libre (FLISoL) es el evento de difusión de Software Libre más grande en Latinoamérica. Se realiza desde el año 2005 y desde el 2008 se adoptó su realización el 4to Sábado de abril de cada año. En el 2012 será el día 28 de Abril.',
			left : '20',
			height : '180dp',
			top : '2dp',
			width:'240dp',
			color: '#312c2a'
		});
marco.add(queEs);
var contactos = Ti.UI.createLabel({
			text : 'created by: @__arch3r, @AddielJuarez',
			left : '20',
			height : '200dp',
			top : '75dp',
			width:'240dp',
			color: '#312c2a',
			font:{size:'7dp'}
		});
marco.add(contactos);

var contactos2 = Ti.UI.createLabel({
			text : 'Design: Denisse López',
			left : '20',
			height : '200dp',
			top : '85dp',
			width:'240dp',
			color: '#312c2a',
			font:{size:'7dp'}
		});
marco.add(contactos2);


cuadroPrincipal.add(acerca1);
cuadroPrincipal.add(acerca2);

cuadroPrincipal.add(acerca3);


