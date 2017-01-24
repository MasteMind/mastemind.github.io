function performSubmit(){
	var firstName = document.getElementById('contactFirstName').value;
	var formData = new FormData();
	formData.append('firstName',firstName);
	formData.append('lastName',document.getElementById('contactLastName').value);
	formData.append('email',document.getElementById('contactEmail').value);
	formData.append('subject',document.getElementById('contactSubject').value);
	formData.append('message',document.getElementById('contactMessage').value);

	
	$.ajax({
		url: "",
		data: formData,
		cache: false,
		contentType: false,
		processData: false,
		type: 'POST',
		success: function(data){
			console.log('This data came back: '+data);
		}
	});
}