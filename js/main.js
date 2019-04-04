onload = start;

function start(){
    var i = 1;
    function Move(){
        i = (i%5)+1; // 5 is the amount of images in the slider
        document.getElementById('i'+i).checked = true;
    }
    setInterval(Move,5000); // change image every 5 seconds
}