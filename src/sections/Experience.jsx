import commonpoint from "../assets/commonpoint.jpg";
import qpl from "../assets/qpl.jpg";
import sbu from "../assets/sbu.png"

const Experience = () => {
    return (
        <section id="experience" className="flex flex-col items-center justify-start w-screen min-h-screen p-20">
            <div className="flex flex-col justify-center items-center w-full gap-8">
                <h1 className="text-gray-200 text-3xl text-center mb-8">Experience</h1>
                <div className="experience">
                    <div className="flex justify-start items-center gap-4 w-[365px] flex-wrap">
                        <a href="https://www.stonybrook.edu/" target="_blank" rel="noopener noreferrer">
                            <img src={sbu}></img>
                        </a>
                        <div>
                            <h1 className="text-2xl font-bold">Stony Brook University</h1>
                            <h2 className="text-lg">Student</h2>
                            <h3 className="text-sm text-gray-300 my-1">May 2022 - Present</h3>
                        </div>
                    </div>
                    <div className="flex-1">
                        <ul>
                            <li>Bachelor of Science in Computer Science</li>
                            <li>3.4/4.0 GPA</li>
                            <li>Deans List - Fall 2022, Fall 2024, Spring 2025</li>
                        </ul>
                    </div>
                </div>
                <div className="experience">
                    <div className="flex justify-start items-center gap-4 w-[300px] flex-wrap">
                        <a href="https://www.commonpoint.org/" target="_blank" rel="noopener noreferrer">
                            <img src={commonpoint}></img>
                        </a>
                        <div>
                            <h1 className="text-2xl font-bold">Commonpoint</h1>
                            <h2 className="text-lg">Social Media Assistant</h2>
                            <h3 className="text-sm text-gray-300 my-1">June - August 2022</h3>
                        </div>
                    </div>
                    <div className="flex-1">
                        <ul>
                            <li>Captured and edited event photos and videos for social media, increasing user engagement by 150%</li>
                            <li>Designed and maintained a Google Drive system to centralize event multimedia, confidential personnel records and
                                invoices, improving team accessibility and reducing retrieval time
                            </li>
                            <li>Created and delivered personalized media packages to 40+ families via email using Shutterfly, improving
                                engagement and client satisfaction
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="experience">
                    <div className="flex justify-start items-center gap-4 w-[360px] flex-wrap">
                        <a href="https://www.queenslibrary.org/" target="_blank" rel="noopener noreferrer">
                            <img src={qpl}></img>
                        </a>
                        <div>
                            <h1 className="text-2xl font-bold">Queens Public Library</h1>
                            <h2 className="text-lg">Computer Lab Aide</h2>
                            <h3 className="text-sm text-gray-300 my-1">August - September 2021</h3>
                        </div>
                    </div>
                    <div className="flex-1">
                        <ul>
                            <li>Provided direct assistance to library patrons, resolving issues with Microsoft Office Suite, printing services, and
                                online reservation software
                            </li>
                            <li>Diagnosed and resolved software and hardware issues, improving computer lab uptime and user satisfaction</li>
                            <li>Processed weekly shipments and returns while organizing and shelving 300+ library items, ensuring efficient
                                inventory management
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </section>
    )
}

export default Experience