// Get the modal
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName("close")[0];
const moveBackward = document.getElementById('prevSlide');
const moveForward = document.getElementById('nextSlide');
let slideNumber = 1;
let dotNumber = 2;

// to return the value of showModal to "yes"
// localStorage.showModal = "yes";
// show the value of localStorage in html document for test purposes
// document.getElementById('result').innerHTML = 'localStorage.showModal=' + localStorage.showModal;

// Checkbox handler
let check = document.querySelector("input[name=checkbox]");
check.addEventListener('change', function () {
    if (this.checked) {
        localStorage.showModal = "no";
    }
    else {
        localStorage.showModal = "yes";
    }
});

// if showModal is "yes", display it
if ( localStorage.showModal == "yes" ) {
    setTimeout(function () { modal.style.display = "block";}, 5000);
    document.querySelector("a:nth-of-type("+dotNumber+")").style.color = 'blue';    
}
// show content of the Modal
document.getElementById('slides').innerHTML = slides[slideNumber];

// close the Modal by ckicking on X
span.onclick = function() {
    modal.style.display = "none";
}

// show next by clicking on the right arrow
moveForward.onclick = function() {
    if (slideNumber == 5) { slideNumber -= 6; }
    document.getElementById('slides').innerHTML = slides[++slideNumber];
    document.querySelector("a:nth-of-type("+dotNumber+")").style.color = 'grey';
    if (dotNumber >= 7) { dotNumber -= 6; }
    dotNumber++;
    document.querySelector("a:nth-of-type("+dotNumber+")").style.color = 'blue';
}

// show next by clicking on the left arrow
moveBackward.onclick = function() {
    if (slideNumber <= 0) { slideNumber += 6; }
    document.getElementById('slides').innerHTML = slides[--slideNumber];
    document.querySelector("a:nth-of-type("+dotNumber+")").style.color = 'grey';
    if (dotNumber <= 2) { dotNumber += 6; }
    dotNumber--;
    document.querySelector("a:nth-of-type("+dotNumber+")").style.color = 'blue';
}

// close the Modal by ckicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Keyboard functionality
window.onkeydown = function (event) {
    // Show previous slide and make previous dot blue
    if (event.keyCode == 39 ) {
        if (slideNumber == 5) { slideNumber -= 6; }
        document.getElementById('slides').innerHTML = slides[++slideNumber];
        document.querySelector("a:nth-of-type("+dotNumber+")").style.color = 'grey';
        if (dotNumber >= 7) { dotNumber -= 6; }
        dotNumber++;
        document.querySelector("a:nth-of-type("+dotNumber+")").style.color = 'blue';
    }
    // Show next slide and make next dot blue
    if (event.keyCode == 37 ) {
        if (slideNumber == 0) { slideNumber += 6; }
        document.getElementById('slides').innerHTML = slides[--slideNumber];
        document.querySelector("a:nth-of-type("+dotNumber+")").style.color = 'grey';
        if (dotNumber <= 2) { dotNumber += 6; }
        dotNumber--;
        document.querySelector("a:nth-of-type("+dotNumber+")").style.color = 'blue';
    }
    // Close the Modal by pressing ESC
    if (event.keyCode == 27 ) {
        modal.style.display = "none";
    }
}

