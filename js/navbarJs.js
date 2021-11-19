/*
function myFunction1() {
    var y = document.getElementById("myLinks");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}*/


function myFunction(x) {
    var z = document.getElementById('mobilenav');
    var y = document.getElementById("myLinks");
    if (y.style.display === "block") {
        y.style.display = "none";
        z.style.boxShadow = "none";
    } else {
        y.style.display = "block";
        z.style.boxShadow = " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
    }
    x.classList.toggle("change");
}