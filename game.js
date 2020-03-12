function gameON(){
    //clearAllBox();
    createBox();
    timer();
}
function createBox(){
    var n = document.getElementById("numbox").value;
    for(var i=0; i<n; i++){
        var temp = document.createElement("div");
        var w = parseInt(Math.random()*1000);
        var h = parseInt(Math.random()*1000);
        temp.style.color = "red";
        temp.style.border = "thick solid #0000FF";
        temp.id = "box"+i;
        temp.style.position = "absolute";
        temp.setAttribute("onclick","disappear(this);");
        temp.style.width = "80px";
        temp.style.height = "80px";
        document.body.appendChild(temp);
    }
    getRandomPosition();
    
}
function getRandomPosition() {
    // collect all the divs
    var divs = document.getElementsByTagName("div");
    // get range
    var x = document.getElementById("para").offsetHeight + 10;
    // get window width and height
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    // i stands for "index". you could also call this banana or haircut. it's a variable
    for ( var i=0; i < divs.length; i++ ) {
        
        // shortcut! the current div in the list
        var thisDiv = divs[i];
        
        // get random numbers for each element
        randomTop = getRandomNumber(x + 10, winHeight - 90);
        randomLeft = getRandomNumber(0, winWidth - 90);
        
        // update top and left position
        thisDiv.style.top = randomTop +"px";
        thisDiv.style.left = randomLeft +"px";
        
    }
}
// function that returns a random number between a min and max
function getRandomNumber(min, max) {
        
    return Math.random() * (max - min) + min;
    
}
function clearAllBox(){
    var divs = document.getElementsByTagName("div");
    for(var i=0; i<divs.length; i++){
        divs[i].parentNode.removeChild(divs[i]);
    }
}
function disappear(item){
    item.parentNode.removeChild(item);
}
function timer(){
    var countDownTime = document.getElementById("numbox").value * 5;
    var seconds = 0;
    // Update the count down every 1 second
    var x = setInterval(function() { 
        // Output the result in an element with id="timerDis"
        document.getElementById("timerDis").innerHTML = countDownTime - seconds + "s";
        seconds += 1;
        // If the count down is over, write some text 
        if (countDownTime == seconds) {
            clearInterval(x);
            document.getElementById("timerDis").innerHTML = "Game OVER!";
        }
        if(document.getElementsByTagName("div").length == 0){
            clearInterval(x);
            alert("YOU WON");
            document.getElementById("timerDis").innerHTML = "Such a good job!";
        }
    }, 1000);
}
