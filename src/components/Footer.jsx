const Footer = () => {
    return (
        <footer className="flex flex-col justify-between items-center w-full p-4 bg-[var(--secondary)] gap-4">
            <div className="flex justify-center items-center flex-wrap gap-6">
                {/* <a href="#home" className="py-0.5 text-lg border-b-1 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Home</a>
                <a href="#about" className="py-0.5 text-lg border-b-1 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">About</a>
                <a href="#portfolio" className="py-0.5 text-lg border-b-1 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Portfolio</a> */}
                
                <div className="flex gap-8 m-1 text-[#ddd]">
                    <a href="mailto:nicholast5014@gmail.com" title="Send me an email!">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
                        </svg>  */}
                        <svg width="2rem" height="2rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></rect> </g></svg>
                    </a> 
                    <a href="https://drive.google.com/file/d/1rCEaqtbxoSFCrDODjlGq2wWhLWl6K7Qs/view?usp=sharing" target="_blank" rel="noopener noreferrer" title="Check out my resume!">
                        <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-file-earmark-person" viewBox="0 0 16 16">
                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z"/>
                        </svg>
                    </a>
                    <a href="https://github.com/NicholasTan0" target="_blank" rel="noopener noreferrer" title="Follow me on GitHub!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                    </a>
                    <a href="https://www.linkedin.com/in/nicholastan0/" target="_blank" rel="noopener noreferrer" title="Connect with me on LinkedIn!">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/></svg>
                    </a>
                </div>
            </div>
            <span className="text-xs font-extralight text-center">Nicholas Tan @ 2025</span>
        </footer>
    )
}

export default Footer