var descriptions = {
    'breathe': 'No Description Yet',
    'countFromTen': 'No Description Yet',
    'getImage': 'No Description Yet'
};

function start() {
    document.getElementById('funFacts').style.opacity = '0';
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

var cc_items = [];
function hideItem(item){
    item.style.display = 'none';
}
function clearCurrentItem(){
    var videos = document.getElementsByTagName('video');
    for(var i = 0; i<videos.length; i++){
        videos[i].pause();
        videos[i].currentTime = 0;
    }
    
    cc_items = document.getElementsByClassName('contentItem');
    for(var i = 0; i<cc_items.length; i++){
        cc_items[i].style.opacity = '0';
        //hideItem(cc_items[i]);
    }
    setTimeout(function(){
        for(var i = 0; i<cc_items.length; i++){
            cc_items[i].style.display = 'none';
        }
    }, 400);
}

function updateDesc(val){
    desc.innerHTML = descriptions[val];
}

function breathe(){
    clearCurrentItem();
    updateDesc('breathe');
    setTimeout(function(){
        document.getElementById('videoFrame').style.display = 'initial';
        document.getElementById('videoFrame').style.opacity = 1;
        setTimeout(function(){
            document.getElementById('video').play();
        }, 400);
    }, 400)
}

function countToTen() {
    clearCurrentItem();
    updateDesc('countFromTen');
    setTimeout(function(){
        document.getElementById('countToTen').style.display = 'inline-block';
        document.getElementById('countToTen').style.opacity = 1;
        setTimeout(function(){//Start the video
            count = 10;
            runAnimation();
        }, 400)
    }, 400);
}

function rannum(){
    return Math.round(Math.random()*900+900);
}

function getImage(){
    updateDesc('getImage');
    clearCurrentItem();
    if(localStorage.getItem('isDavis') === '1'){
        alert('Hey Davis! Stop looking at cat images! :p');
        window.open('https://anxietysteps.github.io/', '_self');
    }
    setTimeout(function(){
        document.getElementById('imageFrame').style.display = 'inline-block';
        document.getElementById('imageFrame').style.opacity = 1;
        setTimeout(function(){
            var rnum = rannum();
            var imageURL = 'https://placekitten.com/'+rnum+'/'+rnum;
            cuteImage.src = imageURL;
        }, 400)
    }, 400);
}

function valign(){
    var videos = document.getElementsByTagName('video');
    for(var i = 0; i<videos.length; i++){
        videos[i].style.marginTop = (frame.offsetHeight / 2 - 240)+'px';
    }
//    video.style.marginTop = (frame.offsetHeight / 2 - 200)+'px';
}

//localStorage.setItem('isDavis', '1'); //Davis has this (so we can troll him)

window.onresize = valign;
window.onload = valign;

/*
//Davis's broken code that doesn't work

      function imageGet() {
            clearCurrentItem();
            setTimeout(function(){
            document.getElementById('image').style.display = 'initial';
            document.getElementById('image').style.opacity = 1;
            setTimeout(function(){
            document.getElementById('the-image').play();
        }, 400);
    }, 400);
    var image = document.querySelector('#the-image');

    var number = Math.round(Math.random() * 10000);

    image.src += number;
}
*/