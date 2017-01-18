function sendMessage(){
	var formData = new FormData();
	formData.append('firstName',document.getELementById('contactFirstName').value);
	formData.append('lastName',document.getELementById('contactLastName').value);
	formData.append('email',document.getELementById('contactEmail').value);
	formData.append('subject',document.getELementById('contactSubject').value);
	formData.append('message',document.getELementById('contactMessage').value);

	xhr = new XMLHttpRequest();

    xhr.open( 'POST', 'https://ancient-river-93918.herokuapp.com/messageToRamiz', true );
    xhr.onreadystatechange = function ( response ) {
    	alert('Thank you for showing your interest, '+firstName+' :)');
    };
    xhr.send( formData );
}