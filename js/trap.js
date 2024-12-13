const life = document;

class directionClass{
    r = "right";
    l = "left";    
    t = "top";
    b = "bottom";
}

direction = new directionClass;
const mainArea = life.getElementById("mainArea");

function aurora(){    
    obj = life.createElement("div");
    obj.className = "生きとし生ける者";
    mainArea.appendChild(obj);
    SimpleMove(obj,direction.r);    
    var ipData = fetch('https://ipinfo.io?callback')
    .then(res => res.json())
    .then(json => console.log(json.ip))
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
