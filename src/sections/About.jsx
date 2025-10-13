// import me from "../assets/me.jpeg"
import i1 from "../assets/i1.jpeg"

const About = () => {
    return (
        <section id="about" className="flex flex-col justify-center items-center min-h-[110vh] w-screen bg-[#ddd] p-20 gap-16">
            <h1 className="text-gray-800 text-3xl text-center">About Me</h1>
            <div className="about flex gap-12 flex-wrap w-full">
                <img src={i1} className="flex-1 self-center"/>
                <div className="flex-1 text-left text-gray-600 font-light">
                        I'm a current student at <span className="text-red-600">Stony Brook University</span> pursuing my major in <span className="text-yellow-600">Computer Science</span>.
                        I'm an open learner with a keen eye for detail, and I pride myself in my ability to collaborate with others and try new things.
                        As an aspiring <span className="text-blue-600">software developer</span>, I've got hands-on experience with full-stack development in team environments and web application deployments.
                        My goal is to be a part of something bigger than myself, and to lead with curiousity, knowledge and kindness.
                </div>
            </div>
            
            <div>

            </div>
        </section>
    )
}

export default About