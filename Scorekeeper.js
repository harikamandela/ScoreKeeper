var p1Button=document.querySelector("#p1");
var p1ScoreDisplay= document.querySelector("#p1Display");
var p2Button=document.querySelector("#p2");
var p2ScoreDisplay= document.querySelector("#p2Display");
var resetButton=document.querySelector("#reset");
var numInput=document.querySelector("input[type='number']");
var winningScoreDisplay=document.querySelector("p span")
var p1Score =0;
var p2Score=0;
var gameOver=false;
var winningScore=5;

p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1ScoreDisplay.classList.add("winner");
			p1Button.classList.add("winningPlayer");
			gameOver=true;
		}
		p1ScoreDisplay.textContent=p1Score;
	}
	
});

p2Button.addEventListener("click", function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2ScoreDisplay.classList.add("winner");
			gameOver=true;
		}
		p2ScoreDisplay.textContent=p2Score;
	}
});

function reset(){
	p1Score=0;
	p2Score=0;
	p1ScoreDisplay.textContent=0;
	p2ScoreDisplay.textContent=0;
	p1ScoreDisplay.classList.remove("winner");
	p2ScoreDisplay.classList.remove("winner");
	gameOver=false;
}

resetButton.addEventListener("click", function(){
	reset();
});

numInput.addEventListener("change", function(){ 
	 winningScoreDisplay.textContent = this.value;
	 winningScore=Number(this.value);
	 reset();
})