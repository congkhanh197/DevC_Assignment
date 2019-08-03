import { CHOICES } from "../constants";

export const convertUpperFirst = text => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
export const getResultColor = gamePrompt => {
  if (gamePrompt === "Victory!") return "green";
  if (gamePrompt === "Defeat!") return "red";
  return null;
};

const randomComputerChoice = () =>
  CHOICES[Math.floor(Math.random() * CHOICES.length)];

export const getRoundOutcome = userChoice => {
  const computerChoice = randomComputerChoice().name;
  let result;
  if (userChoice === "rock") {
    result = computerChoice === "scissors" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "paper") {
    result = computerChoice === "rock" ? "Victory!" : "Defeat!";
  }
  if (userChoice === "scissors") {
    result = computerChoice === "paper" ? "Victory!" : "Defeat!";
  }

  if (userChoice === computerChoice) result = "Tie game!";
  return [result, computerChoice];
};

export const getPercent = (value, total) => {
  return (total ? (value * 100) / total : 0).toFixed(1);
};
