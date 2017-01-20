function performSubmit(){
	var firstName = document.getElementById('contactFirstName').value;
	var formData = new FormData();
	formData.append('firstName',firstName);
	formData.append('lastName',document.getElementById('contactLastName').value);
	formData.append('email',document.getElementById('contactEmail').value);
	formData.append('subject',document.getElementById('contactSubject').value);
	formData.append('message',document.getElementById('contactMessage').value);

	xhr = new XMLHttpRequest();

    xhr.open( 'POST', 'https://ancient-river-93918.herokuapp.com/messageToRamiz', true );
    xhr.onreadystatechange = function ( response ) {
    	alert('Thank you for showing your interest, '+firstName+' :)');
    };
    xhr.send( formData );
}