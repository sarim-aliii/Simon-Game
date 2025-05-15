let gameSequence = []    
let userSequence = []    

let colors = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(!started){
        started = true;
        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250)
}

function levelUp(){
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3)
    let randomColor = colors[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSequence.push(randomColor);
    gameFlash(randomBtn);
}

function checkSequence(idx){
    if(userSequence[idx] === gameSequence[idx]){
        if(userSequence.length == gameSequence. length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score: <b>${level}.</b> <br> Press any key to start again...`;

        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        }, 1000);

        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSequence.push(userColor);

    checkSequence(userSequence.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener('click', btnPress);
}

function reset(){
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}