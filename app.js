computerSelection = () => {
    let Selection = Math.floor(Math.random()*3+1);
    if(Selection===1){
        return "Rock";
    }
    if(Selection===2){
        return "Paper";
    }else{
        return "Scissors";
    }};

function Transform(Selection) {
    if(Selection[0]==='r'|| Selection[0]==='R'){
        return 1;
    }
    else if(Selection[0]==='p'|| Selection[0]==='P'){
        return 2;
    }
    else if(Selection[0]==='s'|| Selection[0]==='S'){
        return 3;
    }};

mainplay = () => {
    let player = JSON.stringify(document.getElementById("playerchoice").innerHTML);
    let computerValue = computerSelection();
    let p = Transform(player);
    let c = Transform(computerValue);
    let r = "Error";
    if(p===c){
        r = "It is a draw.";
    }
    else if((p===1 && c===3)||(p===2 && c===1)||(p===3 && c===2)){
        r = "The player wins.";
    }  
    else if((p===1 && c===2)||(p===2 && c===3)||(p===3 && c===1)){
        r = "The computer wins.";
    };
    console.log(p,c,r);
    document.getElementById("player").innerHTML = player;
    document.getElementById("computer").innerHTML = computerValue;
    document.getElementById("result").innerHTML = r;
    
};




