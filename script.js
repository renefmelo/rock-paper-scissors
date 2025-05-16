let humanScore = 0;
let computerScore = 0;

let random = () => Math.floor(Math.random() * 100);

let humanChoice = '';
let getComputerChoice = () => (random() <= 33) ? `rock` : (random() <= 66) ? `paper` : `scissors`;

const botoes = document.querySelector('.botoes');

const roundResult = document.querySelector('.roundResult');
const roundResultTwo = document.querySelector('.roundResultTwo');
const score = document.querySelector('.score');

const choiceImg = document.querySelector('.choiceImg');
const machineChoiceImg = document.querySelector('.machineChoiceImg');

const humanScoreDiv = document.querySelector('.humanScore');
const computerScoreDiv = document.querySelector('.computerScore');

botoes.addEventListener('click', (event) => {
	let target = event.target;

	switch(target.id) {
		case 'rock':
			humanChoice = 'rock';
			break;
		case 'paper':
			humanChoice = 'paper';
			break;
		case 'scissors':
			humanChoice = 'scissors';
			break;
	}
	playRound(humanChoice, getComputerChoice());
});

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();
	computerChoice = computerChoice.toLowerCase();

	console.log(`pussy`);

	if (winnerMessage.textContent != '') {
		winnerMessage.textContent = '';
		winnerMessage.remove();
	}

	if (humanChoice === `rock`) {
		choiceImg.setAttribute("src", "assets/rockimg.png");
		switch (computerChoice) {
			case `rock`:
				machineChoiceImg.setAttribute("src", "assets/rockimg.png");
				roundResult.textContent = `It's a draw!`;
				roundResultTwo.textContent = `Rock on Rock violence.`;
				humanScoreDiv.textContent = `${humanScore}`; 
				computerScoreDiv.textContent = `${computerScore}`;
				break;
			case `paper`:
				machineChoiceImg.setAttribute("src", "assets/paperimg.png");
				computerScore += 1;
				roundResult.textContent = `You lost!`;
				roundResultTwo.textContent = `The computer's Paper folds around your Rock.`;
				humanScoreDiv.textContent = `${humanScore}`; 
				computerScoreDiv.textContent = `${computerScore}`;
				break;
			case `scissors`:
				machineChoiceImg.setAttribute("src", "assets/scissorsimg.png");
				humanScore += 1;
				roundResult.textContent = `You win!`; 
				roundResultTwo.textContent = `Your Rock breaks the computer's Scissors.`;
				humanScoreDiv.textContent = `${humanScore}`; 
				computerScoreDiv.textContent = `${computerScore}`;
				break;
		}
	} else if (humanChoice === `paper`) {
		choiceImg.setAttribute("src", "assets/paperimg.png");
		switch (computerChoice) {
			case `rock`:
				machineChoiceImg.setAttribute("src", "assets/rockimg.png");
				humanScore += 1;
				roundResult.textContent = `You win` 
				roundResultTwo.textContent = `Your Paper paperizes the computer's Rock.`;
				humanScoreDiv.textContent = `${humanScore}`; 
				computerScoreDiv.textContent = `${computerScore}`;
				break;
			case `paper`:
				machineChoiceImg.setAttribute("src", "assets/paperimg.png");
				roundResult.textContent = `It's a draw!` 
				roundResultTwo.textContent = `The Papers refuse to fight each other.`;
				humanScoreDiv.textContent = `${humanScore}`; 
				computerScoreDiv.textContent = `${computerScore}`;
				break;
			case `scissors`:
				machineChoiceImg.setAttribute("src", "assets/scissorsimg.png");
				computerScore += 1;
				roundResult.textContent = `You lose!` 
				roundResultTwo.textContent = `The computer's Scissors cut through your Paper.`;
				humanScoreDiv.textContent = `${humanScore}`; 
				computerScoreDiv.textContent = `${computerScore}`;
				break;
		}
	} else if (humanChoice === `scissors`) {
		choiceImg.setAttribute("src", "assets/scissorsimg.png");
		switch (computerChoice) {
			case `rock`:
				machineChoiceImg.setAttribute("src", "assets/rockimg.png");
				computerScore += 1;
				roundResult.textContent = `You lose!` 
				roundResultTwo.textContent = `The computer's Rock absolutely destroys your Scissors.`;
				humanScoreDiv.textContent = `${humanScore}`; 
				computerScoreDiv.textContent = `${computerScore}`;
				break;
			case `paper`:
				machineChoiceImg.setAttribute("src", "assets/paperimg.png");
				humanScore += 1;
				roundResult.textContent = `You win!` 
				roundResultTwo.textContent = `Your Scissors rip the machine's Paper apart.`;
				humanScoreDiv.textContent = `${humanScore}`; 
				computerScoreDiv.textContent = `${computerScore}`;
				break;
			case `scissors`:
				machineChoiceImg.setAttribute("src", "assets/scissorsimg.png");
				roundResult.textContent = `It's a draw!`
				roundResultTwo.textContent = `The Scissors start Scissoring.`;
				humanScoreDiv.textContent = `${humanScore}`; 
				computerScoreDiv.textContent = `${computerScore}`;
				break;
		}
	}

	if (humanScore === 5 || computerScore === 5) {
		let winnerText = () => (humanScore > computerScore) ? `You won the game baby!` : (humanScore < computerScore) ? `The machine won the game. The machine always wins.` : `The game ended in a draw! You should go for a rematch!`;

		roundResult.textContent = winnerText();
		roundResultTwo.textContent = ``;
		
		humanScore = 0;
		computerScore = 0;
	}
}

const winnerMessage = document.createElement(`p`);
winnerMessage.classList.add(`winnerMessage`);
const results = document.querySelector(`.results`);
