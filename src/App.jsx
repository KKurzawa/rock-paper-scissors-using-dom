import './App.css'
import Header from './components/Header/Header'
import Welcome from './components/Welcome/Welcome';
import GameInit from './components/GameInit/GameInit';
import Game from './components/Game/Game';
import Footer from './components/Footer/Footer';
import { useState } from 'react';


const noPlay = () => {
  document.getElementById('next-time').style.display = 'flex';
}

const playGame = () => {
  document.getElementById('init-game').style.display = 'none';
  document.getElementById('play-game').style.display = 'flex';
}

const App = () => {
  const [humanScore, setHumanScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  return (
    <main className='app-container h-full'>
      <Header props={{ humanScore, computerScore }} />
      <Welcome />
      <GameInit props={{ noPlay, playGame }} />
      <Game props={{ playGame, humanScore, setHumanScore, computerScore, setComputerScore }} />
      <Footer props={{ setComputerScore, setHumanScore }} />
    </main>
  )
}

export default App
