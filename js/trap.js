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

function aurora(){    
    obj = life.createElement("div");
    obj.className = "生きとし生ける者";
    mainArea.appendChild(obj);
    SimpleMove(obj,direction.r);        
    hasVisited = localStorage.getItem("key");
    if (!hasVisited) {        
        fetch('https://api.countapi.xyz/hit/example-user/my-site-site-html')
            .then(response => response.json())
            .then(data => console.log(data.value));
            
        localStorage.setItem("key", 'true');
    } else {        
        fetch('https://api.countapi.xyz/get/StultaAfero.gift.site.html')
            .then(response => response.json())
            .then(data => console.log(data.value));
    }
    
}
aurora();

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
