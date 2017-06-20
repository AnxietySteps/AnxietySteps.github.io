/*if(navigator.userAgent.toLowerCase().indexOf('windows') === -1){
    alert('We blocked users not running windows for 15 minutes or so.');
    window.open('http://corgiorgy.com', '_self');
}*/
var colorCode = '';

var descriptions = {
    'CalmingBreath': 'In this activity, you will follow the animation. First breathe in for as long as the animation says, then hold it for the time it says, then release your breath slowly. Repeat this process as many times as you need to.',
    'CalmingSleep': 'In this activity you learn that sleep is very important to be relaxed and to reduce anxiety.',
    'CalmingArchery': 'In this activity you will learn that it is ok to not hit the bullseye every time.',
    'CalmingWords': 'In this activity you learn to accept your anxiety.',
    'CalmingFoodSmile': 'In this activity, you learn that smiling is important for having reduced anxiety.',
    'countFromTen': 'For this activity, you will need to follow what the screen says. As you see the numbers count down, you will read out loud what each number is, counting fown from ten.',
    'getImage': 'This activity is simple, simply sit back and enjoy the cute pictures of kittens.',
    'colors': 'Change the background colors with this.'
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
            img_icon.style.height = (contentFrame.offsetHeight - 100)+'px';
        }, 5);
    }, 495);
}

var cc_items = [];
function hideItem(item){
    item.style.display = 'none';
}

var mainDescHidden = false;

function clearCurrentItem(){

    if(!mainDescHidden){
        mainDescHidden = true;
        contentDesc.style.top = '0px';
        contentDesc.style.height = '68px';
        p_altDesc.style.display = 'none';
        p_desc.style.display = 'initial';
    }
    
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

function transitionToVideo(url){
    clearCurrentItem();
    updateDesc(url);
    setTimeout(function(){
        document.getElementById('videoFrame').style.display = 'initial';
        document.getElementById('videoFrame').style.opacity = 1;
        document.getElementById('contentVideo').src='/videos/'+url+'.mp4';
        setTimeout(function(){
            document.getElementById('contentVideo').play();
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
    setTimeout(function(){
        document.getElementById('imageFrame').style.display = 'inline-block';
        document.getElementById('imageFrame').style.opacity = 1;
        setTimeout(function(){
            var rnum = rannum();
            var whRatio = (contentFrame.offsetHeight+8) / contentFrame.offsetWidth;
            var rh = Math.ceil(rnum*whRatio);
            var imageURL = 'https://placekitten.com/'+rnum+'/'+rh;
            cuteImage.src = imageURL;
        }, 400)
    }, 400);
}

function valign(){
    var videos = document.getElementsByTagName('video');
    for(var i = 0; i<videos.length; i++){
        if(videos[i].className.indexOf('noformat') === -1 && videos[i].className.indexOf('vjs-tech') === -1){
            videos[i].style.marginTop = (frame.offsetHeight / 2 - 240)+'px';
        }
    }
//    video.style.marginTop = (frame.offsetHeight / 2 - 200)+'px';
}

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}



function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function aboutUs(){
    alertify.alert('Credits', "Ryan Z. - Framework, Code, CSS<br>Davis D. - Ideas, Code Drafts, the MVP<br>Rowan S. - Fun Facts and Animator (Animations and Videos)<br>Sam Z. - Icon and Image Design<br>Ian D. - Made Initial Framework, setup accounts<br><br><a target='_blank' href='https://github.com/AnxietySteps/AnxietySteps.github.io/commits/master'>GitHub Page</a>");
}

function mc(a1, b1){
    var a = hexToRgb(a1);
    var b = hexToRgb(b1);
    return rgbToHex(Math.round((a.r+b.r)/2), Math.round((a.g+b.g)/2), Math.round((a.b+b.b)/2))   
}

var bgColor = ['#a2a2f8', '#738efd', '#cbe6ff', '#d3e9ff'];
function updateColor(v, x){
    var val = v;
    bgColor[x] = '#'+val;
    customColors.innerHTML = 'html{background: linear-gradient('+bgColor[0]+', '+bgColor[1]+','+bgColor[0]+') !important}'
    customColors_m.innerHTML = '#menu{background: linear-gradient('+bgColor[2]+', '+bgColor[3]+') !important} #contentDesc{background: linear-gradient('+mc(bgColor[2], bgColor[3])+', '+bgColor[3]+') !important}'
    if(cd.style.color === 'rgb(255, 255, 255)'){
        hd.style.color = 'white';
    }
    else{
        hd.style.color = 'black';
    }
}

function themes(){
    clearCurrentItem();
    updateDesc('colors');
    setTimeout(function(){
        document.getElementById('color_div').style.display = 'inline-block';
        document.getElementById('color_div').style.opacity = 1;
        setTimeout(function(){//Start the video
            count = 10;
            runAnimation();
        }, 400)
    }, 400);
}

window.onresize = valign;
window.onload = function(){
    valign();
};
