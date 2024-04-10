import './Header.css';

const Header = ({ props: { humanScore, computerScore } }) => {
    return (
        <>
            <main className="header-container hidden lg:flex justify-evenly items-center w-full h-1/5">
                <h2 className='text-2xl'>Human Score: {humanScore}</h2>
                <h1 className="text-5xl">Rock, Paper, Scissors</h1>
                <h2 className='text-2xl'>Computer Score: {computerScore}</h2>
            </main>
            <main className="header-container flex flex-col lg:hidden justify-evenly items-center w-full h-1/5">
                <h1 className="text-4xl md:text-6xl">Rock, Paper, Scissors</h1>
                <article className='flex flex-row justify-evenly w-full'>
                    <h2 className='text-lg md:text-3xl'>Human Score: {humanScore}</h2>
                    <h2 className='text-lg md:text-3xl'>Computer Score: {computerScore}</h2>
                </article>
            </main>
        </>
    )
}

export default Header