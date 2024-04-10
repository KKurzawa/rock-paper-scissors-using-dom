import './Footer.css'

const Footer = ({ props: { setHumanScore, setComputerScore } }) => {
    const clearScores = () => {
        setHumanScore(0);
        setComputerScore(0);
    }
    return (
        <footer className='footer-container flex justify-center items-center h-1/5 w-full text-3xl md:text-4xl lg:text-3xl'>
            <button className='clear-btn' onClick={clearScores}>Clear Scores</button>
        </footer>
    )
}

export default Footer