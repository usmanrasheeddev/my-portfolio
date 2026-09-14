import { IoIosArrowForward } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";
import { PiBookOpen } from "react-icons/pi";
import ludiImage from '../../public/assets/ludi.png'
import blogifyImage from '../../public/assets/projects/Blogify/logo.png'
import Image from "next/image";

const WorkExperience = () => {
    return (
        <div id="experience" className="">
            <h4 className="text-xl text-balance font-bold leading-tight tracking-tight">Work Experience</h4>
            <div className="flex flex-col gap-5 py-4">
                <WorkCard png={blogifyImage} company={"Blogify"} jobTitle={"Full-Stack Developer"} points={[
                    "Built a complete PHP blogging platform with article publishing, editing, deletion, cover image uploads, and server-side pagination.",
                    "Implemented role-based access control for Admin, Author, Editor, and User accounts with protected actions and dashboards.",
                    "Developed category filtering, keyword search, article discussions, comment moderation, and profile management workflows.",
                    "Designed a dual-engine PDO database layer supporting MySQL on traditional PHP hosting and SQLite for serverless Vercel deployment.",
                    "Applied prepared statements, XSS escaping, password_hash(), and password_verify() for secure data and authentication handling."
                ]} description={"Developed Blogify, a full-featured personal blogging system covering content creation, community engagement, administrative moderation, secure authentication, and flexible MySQL/SQLite deployment."} timeline={"2026"} />
                <WorkCard png={ludiImage} company={"Ludi Social"} jobTitle={"Lead Developer"} points={[
                    "Built the entire application from scratch as the sole developer.",
                    "Developed the full stack system including frontend, backend, and database.",
                    "Implemented Convex as the backend infrastructure for real-time data handling.",
                    "Integrated external APIs including the Twitch API to fetch the latest game data.",
                    "Designed and built the complete UI and UX system from scratch.",
                    "Developed a custom ranking algorithm for game scoring and dynamic list sorting.",
                    "Managed API integrations, data flows, and the overall system architecture.",
                    "Configured production-level setups, closed-beta testing pipelines, and performance improvements."
                ]} description={"As the sole Lead Developer, I built and launched the Ludi Social mobile app from scratch, handling the full stack architecture, real-time database syncing, custom ranking algorithms, and beta testing pipelines."} timeline={"Jan 2026 - Present"} />
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