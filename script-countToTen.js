var count = 10;
function runAnimation(){
    ctn.style.transition = 'all 0.9s';
    ctn.innerHTML = count.toString();
    ctn.style.fontSize = '150px';
    ctn.style.color = 'rgba(255,255,255,0)';
    setTimeout(function(){
        ctn.style.transition = 'all 0s';
        ctn.style.fontSize = '100px';
        ctn.style.transition = 'all 0.1s';
        ctn.style.color = 'rgb(0,0,0)';
    }, 900);
    if(count > 0){
        setTimeout(function(){
            count --;
            ctn.innerHTML = count.toString();
            runAnimation();
        }, 1000);
    }
}