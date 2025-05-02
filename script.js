let humanScore = 0;
let computerScore = 0;

let random = () => Math.floor(Math.random() * 100);

let getComputerChoice = () => (random() <= 33) ? `rock` : (random() <= 66) ? `paper` : `scissors`;

let getHumanChoice = () => prompt(`rock paper or scissors`);

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase;
	computerChoice = computerChoice.toLowerCase;
}

