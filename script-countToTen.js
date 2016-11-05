var count = 10;
var running = false;
function runAnimation(v){
if(!running || v===1){
    running = true;
    ctn.style.transition = 'all 0.9s';
    ctn.innerHTML = count.toString();
    ctn.style.fontSize = '150px';
    ctn.style.color = 'rgba(255,255,255,0)';
    setTimeout(function(){
        ctn.style.transition = 'fontSize 0.01s, color 0.1s';
        ctn.style.fontSize = '100px';
        ctn.style.color = 'rgb(0,0,0)';
        count --;
        ctn.innerHTML = count.toString();
    }, 900);
    if(count > 0){
        setTimeout(function(){
            runAnimation(1);
        }, 1000);
    }
    else{
        count = 10;
        running = false;
    }
}
}