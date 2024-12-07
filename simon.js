let gameSeq = [];
let userSeq = [];

let gameStart = false;
let level = 0;

let h2 = document.querySelector('h2'); 

/// starting part////
document.addEventListener('keypress',function(){
if(gameStart === false){
    gameStart = true;
    levelUp();
}
})

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let color = ['pink','blue','gray','gold'];
    let ranColor = color[Math.floor(Math.random() * 3)];
    let ranbtn = document.querySelector(`.${ranColor}`);
    btnflash(ranbtn);
    gameSeq.push(ranColor);
}

// flashing random buttons
function btnflash(btn){
btn.classList.add('flash');
setTimeout(function(){
    btn.classList.remove('flash');
},250);
}

function userInp(){
let btn = this;
btnflash(btn);
let userColor = btn.getAttribute('id');
userSeq.push(userColor);
checkBtn(userSeq.length - 1);
}

let btns = document.querySelectorAll('.btn');
for(btn of btns){
    btn.addEventListener('click',userInp)
}
function checkBtn(index){
    if(gameSeq[index] === userSeq[index]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp,1000) 
        }
    }else{
        let body = document.querySelector('body');
        body.style.backgroundColor = 'red';
        setTimeout(() => {
            body.style.backgroundColor = 'white';
    }, 100);
    h2.innerHTML = `<b>Game Over</b>, Your score ${level}<br>Press any key to start!`;
    reset();
    }
}

function reset(){
    gameStart = false;
    userSeq = [];
    gameSeq= [];
    level = 0;
};