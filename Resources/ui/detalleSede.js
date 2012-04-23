Titanium.include('/db/db.js');
Titanium.include('/data/images.js');
Titanium.include('/ui/pagina.js');
Titanium.include('ui/mapa.js')
var sede = Ti.UI.currentWindow;
sede.backgroundColor = '#000';
sede.animate = true;

var sedeBD = new BaseDeDatos().InformacionSede(sede.ID);
var pagina1 = sedeBD[0].url;

var mapaPunto = sedeBD[0].latitud;

//imagen para regresar
// var view = Ti.UI.createImageView({
	// image:'../images/BARRITA.png',
	// width : '320dp',
	// height : '35dp',
	// top : '0dp',
	// //left:'2dp',
	// //right:'2dp',
// });


// var labelRegreso = Titanium.UI.createLabel({
	// text:'regresar',
	// color:'#000',
// });
// view.add(labelRegreso);


//imagen y logo de flisol
var logoPantalla = Titanium.UI.createImageView({
	image:'../images/FLISOLgeneral.png',
	height:'40dp',
	width:'230dp',
	top:'5dp',
	//left:'40dp',
});
sede.add(logoPantalla);

//cuadro grande contenedor
var footer = Ti.UI.createView({
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
footer.add(separador);


//direccion de sede
var lugar = Ti.UI.createLabel({
	text : ' ' + sedeBD[0].direccion,
	font : {
		fontSize : '14dp',

	},
	height : 'auto',
	width : 'auto',
	top : '90dp',
	left : '15dp',
	right:'15dp',
	textAlign : 'left',
	color : '#332C28',
	backgroundColor : '#d4d0cd'
});


//imagen  hacia web
var haciaPagina = Titanium.UI.createImageView({
	image:'../images/haciaPagina.png',
	height:'55dp',
	width:'200dp',
	top:'50%',
	
});
footer.add(haciaPagina);
//lert(pagina1);
haciaPagina.addEventListener('click', (function(){
	//alert(pagina1);
	
	// var pagina = Ti.UI.createWindow({
		// //title:e.rowData.id,
		// url:'/ui/pagina.js',
		// idu:pagina1,
		// navBarHidden:true ,
	// });
	// //alert  (sede.title);
	// pagina.open({modal:true})
	
	
	//alert (pagina1);
	var paginas = new pagW(pagina1);
	paginas.open({modal:true});
	//alert (pagina1);
}));


//hacia el mapa
var haciaMapa = Titanium.UI.createImageView({
	image:'../images/haciaMapa.png',
	height:'55dp',
	width:'200dp',
	top:'70%',

	
});
footer.add(haciaMapa);

haciaMapa.addEventListener('click', (function(e){
	// var mapa = Ti.UI.createWindow({
		// //title:e.rowData.id,
		// url:'/ui/mapa.js',
		// //ID:E,
		// navBarHidden:true ,
		// id:sede.ID
//	})//;
	//
	//mapa.open({modal:true})
	
	//var mapaPrueba = new mapaL('19.4311','-99.1367');
//	mapaPrueba.open({modal:true});
alert(mapaPunto)
	
}));


// data = [{
	// leftImage : '/images/casa.png',
	// title : 'Pagina',
	// hasChild : true
// }, {
	// leftImage : '/images/mapa.png',
	// title : ' Mapa',
	// hasChild : true
// }, {
	// leftImage : '/images/contacto.png',
	// title : 'Contacto',
	// hasChild : true
// }];

// var table = Ti.UI.createTableView({
	// editable : true,
	// backgroundColor : '#f0efee',
	// top : '190dp',
	// width : '200p',
	// height : '130dp',
	// left : '60dp',
	// data : data,
	// editable : true,
	// opacity : '.8',
	// //rowBackgroundColor : 'white',
	// //rowHeight : 'auto',
	// barColor : 'black',
	// //style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
// });

//



footer.add(lugar);
footer.add(imagen);
footer.add(nombre);
footer.add(horario);


//el boton view regeresa a la ventana anterior
// view.addEventListener('click', function(e) {
	// sede.close();
// });

// table.addEventListener('click', function(e) {
// 
	// if(e.index == 0) {
		// var pagina = sedeBD[0].pagina;
		// var win = Ti.UI.createWindow({
			// url : '/ui/pagina.js',
			// pagina : pagina,
		// });
		// win.open();
	// } else {
		// if(e.index == 1) {
			// var id = sedeBD[0].idSede;
			// var logo = sedeBD[0].logo;
			// var win = Ti.UI.createWindow({
				// url : '/ui/mapa.js',
				// id : id,
				// logo:logo
			// });
			// win.open();
		// }
// 		
	// }
// });
//sede.add(table);
//sede.add(view);
sede.add(footer);
