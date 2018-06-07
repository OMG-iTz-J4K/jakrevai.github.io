// View an image in a larger view inside of the Modal box provided by Bootstrap
// The Following Javascript is an adapted version from W3 schools tutorial found on Stackoverflow
// https://www.w3schools.com/howto/howto_css_modal_images.asp
// https://stackoverflow.com/questions/41275958/modal-image-galleries-multiple-images

function viewImage(imgid){
	// Get the modal
	var modal = document.getElementById('myModal');

	// get the image and insert it inside the modal - use its "alt" text as a caption
	var img = document.getElementById("img" + imgid);
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");	
	
	// set the style and sources and text
	modal.style.display = "block";
	modalImg.src = "";
	modalImg.src = img.src;
	captionText.innerHTML = img.alt;
}

// closes the modal element, called when clicked on close button in modal
function closeModal(){
	document.getElementById('myModal').style.display = "none";
}