let humanScore = 0;
let computerScore = 0;

let random = () => Math.floor(Math.random() * 100);

let humanChoice = '';
let getComputerChoice = () => (random() <= 33) ? `rock` : (random() <= 66) ? `paper` : `scissors`;

const botoes = document.querySelector('.botoes');

const roundResult = document.querySelector('.roundResult');
const score = document.querySelector('.score');

const choiceImg = document.querySelector('.choiceImg');


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
		switch (computerChoice) {
			case `rock`:
				roundResult.textContent = `It's a draw! Rock on Rock violence.`;
				score.textContent = `Humanity: ${humanScore}, Machines: ${computerScore}`
				break;
			case `paper`:
				computerScore += 1;
				roundResult.textContent = `You lost! The computer's Paper folds around your Rock.`;
				score.textContent = `Humanity: ${humanScore}, Machines: ${computerScore}`;
				break;
			case `scissors`:
				humanScore += 1;
				roundResult.textContent = `You win! Your Rock breaks the computer's Scissors.`;
				score.textContent = `Humanity: ${humanScore}, Machines: ${computerScore}`;
				break;
		}
	} else if (humanChoice === `paper`) {
		choiceImg.setAttribute("src", "assets/paperimg.png");
		switch (computerChoice) {
			case `rock`:
				humanScore += 1;
				roundResult.textContent = `You win! Your Paper paperizes the computer's Rock.`;
				score.textContent = `Humanity: ${humanScore}, Machines: ${computerScore}`;
				break;
			case `paper`:
				roundResult.textContent = `It's a draw! The Papers refuse to fight each other.`;
				score.textContent = `Humanity: ${humanScore}, Machines: ${computerScore}`;
				break;
			case `scissors`:
				computerScore += 1;
				roundResult.textContent = `You lose! The computer's Scissors cut through your Paper.`;
				score.textContent = `Humanity: ${humanScore}, Machines: ${computerScore}`;
				break;
		}
	} else if (humanChoice === `scissors`) {
		switch (computerChoice) {
			case `rock`:
				computerScore += 1;
				roundResult.textContent = `You lose! The computer's Rock absolutely destroys your Scissors.`;
				score.textContent = `Humanity: ${humanScore}, Machines: ${computerScore}`;
				break;
			case `paper`:
				humanScore += 1;
				roundResult.textContent = `You win! Your Scissors rip the machine's Paper apart.`;
				score.textContent = `Humanity: ${humanScore}, Machines: ${computerScore}`;
				break;
			case `scissors`:
				roundResult.textContent = `It's a draw! The Scissors start Scissoring.`;
				score.textContent = `Humanity: ${humanScore}, Machines: ${computerScore}`;
				break;
		}
	}

	if (humanScore === 5 || computerScore === 5) {
		let winnerText = () => (humanScore > computerScore) ? `You're a winner baby!` : (humanScore < computerScore) ? `The machine won the game. The machine always wins.` : `The game ended in a draw! You should go for a rematch!`;

		winnerMessage.textContent = winnerText();
		results.appendChild(winnerMessage);
		
		humanScore = 0;
		computerScore = 0;
	}
}

const winnerMessage = document.createElement(`p`);
winnerMessage.classList.add(`winnerMessage`);
const results = document.querySelector(`.results`);
