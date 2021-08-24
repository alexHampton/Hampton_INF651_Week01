let myImage = document.querySelector('img');

// when image is clicked, alternates between two images.
myImage.onclick = function() { 
    let mySrc = myImage.getAttribute('src'); 
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/firefox2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

// prompts user to enter their user name
// and stores it in localStorage, then puts it in the heading.
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) { // recursively call function until user enters something.
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

// if localStorage 'name' does not exist, then set the user name.
// else, get the name and put it in th eheading
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

// setUsername() is called when button is clicked.
myButton.onclick = function() {
    setUserName();
}