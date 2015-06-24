window.onload = function(){

	var latLng = new google.maps.LatLng(-23.5854927, -46.677063499999996);

	var map = new google.maps.Map(document. querySelector('.map'), {
		zoom: 16,
		center: latLng
	});

	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		title:'Here!!!'
	});

};