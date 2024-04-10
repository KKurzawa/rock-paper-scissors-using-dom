import './Game.css'
import { useState } from 'react';

const Game = ({ props: { humanScore, setHumanScore, computerScore, setComputerScore } }) => {
    const [result, setResult] = useState('')
    const [nextTimeEl, setNextTimeEl] = useState('')
    const [playerChoice, setPlayerChoice] = useState('');

    const rock = () => {
        setPlayerChoice('rock')
        determineWinnerRock();
        hideGame();
        playAgain();
    }

    const paper = () => {
        setPlayerChoice('paper')
        determineWinnerPaper();
        hideGame();
        playAgain();
    }

    const scissors = () => {
        setPlayerChoice('scissors')
        determineWinnerScissors();
        hideGame();
        playAgain();
    }

    const getCompouterChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber)
        const rpsArray = ["rock", "paper", "scissors"];
        return rpsArray[randomNumber];
    }

    const determineWinnerRock = () => {
        let computerChoice = getCompouterChoice();
        if (playerChoice === computerChoice) {
            setResult("Human: Rock. Computer: Rock.  Tie Game!")
            hideGame();
            playAgain();
            return result;
        } else if (playerChoice === 'rock' && computerChoice === 'paper') {
            setResult("Human: Rock. Computer: Paper.  Computer Wins!")
            setComputerScore(computerScore + 1)
        } else {
            setResult("Human: Rock. Computer: Scissors.  Human Wins!")
            setHumanScore(humanScore + 1)
        }
    }

    const determineWinnerPaper = () => {
        let computerChoice = getCompouterChoice();
        if (playerChoice === computerChoice) {
            setResult("Human: Paper. Computer: Paper.  Tie Game!")
            hideGame();
            playAgain();
            return result;
        } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
            setResult("Human: Paper. Computer: Scissors.  Computer Wins!")
            setComputerScore(computerScore + 1)
        } else {
            setResult("Human: Paper. Computer: Rock.  Human Wins!")
            setHumanScore(humanScore + 1)
        }
    }

    const determineWinnerScissors = () => {
        let computerChoice = getCompouterChoice();
        if (playerChoice === computerChoice) {
            setResult("Human: Scissors. Computer: Scissors.  Tie Game!")
            hideGame();
            playAgain();
            return result;
        } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
            setResult("Human: Scissors. Computer: Rock.  Computer Wins!")
            setComputerScore(computerScore + 1)
        } else {
            setResult("Human: Scissors. Computer: Paper.  Human Wins!")
            setHumanScore(humanScore + 1)
        }
    }

    const playAgain = () => {
        document.getElementById('play-again').style.display = ('flex');
    }

    const hideGame = () => {
        document.getElementById('game').style.display = ('none');
    }

    const nextTime = () => {
        document.getElementById('result').style.display = ('none');
        document.getElementById('play-again').style.display = ('none');
        setNextTimeEl('See you next time!');
    }

    const restartGame = () => {
        document.getElementById('play-again').style.display = ('none');
        setResult('');
        document.getElementById('game').style.display = ('flex');
    }

    return (
        <main id='play-game' className='game-container hidden flex-col  items-center h-3/6 pt-5 md:pt-20'>
            <article id='game' className='flex-col'>
                <h2 className='text-center text-4xl md:text-5xl'>Choose rock, paper, or scissors.
                </h2>
                <article className='flex flex-row justify-evenly w-full pt-10 text-3xl'>
                    <button className='rps-btn' onClick={rock}>Rock</button>
                    <button className='rps-btn' onClick={paper}>Paper</button>
                    <button className='rps-btn' onClick={scissors}>Scissors</button>
                </article>
            </article>
            <h2 id='result' className='py-5 px-5 text-center text-4xl md:text-5xl'>{result}</h2>
            <article id='play-again' className='hidden flex-col py-5'>
                <h2 className='py-5 text-center text-4xl md:text-5xl'>Would you like to play again?</h2>
                <section className='flex flex-row justify-evenly pt-5 mb-10 text-3xl'>
                    <button className='yn-btn' onClick={restartGame}>Yeah!</button>
                    <button className='yn-btn' onClick={nextTime}>Na...</button>
                </section>
            </article>
            <article id="next-time" className='flex flex-col mt-10'>
                <h2 className='text-center text-4xl md:text-5xl'>{nextTimeEl}</h2>
            </article>

        </main>
    )
}

export default Game