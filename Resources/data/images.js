getImage = function(icon) {
	var i = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'icons/'+icon);
	if(!i.exists()) {
		var tmpImage = Ti.UI.createImageView({
			//width:50,
			//height:50,
			image: 'http://www.dimsatec.com/services/flisol/images/'+icon
			
		});
		setTimeout(function() {
			var cachedImage = tmpImage.toImage();
			if(cachedImage.width == 50) {
				i.write(cachedImage);
			}
		}, 5000);
		return 'http://www.dimsatec.com/services/flisol/images/'+icon;
	} else {
		// image has been cached previously, so return its path
		Ti.API.info('Returning cached image '+ i.name);
		return i.nativePath;
	}
};