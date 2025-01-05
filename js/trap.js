const life = document;

class directionClass{
    r = "right";
    l = "left";    
    t = "top";
    b = "bottom";
}

const globalDirection = new directionClass;
const mainArea = life.getElementById("mainArea");
var ipData;

onload = aurora();
function aurora(){    
    obj = life.createElement("div");
    obj.className = "生きとし生ける者";
    mainArea.appendChild(obj);
    SimpleMove(obj,globalDirection.r,40,800,10);                
    
    loadVisitorCount();
}
function InitialProcessing(){
    
}
async function loadVisitorCount() {
    // counterApiが利用可能になるまで待つ
    await new Promise(resolve => {
        if (typeof counterApi != "undefined") {
            resolve();
        } else {
            setTimeout(resolve, 100);
        }
    });

    var key = 'key'
    var action = 'upvoteProduct'
    var namespace = 'StultaAfero.gift.site'
    var options = { startNumber: 0, behavior: 'vote' } //see options list
    
    counterApi.read(key, action, namespace, options, function(err, res){
        console.log('Current number of votes for this: '+ res.value);
        //do something ...
    })
    
    //increase a counter
    counterApi.increment(key, action, namespace, options, function(err, res){
        console.log('New upvote cout is now '+ res.value);
        //do something ...
    })
}

async function SimpleMove(element,direction,step,distance,speed){
     
    let count = distance / step;    
    if(direction == globalDirection.l || direction == globalDirection.b )
        step = -step;    
    for (let i = 0; i < count; i++) {
        console.log("move now" + direction);
        await new Promise(resolve => setTimeout(resolve, speed));   
        switch(direction){
            case globalDirection.r:
            case globalDirection.l:                
                element.style.left = (parseInt(getComputedStyle(element).left) || 0) + step + 'px';                
                break;            
            case globalDirection.t:
            case globalDirection.b:                
                element.style.top = (parseInt(getComputedStyle(element).top) || 0) + step + 'px';                
                break;
            default:
                console.log("デフォルトになっちゃたる");
                break;
        }
    }
}
