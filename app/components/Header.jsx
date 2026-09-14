import Image from "next/image";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import ResumeButton from "./ResumeButton";

const Header = () => {
    const socials = [
        { href: "https://api.whatsapp.com/send?phone=923044993095&text=Hi%20Usman%2C%20I%27m%20interested%20in%20your%20work!", label: "WhatsApp", icon: <FaWhatsapp size={16} />, color: "bg-[#111111] text-white/80 hover:bg-[#25D366] hover:text-[#052e16]" },
        { href: "https://www.linkedin.com/in/usmanrasheedcontact/", label: "LinkedIn", icon: <FaLinkedinIn size={16} />, color: "bg-[#111111] text-white/80 hover:bg-[#0A66C2] hover:text-white" },
        { href: "https://github.com/usmanrasheeddev", label: "GitHub", icon: <FaGithub size={16} />, color: "bg-[#111111] text-white/80 hover:bg-[#8B5CF6] hover:text-white" },
    ];

    return (
        <>
            <div className="fixed left-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 md:flex">
                {socials.map(({ href, label, icon, color }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className={`group relative flex h-12 w-12 items-center justify-center rounded-[18px] border border-white/10 bg-[#111111] text-white/80 shadow-[0_12px_24px_rgba(0,0,0,0.35)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.08] hover:rotate-[-6deg] hover:rounded-[20px] hover:shadow-[0_18px_32px_rgba(0,0,0,0.44)] active:translate-y-0 active:scale-95 ${color} hover:border-transparent`}
                    >
                        <span className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_3px_10px_rgba(255,255,255,0.35)]">
                            {icon}
                        </span>
                    </a>
                ))}
            </div>

            <div className="flex flex-row justify-between py-5 pt-10 w-full items-center gap-0">
                <div className="w-full">
                    <div className="text-4xl md:text-6xl flex flex-row gap-2 text-balance leading-tight tracking-tighter font-bold">
                        Hi, I'm Usman
                        <img src="https://fonts.gstatic.com/s/e/notoemoji/latest/1f44b/512.gif" alt="👋" className="size-14" />
                    </div>
                    <h2 className=" text-base md:text-xl max-w-xl text-balance leading-tight">Full-Stack Developer Building High-Performing Web Applications</h2>
                    <div className="mt-4">
                        <ResumeButton />
                    </div>
                </div>
                <div className="flex items-center justify-center min-w-[150px] h-[150px]">
                    <Image width={500} height={500} src="/assets/profile-pic.png" alt="profile picture"
                        className="w-full h-full object-cover rounded-full bg-white/10 border border-white/15" />
                </div>
            </div>
        </>
    )
}

export default Header