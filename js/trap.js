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
    fetch('https://ipinfo.io?callback')
    .then(res => res.json())    
    .then(json => ipData = json);
    console.log(window.ga && window.ga.getAll()[0].get('pageview'));
    
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
