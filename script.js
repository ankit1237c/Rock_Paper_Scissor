let userCount=0;
let compCount=0;
let user=document.querySelector("#user");
let comp=document.querySelector("#comp");
let msg=document.querySelector("#msg");
let chs=document.querySelector("#chs");

const choices=document.querySelectorAll(".choice");

const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userCount++;
        user.innerText=userCount;
        msg.innerText=`You Win! as your ${userChoice} beat computer's ${compChoice}`;
        msg.style.backgroundColor="salmon";
        msg.style.color="black";

    }
    else{
        compCount++;
        msg.innerText=`You lose! as computer's ${compChoice} beat your ${userChoice}`;
        comp.innerText=compCount;
        msg.style.backgroundColor="skyblue";
        msg.style.color="black";
    }
}

const drawGame=(()=>{
    msg.innerText="oops! Its a draw...";
    msg.style.backgroundColor="pink";
    msg.style.color="black";
})

const playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    let userWin=true;
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else 
    {
        if(userChoice==="rock"){
            userWin=compChoice==="scissor" ? true : false;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="rock" ? true : false;
        }
        else if(userChoice==="scissor"){
            userWin=compChoice==="paper" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let userChoice=choice.getAttribute("id")
    playGame(userChoice);
    })
});
