const Navbar = () => {
    return (
        <div className="flex justify-end items-center m-10 bg-transparent rounded-3xl">
            <nav className="space-x-6">
                <a href="#home" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Home</a>
                <a href="#about" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">About</a>
                <a href="#projects" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Projects</a>
                <a href="#contact" className="p-1 text-xl border-b-2 border-transparent hover:border-b-gray-200 transition-colors duration-200 ease-in-out">Contact</a> 
            </nav>
        </div>
        
    )
}

export default Navbar