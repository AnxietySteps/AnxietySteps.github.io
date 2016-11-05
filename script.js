function start(){
	document.getElementById('intro_screen').style.opacity = '0';
	setTimeout(function(){
		document.getElementById('intro_screen').style.display = 'none';
		document.getElementById('frame_div').style.display = 'initial';
	}, 1000)
}