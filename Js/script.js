const resultado = document.getElementById('resultado')

function userPlay(userchoice){
    const computerchoice = getcomputerchoice();
    const gameresult = getGameResult(userchoice, computerchoice);
    resultado.innerHTML = `Você escolheu  ${userchoice}<br>Computador escolheu: ${computerchoice}.<br> ${gameresult}`;

}

 function getcomputerchoice(){
    const choices = ['pedra', 'papel', 'tesoura'];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];

 }

 function getGameResult(userchoice, computerchoice){

    if(userchoice === computerchoice){
        return 'Empate';

    }

    if( 
        
        (userchoice === "pedra" && computerchoice === "tesoura") || 
        (userchoice === "papel" && computerchoice === "pedra") || 
        (userchoice === "tesoura" && computerchoice === "papel")        

    )        
        
    {

        return "Você ganhou!";

    }


        return "Você perdeu!";

 }



 