(function(){
	navigator.geolocation.getCurrentPosition(success, fail);

	function success(geoPosition){
		showGeoLocation(geoPosition.coords);

	}

	function fail(positionError){
		console.log(positionError.message);

	}

	function showGeoLocation(coords){
		var innerHTML = '';
		for (var property in coords){
			innerHTML += '<h3>' + property.toUpperCase() + ': ' + coords[property] + '</h3>';
		}
	document.body.innerHTML = innerHTML;

	}

})();