document.getElementById('s').style.display = "block";
document.getElementById('si').style.display = "none";
const btn = document.querySelector("#btn");
var count = 1;

// Event Handlers (Desktops)
btn.addEventListener("mousedown", openMouth);
btn.addEventListener("mouseup", closeMouth);

// Event Handers (Touch Screens)
btn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    openMouth();
})

btn.addEventListener("touchend", function(e) {
    e.preventDefault();
    closeMouth();
})

// The functions which will perform the SIIIIIIIIIIIIIIIU
function openMouth() {
    document.getElementById('s').style.display = "none";
    document.getElementById('si').style.display = "block";
    document.getElementById('count').innerHTML = count++;
    new Audio("/siu.mp3").play();
}

function closeMouth() {
    document.getElementById('s').style.display = "block";
    document.getElementById('si').style.display = "none";
}