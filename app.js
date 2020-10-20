function computerSelection() {
    let Selection = Math.floor(Math.random()*3+1);
    console.log(Selection)
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
    if(Selection[0]==='p'|| Selection[0]==='P'){
        return 2;
    }
    if(Selection[0]==='s'|| Selection[0]==='S'){
        return 3;
    }
    else{
        return "ERROR";
    }};

function main(playerSelection, computerSelection){
    document.getElementById("player").innerHTML = playerSelection;
    document.getElementById("computer").innerHTML = computerSelection;
    let p = Transform(playerSelection);
    let c = Transform(computerSelection);
    console.log(p,c)
    let r = "Error";
    if(p==c){
        r = "It is a draw.";
    }
    else if((p==1 && c==3)||(p==2 && c==1)||(p==3 && c==2)){
        r = "The player wins.";
    }  
    else if((p==1 && c==2)||(p==2 && c==3)||(p==3 && c==1)){
        r = "The computer wins.";
    };
    document.getElementById("result").innerHTML = r;
    console.log(r)

};





