const life = document;

class directionClass{
    r = "right";
    l = "left";    
    t = "top";
    b = "bottom";
}

direction = new directionClass;
const mainArea = life.getElementById("mainArea");
var ipData;

window.onload = setTimeout(aurora,1000);
function aurora(){    
    obj = life.createElement("div");
    obj.className = "生きとし生ける者";
    mainArea.appendChild(obj);
    SimpleMove(obj,direction.r);                
    var key = 'key'
    var action = 'upvoteProduct'
    var namespace = 'StultaAfero.gift.site'
    var options = { startNumber: 0, behavior: 'vote' } //see options list
    
    counterApi.read(key, action, namespace, options, function(err, res){
    alert('Current number of votes for this: '+ res.value);
    //do something ...
    })
    
    //increase a counter
    counterApi.increment(key, action, namespace, options, function(err, res){
    alert('New upvote cout is now '+ res.value);
    //do something ...
    })
    
}

function SimpleMove(element,direction,speed){
    switch(direction){
        case direction.r:

            break;
        case direction.l:

            break;
        case direction.t:

            break;
        case direction.b:

            break;

            
            // //localStorage.setItem("key",ipData);
            // console.log(ipData);
            
    }
}
