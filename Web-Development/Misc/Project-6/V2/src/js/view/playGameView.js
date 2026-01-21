import { MOVES } from "../config.js";

class PlayGame {
  playedGames = 0;
  playerScore = 0;
  computerScore = 0;

  playGame(userPick, computerPick) {
    /// Logs for development
    console.log(`User pick: ${userPick}, Computer pick: ${computerPick}`);
    console.log(
      `User score:${this.playerScore},Computer:score ${this.computerScore}`,
    );
    console.log(`Played games: ${this.playedGames}`);
    ///

    // Handle move -> Rock
    if (
      userPick.toLowerCase() === MOVES[0] &&
      computerPick.toLowerCase() === MOVES[0]
    ) {
      this.playerScore++;
      this.computerScore++;
      this.playedGames++;
      console.log(1);
    }

    if (
      userPick.toLowerCase() === MOVES[0] &&
      computerPick.toLowerCase() === MOVES[1]
    ) {
      this.computerScore++;
      this.playedGames++;
      console.log(2);
    }

    if (
      userPick.toLowerCase() === MOVES[0] &&
      computerPick.toLowerCase() === MOVES[2]
    ) {
      this.playerScore++;
      this.playedGames++;
      console.log(3);
    }

    // Handle move -> Paper
    /*
    if (
      userPick.toLowerCase() === "paper" &&
      computerPick.toLowerCase() === "paper"
    ) {
      this.playerScore++;
      this.computerScore++;
      this.playedGames++;
    }

    if (
      userPick.toLowerCase() === "paper" &&
      computerPick.toLowerCase() === "scissor"
    ) {
      this.computerScore++;
      this.playedGames++;
    }

    if (
      userPick.toLowerCase() === "paper" &&
      computerPick.toLowerCase() === "rock"
    ) {
      this.playerScore++;
      this.playedGames++;
    }

    // Handle move -> Scissor

    if (
      userPick.toLowerCase() === "scissor" &&
      computerPick.toLowerCase() === "scissor"
    ) {
      this.playerScore++;
      this.computerScore++;
      this.playedGames++;
    }

    if (
      userPick.toLowerCase() === "paper" &&
      computerPick.toLowerCase() === "scissor"
    ) {
      this.computerScore++;
      this.playedGames++;
    }

    if (
      userPick.toLowerCase() === "rock" &&
      computerPick.toLowerCase() === "scissors"
    ) {
      this.playerScore++;
      this.playedGames++;
    }
       */
  }

  // 1. User input
  // Can be 1.Rock 2.Paper 3.Scissors

  // 2. Computer
  // Pick random from the three possibilities
  // Random index -> Generate random index

  // 3. Play Game
  // Match against user and computer picks
  // Declare a winner each round
  // Count points
  // After 5 win declare who got more points
  // Print end result
}

export default new PlayGame();
