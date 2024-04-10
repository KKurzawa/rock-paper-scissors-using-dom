import './GameInit.css';

const GameInit = ({ props: { noPlay, playGame } }) => {
    return (
        <main id='init-game' className='gameInit-container flex flex-col items-center fixed flex-wrap h-3/6'>
            <h2 className='text-center text-4xl md:text-5xl'>Would you like to play rock, paper, scissors?</h2>
            <article className='flex flex-row justify-evenly w-full pt-10 text-3xl md:text-4xl lg:text-3xl'>
                <button className='init-btn' onClick={playGame}>Yeah!</button>
                <button className='init-btn' onClick={noPlay}>Nope!</button>
            </article>
            <h2 id='next-time' className='hidden pt-10 text-4xl md:text-5xl'>Ok, maybe next time.</h2>
        </main>
    )
}

export default GameInit