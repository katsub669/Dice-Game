let luck1 = Math.floor(Math.random() * 6) +1;
let image1Sourse = "./images/dice" + luck1.toString() + ".png";

let luck2 = Math.floor(Math.random() * 6) +1;
let image2Sourse = "./images/dice" + luck2.toString() + ".png";

function roll1() {
    return document.getElementsByClassName('img1')[0].setAttribute('src', image1Sourse);
}

function roll2(){
    return document.getElementsByClassName('img2')[0].setAttribute('src', image2Sourse);
}

function dicing() {
    roll1();
    roll2();

    if (luck1 > luck2) {
        document.querySelector('h1').textContent = "Player 1 Won!";
    }

    if (luck1 < luck2) {
        document.querySelector('h1').textContent = "Player 2 Won!";
    }

    if (luck1 === luck2) { 
        document.querySelector('h1').textContent = "It's a Tie!"
    }

};

window.onload = () => {
    dicing();
};