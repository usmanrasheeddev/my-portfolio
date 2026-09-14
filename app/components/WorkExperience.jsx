import { IoIosArrowForward } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { PiBookOpen } from "react-icons/pi";
import blogifyImage from '../../public/assets/projects/Blogify/logo.png'
import Image from "next/image";

const WorkExperience = () => {
    return (
        <div id="experience" className="">
            <h4 className="text-xl text-balance font-bold leading-tight tracking-tight">Work Experience</h4>
            <div className="flex flex-col gap-5 py-4">
                <WorkCard png={blogifyImage} company={"Blogify"} jobTitle={"Full-Stack Developer"} points={[
                    "Built a PHP blogging platform with publishing, editing, uploads, and pagination.",
                    "Added role-based access for Admin, Author, Editor, and User roles.",
                    "Created filters, search, discussions, moderation, and profile features.",
                    "Built a MySQL/SQLite PDO layer for flexible hosting deployment.",
                    "Secured auth and data with prepared statements and hashed passwords."
                ]} description={"Developed Blogify, a full-featured personal blogging system covering content creation, community engagement, administrative moderation, secure authentication, and flexible MySQL/SQLite deployment."} timeline={"2026"} />
                <WorkCard icon={<PiBookOpen />} company={"A Step Toward Haq"} jobTitle={"Full Stack Developer"} points={[
                    "Built a complete Islamic education platform from scratch for an online Quran & Arabic learning institute.",
                    "Developed a structured course system with progress tracking, automated test evaluation, and certificate generation.",
                    "Implemented a visual referral tree system for tracking student network growth and detecting broken referral chains.",
                    "Built a dedicated admin panel with user search, role management, and referral chain monitoring.",
                    "Integrated WhatsApp API for direct communication between admins and students.",
                    "Created a real-time notification system to alert users about referral issues and platform updates."
                ]} description={"Developed a full-stack education platform for A Step Toward Haq, an online Islamic learning institute. The platform handles course management, student referrals, certificate generation, and admin operations."} timeline={"2025"} />
                <WorkCard company={"Freelancer"} points={[
                    "Worked directly with clients to plan project goals and turn their ideas into clear requirements.",
                    "Focused on building responsive websites that work perfectly on desktops, tablets, and phones.",
                    "Helped clients improve their existing sites by fixing bugs, boosting performance, and adding new features.",
                    "Developed my professional portfolio and online presence to showcase my work and find new projects."
                ]} icon={<BsGlobe2 />} jobTitle={"Web Development & UI/Ux"} description={"I work as a freelancer, growing my brand on social media and partnering with clients to bring their ideas to life. My expertise lies in transforming concepts into fully functional and responsive web apps, ensuring they are tailored, efficient, and visually appealing."} timeline={"2024 - Present"} />
            </div>
        </div>
    )
}

export default WorkExperience

const WorkCard = ({ company, jobTitle, description, timeline, icon, points, png }) => {
    return (
        <div className="flex cursor-pointer w-full flex-row group gap-4">
            <div>
                {icon ? <div
                    className="size-[50px] text-3xl text-black/80 bg-cover bg-center flex justify-center items-center rounded-full bg-white border border-white/15">
                    {icon}
                </div> : png ? <div
                    className="size-[50px] bg-cover bg-center flex overflow-hidden justify-center items-center rounded-full bg-white border border-white/15">
                    <Image src={png} alt={company} width={50} height={50} />
                </div> : <div
                    className="size-[50px] text-white/30 bg-cover bg-center flex justify-center items-center rounded-full bg-white/10 border border-white/15">
                    {company[0]}
                </div>}
            </div>
            <div className="space-y-2 w-full">
                <div className="flex flex-row justify-between items-start w-full">
                    <div className="space-y-[1px]">
                        <h5 className="text-sm font-bold flex flex-row items-center">{company} <span><IoIosArrowForward className="group-hover:opacity-100  transition-all duration-300 group-hover:translate-x-1 opacity-0" strokeWidth={20} /></span></h5>
                        <h6 className="text-xs">{jobTitle}</h6>
                    </div>
                    <div className="opacity-60 text-sm">{timeline}</div>
                </div>
                {!points ? <div className="opacity-60 text-sm">{description}</div> : <ul style={{ listStyleType: 'disc' }} className="flex flex-col">
                    {points.map((item, index) => <li key={index} className="text-sm opacity-60">{item}</li>)}
                </ul>}
            </div>
        </div>
    )
}