getImage = function(icon) {
	var i = Ti.Filesystem.getFile(Ti.Filesystem.applicationDataDirectory,'icons/'+icon);
	if(!i.exists()) {
		// image hasn't been saved, so grab it and save it
		Ti.API.info('Fetching http://www.dimsatec.com/services/flisol/images/'+icon);
		// create an image view to hold our remote icon
		var tmpImage = Ti.UI.createImageView({
			image: 'http://www.dimsatec.com/services/flisol/images/'+icon
		});
		// it takes a few seconds to load the image from the URL, so wait 5 sec. to cache the image
		setTimeout(function() {
			var cachedImage = tmpImage.toImage();
			if(cachedImage.width == 50) {
				// actual images are 35 px wide, any other width indicates a failure to load the icon
				i.write(cachedImage);
				Ti.API.info('Caching '+icon);
			}
		}, 5000);
		// return the URL so that an image is shown the first time the app is run
		return 'http://www.dimsatec.com/services/flisol/images/'+icon;
	} else {
		// image has been cached previously, so return its path
		Ti.API.info('Returning cached image '+ i.name);
		return i.nativePath;
	}
};