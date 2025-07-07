const Home = () => {
    return (
        <section id="home" className="relative z-99 flex flex-wrap mx-[8vw] min-h-[90vh]">
            <div className="flex flex-col flex-3/5 justify-center">
                <hr className="grows h-1.5 mb-12 mt-8 bg-gray-200"></hr>
                <h2 className="text-lg font-mono">Hi, my name is</h2>
                <h1 className="max-w-fit typing text-responsive font-bold">Nicholas Tan.</h1>
            </div>
            <div className="appearFirst flex flex-2/5 flex-col justify-center my-8">
                <h2 className="text-lg text-white">About Me</h2>
                <p className="text-[#ddd] pt-2 pb-4">I am a fourth year student studying Computer Science at Stony Brook University. I am passionate about full-stack development, game development, artificial intelligence, and UI/UX design.</p>
                <a href="#about" className="flex items-center border-b-2 w-max text-white">Learn More
                    <svg width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path> </g></svg>
                </a>
                <hr className="h-px my-8 bg-gray-700 border-none"></hr>
                <h2 className="text-lg text-white">My Projects</h2>
                <p className="text-[#ddd] pt-2 pb-4">I enjoy creating projects that are fun and challenging, and I strive to utilize and master different languages, frameworks, and libraries in the process. Demo links and source code provided.</p>
                <a href="#portfolio" className="flex items-center border-b-2 w-max text-white">Browse Portfolio
                    <svg width="32px" height="32px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path> </g></svg>
                </a>
            </div>
            <a href="#about" className="svg-down absolute bottom-[-3.5vh] left-[calc(50%-19px)] z-10 bg-[rgba(255,255,255,0.4)] p-2 rounded-full">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="32px" height="32px" viewBox="0 0 268.832 268.832" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M223.255,167.493c-4.881-4.882-12.797-4.882-17.678,0l-58.661,58.661V12.5c0-6.903-5.598-12.5-12.5-12.5 c-6.904,0-12.5,5.597-12.5,12.5v213.654l-58.661-58.659c-4.883-4.881-12.797-4.881-17.678,0c-4.883,4.882-4.883,12.796,0,17.678 l80,79.998c2.439,2.44,5.64,3.661,8.839,3.661s6.397-1.221,8.839-3.661l80-80C228.137,180.289,228.137,172.375,223.255,167.493z"></path> </g> </g></svg>
            </a>
        </section>
    )
}

export default Home