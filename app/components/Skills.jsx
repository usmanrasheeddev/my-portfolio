const strongSkills = [
    "JAVA",
    "PYTHON",
    "SQL & DATABASES",
    "POWER BI",
    "MACHINE LEARNING",
    "GENERATIVE AI",
    "CLOUD (AWS/AZURE/GCP)",
    "HTML/CSS/JAVASCRIPT",
    "REACT",
    "NEXT.JS",
    "REACT NATIVE",
    "TAILWIND CSS",
    "NODE.JS",
    "EXPRESS.JS",
    "PHP",
    "FIREBASE",
    "SUPABASE",
    "POSTGRESQL",
    "SANITY CMS",
    "STRIPE",
    "FRAMER MOTION",
    "GIT & GITHUB",
    "VERCEL",
    "FIGMA"
];


const learningSkills = [
    "Bun",
    "Hono",
    "Web Sockets",
    "TypeScript",
    "Express js",
    "C",
    "Python",
    "Java",
    "OOP",
    "DSA",
    "Linux & CLI",
];



const Skills = () => {
    return (
        <div className="pb-4">
            <h4 className="text-xl text-balance font-bold leading-tight tracking-tight">Skills</h4>
            <div className="py-4 flex flex-row gap-2.5 flex-wrap">
                {strongSkills.map((skill, index) => (
                    <Badge key={skill} index={index}>{skill}</Badge>
                ))}
            </div>
        </div>
    )
}

export default Skills

const Badge = ({ children, isLearning, index = 0 }) => {
    const colorStyles = isLearning
        ? [
            "bg-white text-black border-white hover:bg-white/90",
        ]
        : [
            "bg-blue-600 text-white border-blue-500 hover:bg-blue-500",
            "bg-gray-500 text-white border-gray-400 hover:bg-gray-400",
            "bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500",
            "bg-rose-600 text-white border-rose-500 hover:bg-rose-500",
            "bg-yellow-400 text-black border-yellow-300 hover:bg-yellow-300",
            "bg-cyan-500 text-black border-cyan-400 hover:bg-cyan-400",
            "bg-gray-100 text-gray-900 border-gray-200 hover:bg-white",
            "bg-gray-800 text-white border-gray-700 hover:bg-gray-700",
            "bg-blue-600 text-white border-blue-500 hover:bg-blue-500",
            "bg-gray-500 text-white border-gray-400 hover:bg-gray-400",
            "bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500",
            "bg-rose-600 text-white border-rose-500 hover:bg-rose-500",
            "bg-yellow-400 text-black border-yellow-300 hover:bg-yellow-300",
            "bg-cyan-500 text-black border-cyan-400 hover:bg-cyan-400",
            "bg-gray-100 text-gray-900 border-gray-200 hover:bg-white",
            "bg-gray-800 text-white border-gray-700 hover:bg-gray-700",
            "bg-blue-600 text-white border-blue-500 hover:bg-blue-500",
            "bg-gray-500 text-white border-gray-400 hover:bg-gray-400",
            "bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-500",
            "bg-rose-600 text-white border-rose-500 hover:bg-rose-500",
            "bg-yellow-400 text-black border-yellow-300 hover:bg-yellow-300",
            "bg-cyan-500 text-black border-cyan-400 hover:bg-cyan-400",
            "bg-gray-100 text-gray-900 border-gray-200 hover:bg-white",
            "bg-gray-800 text-white border-gray-700 hover:bg-gray-700",
        ];

    return (
        <div className={`text-sm transition-all duration-300 py-[7px] px-[14px] border shadow-sm hover:-translate-y-0.5 ${colorStyles[index % colorStyles.length]} font-bold rounded-lg w-fit`}>
            {children}
        </div>
    )
}

export const SkillsImCurrentlyLearning = () => {
    return (
        <div className="pb-4">
            <h4 className="text-xl text-balance font-bold leading-tight">Skills I'm Currently Learning</h4>
            <div className="py-4 flex flex-row gap-2.5 flex-wrap">
                {learningSkills.map((skill, index) => (
                    <Badge isLearning index={index} key={skill}>{skill}</Badge>
                ))}
            </div>
        </div>
    )
}
