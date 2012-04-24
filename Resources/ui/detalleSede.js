Titanium.include('/db/db.js');
Titanium.include('/data/images.js');
Titanium.include('/ui/pagina.js');
Titanium.include('/ui/mapa.js');
var sede = Ti.UI.currentWindow;
sede.backgroundColor = '#000';
sede.animate = true;


var sedeBD = new BaseDeDatos().InformacionSede(sede.ID);



var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp'
	//left:'40dp',
});
sede.add(logoPantalla);

//cuadro grande contenedor
var footer = Ti.UI.createView({
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




//label nombre sede
var nombre = Ti.UI.createLabel({
	text : sedeBD[0].nombre,
	font : {
		fontSize : '24dp',
		fontWeight : 'bold',
		fontFamily:'Arial'
	},
	 shadowColor:'#aaa',
    shadowOffset:{x:3,y:3},
	height : 'auto',
	width : '240dp',
	top : '10dp',
	left : '90dp',
	textAlign : 'left',
	color : '#c5500b'
});


//logo
imagen = Ti.UI.createImageView({
	height : '60dp',
	width : '60dp',
	top : '10dp',
	left : '15dp',
	image : getImage(sedeBD[0].logo),
	touchEnabled : false,
	borderColor : '#a09691',
	borderWidth : '2'
});


//horario
var horario = Titanium.UI.createLabel({
	text : 'Fecha y hora: ' + sedeBD[0].horario,
	font : {
		fontSize : '14dp',
	},
	height : 'auto',
	left : '80dp',
	top : '50dp',
	color : '#878681',
	touchEnabled : false

});


//barra separadora
var separador = Titanium.UI.createView({
	height:'10dp',
	//width:'200dp',
	backgroundColor:'#f1701c',
	left:'3dp',	
	right:'3dp',
	top:'75dp',
});
//footer.add(separador);


//direccion de sede
var lugar = Ti.UI.createLabel({
	text : 'Lugar:  ' + sedeBD[0].direccion,
	font : {
		fontSize : '14dp',

	},
	height : 'auto',
	width : 'auto',
	top : '90dp',
	left : '15dp',
	right:'15dp',
	textAlign : 'center',
	color : '#fff',
	backgroundColor : '#000'
});


//imagen  hacia web
var haciaPagina = Titanium.UI.createImageView({
	image:'../images/haciaPagina.png',
	height:'55dp',
	width:'200dp',
	top:'50%',
	
});
footer.add(haciaPagina);

haciaPagina.addEventListener('click', (function(){
	if(Titanium.Network.online) {
				var paginas = new pagW(sedeBD[0].url);
	paginas.open({modal:true});

			} else {
				alert('Necesitas Conexion a Internet');
			}

	
}));


var haciaMapa = Titanium.UI.createImageView({
	image:'../images/haciaMapa.png',
	height:'55dp',
	width:'200dp',
	top:'70%',
	
});
footer.add(haciaMapa);

haciaMapa.addEventListener('click', function(){

		
		var mapaPrueba = new mapaL();
		mapaPrueba.open({modal:true});
});


footer.add(lugar);
footer.add(imagen);
footer.add(nombre);
footer.add(horario);

sede.add(footer);
