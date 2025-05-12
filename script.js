let humanScore = 0;
let computerScore = 0;

let random = () => Math.floor(Math.random() * 100);

let humanChoice = '';
let getComputerChoice = () => (random() <= 33) ? `rock` : (random() <= 66) ? `paper` : `scissors`;

const botoes = document.querySelector('.botoes');

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

	if (humanChoice === `rock`) {
		switch (computerChoice) {
			case `rock`:
				console.log(`It's a draw! Rock on Rock violence.`);
				console.log(`Humanity: ${humanScore}, Machines: ${computerScore}`);
				break;
			case `paper`:
				computerScore += 1;
				console.log(`You lost! The computer's Paper folds around your Rock.`);
				console.log(`Humanity: ${humanScore}, Machines: ${computerScore}`);
				break;
			case `scissors`:
				humanScore += 1;
				console.log(`You win! Your Rock breaks the computer's Scissors.`);
				console.log(`Humanity: ${humanScore}, Machines: ${computerScore}`);
				break;
		}
	} else if (humanChoice === `paper`) {
		switch (computerChoice) {
			case `rock`:
				humanScore += 1;
				console.log(`You win! Your Paper paperizes the computer's Rock.`);
				console.log(`Humanity: ${humanScore}, Machines: ${computerScore}`);
				break;
			case `paper`:
				console.log(`It's a draw! The Papers refuse to fight each other.`);
				console.log(`Humanity: ${humanScore}, Machines: ${computerScore}`);
				break;
			case `scissors`:
				computerScore += 1;
				console.log(`You lose! The computer's Scissors cut through your Paper.`);
				console.log(`Humanity: ${humanScore}, Machines: ${computerScore}`);
				break;
		}
	} else if (humanChoice === `scissors`) {
		switch (computerChoice) {
			case `rock`:
				computerScore += 1;
				console.log(`You lose! The computer's Rock absolutely destroys your Scissors.`);
				console.log(`Humanity: ${humanScore}, Machines: ${computerScore}`);
				break;
			case `paper`:
				humanScore += 1;
				console.log(`You win! Your Scissors rip the machine's Paper apart.`);
				console.log(`Humanity: ${humanScore}, Machines: ${computerScore}`);
				break;
			case `scissors`:
				console.log(`It's a draw! The Scissors start Scissoring.`);
				console.log(`Humanity: ${humanScore}, Machines: ${computerScore}`);
				break;
		}
	}

}

/*
function playGame() {

	for (let i = 0; i < 5; i++) {
		playRound(getHumanChoice(), getComputerChoice());
	}

	let winnerMessage = () => (humanScore > computerScore) ? `You're a winner baby!` : (humanScore < computerScore) ? `The machine won the game. The machine always wins.` : `The game ended in a draw! You should go for a rematch!`;

	console.log(winnerMessage());
}

playGame();
*/
