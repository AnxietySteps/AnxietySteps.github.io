function start(){
	document.getElementById('btn_start').style.opacity = '0';
	document.getElementById('btn_start').style.pointer = 'default';
	setTimeout(function(){
		document.getElementById('intro_screen').style.display = 'none';
		document.getElementById('frame_div').style.display = 'initial';
	}, 1000)
}