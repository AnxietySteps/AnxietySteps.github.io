function start() {
	document.getElementById('p_readyToStart').style.opacity = '0'
	document.getElementById('btn_start').style.opacity = '0'
	document.getElementById('btn_start').style.pointer = 'default'
	setTimeout(function(){
		document.getElementById('intro_screen').style.display = 'none'
		document.getElementById('frame_div').style.display = 'initial'
		setTimeout(function(){
			document.getElementById('frame_div').style.opacity = '1'
		}, 5)
	}, 500)
}