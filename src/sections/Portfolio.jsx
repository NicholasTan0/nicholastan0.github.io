import p1 from '../assets/whodat.png';
import p2 from '../assets/cards.png';
import p3 from "../assets/phreddit.png";
import p4 from "../assets/potionmaster.png";


const Portfolio = () => {
    return (
        <section id="portfolio" className="flex flex-col gap-14 justify-center items-center w-screen bg-[#ddd] p-20">
            <h1 className="text-gray-800 text-3xl text-center">Featured Projects</h1>
            <div className="flex flex-wrap bg-gray-200 rounded-3xl shadow-xl/20 font-mont text-gray-800 leading-10 p-10 max-w-[90vw]">
                <div className='flex flex-col justify-between w-full min-[1280px]:w-1/2'>
                    <div>
                        <h1 className="text-3xl font-medium my-4">NBA Player Guessing Game</h1>
                        <p>An engaging, fast-paced NBA guessing game that challenges players to identify NBA players based on headshots and data parsed from ESPN. A serverless backend efficiently delivers player information, supporting customizable hints to suit individual preferences and difficulty levels.</p>
                        <div className='flex flex-wrap gap-1.5 font-bold text-sm my-4'>
                            <span>#React</span>
                            <span>#JavaScript</span>
                            <span>#NodeJS</span>
                            <span>#ExpressJS</span>
                            <span>#HTML</span>
                            <span>#CSS</span>
                        </div>
                    </div>
                    <div className='flex gap-4 my-4 flex-wrap'>
                        <a href="https://whodatnba.vercel.app" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 w-min py-1 px-4 border-1 rounded-full text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-gray-200 active:scale-95'>
                            <svg fill='currentColor' width="1rem" height="1rem" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M32.032 16c0-8.501-6.677-15.472-15.072-15.969-0.173-0.019-0.346-0.032-0.523-0.032-0.052 0-0.104 0.005-0.156 0.007-0.093-0.002-0.186-0.007-0.281-0.007-8.84 0-16.032 7.178-16.032 16.001s7.192 16.001 16.032 16.001c0.094 0 0.188-0.006 0.281-0.008 0.052 0.002 0.104 0.008 0.156 0.008 0.176 0 0.349-0.012 0.523-0.032 8.395-0.497 15.072-7.468 15.072-15.969zM29.049 21.151c-0.551-0.16-1.935-0.507-4.377-0.794 0.202-1.381 0.313-2.84 0.313-4.357 0-1.196-0.069-2.354-0.197-3.469 3.094-0.37 4.45-0.835 4.54-0.867l-0.372-1.050c0.695 1.659 1.080 3.478 1.080 5.386 0 1.818-0.352 3.555-0.987 5.151zM8.921 16c0-1.119 0.074-2.212 0.21-3.263 1.621 0.127 3.561 0.222 5.839 0.243v6.939c-2.219 0.021-4.114 0.111-5.709 0.234-0.22-1.319-0.34-2.715-0.34-4.154zM16.967 2.132c2.452 0.711 4.552 4.115 5.492 8.628-1.512 0.12-3.332 0.209-5.492 0.229v-8.857zM14.971 2.156v8.832c-2.136-0.021-3.965-0.109-5.502-0.226 0.96-4.457 3.076-7.836 5.502-8.606zM14.971 21.913l0 7.929c-2.263-0.718-4.256-3.705-5.293-7.719 1.492-0.11 3.253-0.189 5.292-0.21zM16.967 29.868l-0-7.955c2.061 0.020 3.814 0.102 5.288 0.217-1.019 4.067-3 7.076-5.288 7.738zM16.967 19.92l0-6.939c2.291-0.021 4.218-0.118 5.818-0.25 0.131 1.053 0.203 2.147 0.203 3.268 0 1.442-0.116 2.84-0.329 4.16-1.575-0.128-3.462-0.219-5.692-0.24zM28.588 9.81c-0.302 0.094-1.564 0.453-4.094 0.751-0.564-2.998-1.584-5.561-2.91-7.412 3.048 1.325 5.535 3.697 7.005 6.661zM11.213 2.831c-1.632 1.873-2.963 4.568-3.691 7.754-2.265-0.245-3.623-0.534-4.166-0.665 1.585-3.27 4.407-5.836 7.856-7.088zM2.614 11.787c0.385 0.104 1.841 0.467 4.549 0.766-0.155 1.107-0.24 2.26-0.24 3.447 0 1.509 0.136 2.96 0.383 4.334-2.325 0.251-3.755 0.552-4.396 0.706-0.607-1.566-0.944-3.264-0.944-5.041 0-1.467 0.228-2.883 0.649-4.213zM3.784 22.886c0.727-0.154 2.029-0.39 3.956-0.591 0.759 2.803 1.993 5.175 3.473 6.874-3.16-1.148-5.79-3.398-7.429-6.282v0zM21.583 28.849c1.195-1.665 2.14-3.907 2.728-6.525 1.982 0.227 3.226 0.494 3.853 0.652-1.5 2.596-3.808 4.669-6.581 5.873z"></path> </g></svg>
                            <span>Demo</span>
                        </a>
                        <a href="https://github.com/NicholasTan0/WhoDat" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 w-min py-1 px-4 border-1 rounded-full transition-all duration-300 text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-gray-200 active:scale-95'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <img src={p1} alt='WhoDat' className='w-full min-[1280px]:w-1/2 h-auto'/>
            </div>

            <div className="flex flex-wrap bg-gray-200 rounded-3xl shadow-xl/20 font-mont text-gray-800 leading-10 p-10 max-w-[90vw]">
                <div className='flex flex-col justify-between w-full min-[1280px]:w-1/2'>
                    <div>
                        <h1 className="text-3xl font-medium my-4">Flashcard App</h1>
                        <p>A dynamic, intelligent flashcard application that helps users study and retain information through interactive and customizable flashcards. Users can create sets, add cards with text or images, and test themselves using various quiz modes. Combines the simplicity of Quizlet with the intelligence of Anki.</p>
                        <div className='flex flex-wrap gap-1.5 font-bold text-sm my-4'>
                            <span>#React</span>
                            <span>#JavaScript</span>
                            <span>#MongoDB</span>
                            <span>#NodeJS</span>
                            <span>#ExpressJS</span>
                            <span>#HTML</span>
                            <span>#CSS</span>

                        </div>
                    </div>
                    <div className='flex gap-4 my-4 flex-wrap'>
                        {/* <a href="https://whodatnba.vercel.app" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 w-min py-1 px-4 border-1 rounded-full text-blue-700 transition-all duration-300 hover:bg-blue-700 hover:text-gray-200 active:scale-95'>
                            <svg fill='currentColor' width="1rem" height="1rem" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M32.032 16c0-8.501-6.677-15.472-15.072-15.969-0.173-0.019-0.346-0.032-0.523-0.032-0.052 0-0.104 0.005-0.156 0.007-0.093-0.002-0.186-0.007-0.281-0.007-8.84 0-16.032 7.178-16.032 16.001s7.192 16.001 16.032 16.001c0.094 0 0.188-0.006 0.281-0.008 0.052 0.002 0.104 0.008 0.156 0.008 0.176 0 0.349-0.012 0.523-0.032 8.395-0.497 15.072-7.468 15.072-15.969zM29.049 21.151c-0.551-0.16-1.935-0.507-4.377-0.794 0.202-1.381 0.313-2.84 0.313-4.357 0-1.196-0.069-2.354-0.197-3.469 3.094-0.37 4.45-0.835 4.54-0.867l-0.372-1.050c0.695 1.659 1.080 3.478 1.080 5.386 0 1.818-0.352 3.555-0.987 5.151zM8.921 16c0-1.119 0.074-2.212 0.21-3.263 1.621 0.127 3.561 0.222 5.839 0.243v6.939c-2.219 0.021-4.114 0.111-5.709 0.234-0.22-1.319-0.34-2.715-0.34-4.154zM16.967 2.132c2.452 0.711 4.552 4.115 5.492 8.628-1.512 0.12-3.332 0.209-5.492 0.229v-8.857zM14.971 2.156v8.832c-2.136-0.021-3.965-0.109-5.502-0.226 0.96-4.457 3.076-7.836 5.502-8.606zM14.971 21.913l0 7.929c-2.263-0.718-4.256-3.705-5.293-7.719 1.492-0.11 3.253-0.189 5.292-0.21zM16.967 29.868l-0-7.955c2.061 0.020 3.814 0.102 5.288 0.217-1.019 4.067-3 7.076-5.288 7.738zM16.967 19.92l0-6.939c2.291-0.021 4.218-0.118 5.818-0.25 0.131 1.053 0.203 2.147 0.203 3.268 0 1.442-0.116 2.84-0.329 4.16-1.575-0.128-3.462-0.219-5.692-0.24zM28.588 9.81c-0.302 0.094-1.564 0.453-4.094 0.751-0.564-2.998-1.584-5.561-2.91-7.412 3.048 1.325 5.535 3.697 7.005 6.661zM11.213 2.831c-1.632 1.873-2.963 4.568-3.691 7.754-2.265-0.245-3.623-0.534-4.166-0.665 1.585-3.27 4.407-5.836 7.856-7.088zM2.614 11.787c0.385 0.104 1.841 0.467 4.549 0.766-0.155 1.107-0.24 2.26-0.24 3.447 0 1.509 0.136 2.96 0.383 4.334-2.325 0.251-3.755 0.552-4.396 0.706-0.607-1.566-0.944-3.264-0.944-5.041 0-1.467 0.228-2.883 0.649-4.213zM3.784 22.886c0.727-0.154 2.029-0.39 3.956-0.591 0.759 2.803 1.993 5.175 3.473 6.874-3.16-1.148-5.79-3.398-7.429-6.282v0zM21.583 28.849c1.195-1.665 2.14-3.907 2.728-6.525 1.982 0.227 3.226 0.494 3.853 0.652-1.5 2.596-3.808 4.669-6.581 5.873z"></path> </g></svg>
                            <span>Demo</span>
                        </a> */}
                        <a href="https://github.com/NicholasTan0/Flashcardify" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 w-min py-1 px-4 border-1 rounded-full transition-all duration-300 text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-gray-200 active:scale-95'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <img src={p2} alt='Image' className='w-full min-[1280px]:w-1/2 h-auto'/>
            </div>
            
            <div className="flex flex-wrap bg-gray-200 rounded-3xl shadow-xl/20 font-mont text-gray-800 leading-10 p-10 max-w-[90vw]">
                <div className='flex flex-col justify-between w-full min-[1280px]:w-1/2'>
                    <div>
                        <h1 className="text-3xl font-medium my-4">Reddit Clone</h1>
                        <p>A robust web application inspired by Reddit that allows users to create accounts, post content, comment, and upvote or downvote posts. It features community-based forums, real-time updates, and a responsive design. Showcases full-stack development skills in authentication, database management, and dynamic UI design.</p>
                        <div className='flex flex-wrap gap-1.5 font-bold text-sm my-4'>
                            <span>#JavaScript</span>
                            <span>#MongoDB</span>
                            <span>#HTML</span>
                            <span>#CSS</span>
                            <span>#NodeJS</span>
                            <span>#ExpressJS</span>
                        </div>
                    </div>
                    <div className='flex gap-4 my-4 flex-wrap'>
                        {/* <a href="https://www.youtube.com/watch?v=ZtA_GHVxTzg" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 w-min py-1 px-4 border-1 rounded-full text-red-700 transition-all duration-300 hover:bg-red-700 hover:text-gray-200 active:scale-95'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                            </svg>
                            <span>Video</span>
                        </a> */}
                        <a href="https://github.com/NicholasTan0/reddit-clone" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 w-min py-1 px-4 border-1 rounded-full transition-all duration-300 text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-gray-200 active:scale-95'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <img src={p3} alt='Image' className='w-full min-[1280px]:w-1/2 h-auto'/>
            </div>

            <div className="flex flex-wrap bg-gray-200 rounded-3xl shadow-xl/20 font-mont text-gray-800 leading-10 p-10 max-w-[90vw]">
                <div className='flex flex-col justify-between w-full min-[1280px]:w-1/2'>
                    <div>
                        <h1 className="text-3xl font-medium my-4">Potion Master</h1>
                        <h2 className='font-semibold text-amber-600'>🎉 Hackathon Winner!</h2>
                        <p>You are a merchant selling exotic potions to weary travelers. Your goal is to make the right choices by serving the customers in the quickest fashion. But be quick! Your customers grow impatient. Made with the PyGame library.</p>
                        <div className='flex flex-wrap gap-1.5 font-bold text-sm my-4'>
                            <span>#Python</span>
                        </div>
                    </div>
                    <div className='flex gap-4 my-4 flex-wrap'>
                        <a href="https://devpost.com/software/potion-master" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 w-min py-1 px-4 border-1 rounded-full text-[rgb(0,62,84)] transition-all duration-300 hover:bg-[rgb(0,62,84)] hover:text-gray-200 active:scale-95'>
                            <svg width="1rem" height="1rem" fill="currentColor" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"></path></g></svg>
                            <span>DevPost</span>
                        </a>
                        <a href="https://github.com/dakota-byte/SBUHacks-2022" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 w-min py-1 px-4 border-1 rounded-full transition-all duration-300 text-[var(--secondary)] hover:bg-[var(--secondary)] hover:text-gray-200 active:scale-95'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
                <img src={p4} alt='Image' className='w-full min-[1280px]:w-1/2 h-auto'/>
            </div>
        </section>
    )
}

export default Portfolio