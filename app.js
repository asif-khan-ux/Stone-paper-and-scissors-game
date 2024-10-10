let userScore=0;
let compScore=0;


const choices=document.querySelector(".choice");

const genCompChoice= ()=>{
    const option=["rock","paper","scissors"]; 
    const ranIdx=Math.floor(math.random()*3);
    return option[ranIdx];
}
const playGame= (userChoice)=>{

    console.log("User choice",userChoice)

    const compChoice=genCompChoice();
    console.log("Computer choice",compChoice);
    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"? false:true;
        }

        
    }
}

choices.foreach((choice)=>{
    console.log(choice);
    choice.addEventListern("click",()=>{
        const userChoice=choice.getAttribute("id")
        console.log("Choices was Clicked",userChoice)
      playGame(userChoice);
    })
})