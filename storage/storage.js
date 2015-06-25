(function(){

	var inputName = document.getElementById('name');
	var inputEmail = document.getElementById('email');
	var textAreaMessage = document.getElementById('message');

	// var buttonSave = document.getElementById('save');
	var buttonClear = document.getElementById('clear'); 

	// buttonSave.onclick = function(){
	// 	save('contact', getContact());
	// };

	inputName.onchange = changeHanler;
	inputEmail.onchange = changeHanler;
	textAreaMessage.onchange = changeHanler;

	buttonClear.onclick = function(){
		clear();
	};

	function changeHanler(){
		save('contact', getContact());
	}

	function getContact (){
		return {
			name: inputName.value,
			email: inputEmail.value,
			message: textAreaMessage.value
		};
	}

	function save(key, value){
		localStorage[key] = JSON.stringify(value);

	}

	function clear(){
		inputName.value = '';
		inputEmail.value = '';
		textAreaMessage.value = '';

		localStorage.clear();
	}

	function populate(contact){
		inputName.value = contact.name;
		inputEmail.value = contact.email;
		textAreaMessage.value = contact.message;
	}

	function checkLocalStorage(){
		if(localStorage.length){
			populate(JSON.parse(localStorage.contact));
		}
	}

	checkLocalStorage();

})();