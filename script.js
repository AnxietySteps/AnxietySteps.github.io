function start() {
    document.getElementById('p_readyToStart').style.opacity = '0';
    document.getElementById('btn_start').style.opacity = '0';
    document.getElementById('btn_start').style.pointer = 'default';
    setTimeout(function () {
        document.getElementById('intro_screen').style.display = 'none';
        document.getElementById('frame_div').style.display = 'initial';
        setTimeout(function () {
            document.getElementById('frame_div').style.opacity = '1';
            valign();
        }, 5);
    }, 495);
}

function breathe() {
    setTimeout(function(){//Start the video
        document.getElementById('video').play();
    }, 1000)
}

function valign(){
    video.style.marginTop = (frame.offsetHeight / 2 - 200)+'px';
}

window.onresize = valign;
window.onload = valign;
