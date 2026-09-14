"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft } from 'react-icons/bi';
import { PiSuitcaseLight, PiShieldCheck, PiArticle, PiUsers, PiDatabase, PiChatCircle } from "react-icons/pi";
import { TbCopy } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import confetti from 'canvas-confetti';
import copy from 'copy-to-clipboard';

const page = () => {
    const containerRef = useRef(null);
    const [open, setOpen] = useState(false)
    const { scrollYProgress } = useScroll({ target: containerRef });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (value) => setOpen(value >= 0.98));
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <main ref={containerRef} className="flex bg-[#080808] flex-col items-center justify-between">
            <section className="max-w-3xl px-5 md:px-0 pb-96 md:pb-80 space-y-10 mt-10 w-full h-full">
                <Header />
                <Title />
                <ScrollProgressSections />
                <Cta />
            </section>
            <div className="w-full pointer-events-none fixed h-[100dvh] pb-5 flex flex-col justify-end items-center">
                {open && <Footer newPage={true} open={open} />}
                {!open && <FooterClose newPage={true} open={open} />}
            </div>
        </main>
    )
}

export default page

const Header = () => (
    <a href='/' className='flex flex-row items-center gap-1 hover:opacity-80 transition-opacity'>
        <BiChevronLeft size={22} />
        <div>
            <p className='text-sm font-medium'>Usman Rasheed</p>
            <p className='text-xs opacity-60'>Full Stack Developer</p>
        </div>
    </a>
)

const Title = () => {
    const stack = ["PHP", "MySQL", "SQLite", "JavaScript", "HTML5", "CSS3", "PDO", "Vercel", "Apache"];

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 justify-between items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center opacity-60 mb-1'><PiSuitcaseLight /> <span>Project</span></div>
                    <div className='flex items-center gap-3'>
                        <img src="/assets/projects/Blogify/logo.png" className="w-9 h-9 object-contain rounded-md bg-white" alt="Blogify logo" />
                        <p className='font-bold text-lg'>Blogify</p>
                    </div>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>Introduction</span></div>
                    <p className='text-xs text-balance font-medium leading-relaxed'>
                        Blogify is a modern personal blogging system designed around the complete publishing lifecycle. It lets people discover and filter articles, lets authors create and manage content, lets users participate in discussions, and gives administrators the controls needed to moderate the platform. Its dual-engine database layer keeps the same application usable on traditional PHP hosting and serverless Vercel deployments.
                    </p>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-xs opacity-60 mb-1'>Stack</p>
                <div className='flex flex-row flex-wrap gap-2 items-center'>
                    {stack.map((item, index) => (
                        <React.Fragment key={item}>
                            <p className='text-xs'>{item}</p>
                            {index !== stack.length - 1 && <div className='w-1 h-1 rounded-full bg-white' />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

const StorySection = ({ title, subtitle, detail, images, icon: Icon, color, setProgress }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["-100px start", "end start"] });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", setProgress);
        return () => unsubscribe();
    }, [scrollYProgress, setProgress]);

    return (
        <motion.div ref={sectionRef} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col justify-center items-center space-y-4 py-5">
            <div className="bg-[#181818] p-5 rounded-xl border border-white/5 w-full">
                <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}><Icon size={18} /></div>
                    <div>
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-xs opacity-60">{subtitle}</p>
                    </div>
                </div>
                <p className="text-sm leading-relaxed opacity-90">{detail}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {images.map((image) => (
                    <figure key={image.src} className="space-y-2">
                        <img src={image.src} className="rounded-xl w-full h-auto border-[6px] border-white/10" alt={image.alt} />
                        <figcaption className="text-xs opacity-50 px-1">{image.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </motion.div>
    )
}

const ScrollProgressSections = () => {
    const [progress, setProgress] = useState([0, 0, 0, 0]);
    const updateProgress = (index) => (value) => {
        setProgress((current) => {
            const next = [...current];
            next[index] = value;
            return next;
        });
    };

    const sections = [
        {
            title: "The Public Feed",
            subtitle: "A focused reading experience for discovering articles",
            detail: "Blogify opens with a clean article feed that puts the content first. Readers can browse the latest stories, identify the author and category, scan summaries, and open the full post without fighting through a complicated interface. The category filter and search experience turn the home page into a useful archive rather than a static list, while server-side pagination keeps the feed efficient as the number of articles grows.",
            icon: PiArticle,
            color: "bg-orange-500/10 text-orange-400",
            images: [
                { src: "/assets/projects/Blogify/blog_project1.png", alt: "Blogify article feed and category filters", caption: "The public home feed combines article cards with category filtering for fast content discovery." },
                { src: "/assets/projects/Blogify/blog_project2.png", alt: "Blogify article listing", caption: "Article presentation keeps title, author, category, summary, and the reading action easy to scan." }
            ]
        },
        {
            title: "The Publishing Studio",
            subtitle: "From an empty form to a managed article library",
            detail: "Authors and editors get a practical publishing workflow for creating, editing, and deleting rich blog posts. The add-post view handles category selection, title and content entry, and cover-image uploads, while the content management side gives authorized users a clear overview of their existing work. This separation keeps creation simple for authors while preserving editorial control for the wider system.",
            icon: PiArticle,
            color: "bg-emerald-500/10 text-emerald-400",
            images: [
                { src: "/assets/projects/Blogify/blog_project3.png", alt: "Blogify add new post form", caption: "Publishing form for category selection, article content, and optional cover media." },
                { src: "/assets/projects/Blogify/blog_project7.png", alt: "Blogify manage posts panel", caption: "Manage Posts gives authorized users direct controls to view, edit, and delete articles." }
            ]
        },
        {
            title: "The Community Layer",
            subtitle: "Profiles, dashboards, and article discussions",
            detail: "Blogify treats readers as participants rather than anonymous page views. The profile dashboard surfaces identity, role, personal post and comment counts, and quick actions. On each article, the discussion area lets users add comments and follow the conversation. Administrators can moderate those comments, while profile and avatar support makes the experience feel like a real community system instead of a collection of disconnected PHP pages.",
            icon: PiUsers,
            color: "bg-blue-500/10 text-blue-300",
            images: [
                { src: "/assets/projects/Blogify/blog_project4.png", alt: "Blogify user dashboard", caption: "Personal dashboard with profile identity, role, post statistics, and quick account actions." },
                { src: "/assets/projects/Blogify/blog_project8.png", alt: "Blogify article comments view", caption: "Single-post view with cover media, article metadata, comments, and the add-comment form." }
            ]
        },
        {
            title: "The Control Plane",
            subtitle: "RBAC, moderation, and deployment flexibility",
            detail: "The platform's strongest engineering feature is the control layer behind the UI. Admin, Author, Editor, and User roles determine what each person can see and change. Administrators can manage authors, moderate posts and comments, and review system activity from the dashboard. Underneath, prepared PDO statements protect database access, password_hash and password_verify provide secure credential handling with legacy migration, and the dual MySQL/SQLite architecture lets Blogify move from XAMPP or WAMP hosting to Vercel serverless deployment without rewriting the application.",
            icon: PiShieldCheck,
            color: "bg-purple-500/10 text-purple-300",
            images: [
                { src: "/assets/projects/Blogify/blog_project5.png", alt: "Blogify admin profile and author management", caption: "Admin dashboard controls for profile updates, author accounts, notifications, and platform operations." },
                { src: "/assets/projects/Blogify/blog_project6.png", alt: "Blogify admin post management", caption: "System-wide post management and moderation surface for keeping published content healthy." }
            ]
        }
    ];

    return (
        <div className="relative">
            <div className="flex sticky top-0 pt-5 z-40 flex-row items-center gap-2">
                {progress.map((value, index) => (
                    <React.Fragment key={index}>
                        <motion.div className={`flex items-center justify-center min-w-12 min-h-12 rounded-full transition-all duration-300 ${value > 0 ? 'bg-white text-black' : 'bg-[#242424]'}`}><p className="font-medium">{index + 1}</p></motion.div>
                        {index < progress.length - 1 && <motion.div className="w-full h-1 rounded-full bg-[#242424]"><motion.div className="h-full rounded-full bg-white" style={{ width: `${value * 100}%` }} /></motion.div>}
                    </React.Fragment>
                ))}
            </div>
            <div className="flex flex-col gap-8">
                {sections.map((section, index) => <StorySection key={section.title} {...section} setProgress={updateProgress(index)} />)}
            </div>
        </div>
    )
}

export const Cta = () => (
    <div className='pb-20 mt-8'>
        <div className="bg-[#181818] p-8 flex flex-row gap-2 items-center space-y-3 rounded-xl border border-white/5">
            <div className='space-y-2'>
                <p className="text-2xl font-bold capitalize">Let's build your next publishing platform</p>
                <p className="text-sm text-balance opacity-60">Need a content system with roles, moderation, search, and a reliable publishing workflow? Let's talk.</p>
                <div className="pt-2"><EmailBtn /></div>
            </div>
        </div>
    </div>
)

const EmailBtn = () => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsCopied(false), 2000);
        return () => clearTimeout(timer);
    }, [isCopied]);

    const handleCopy = () => {
        confetti({ particleCount: 50, spread: 360, ticks: 50, gravity: 0, startVelocity: 30, colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8'], shapes: ['star'] });
        copy("usmanrasheed.dev@gmail.com");
        setIsCopied(true);
    };

    return (
        <div className='bg-white text-black flex-col w-full max-w-[100px] min-h-[28px] flex justify-center items-center rounded-lg text-sm overflow-hidden cursor-pointer relative'>
            <motion.div initial={{ y: isCopied ? -100 : 0 }} animate={{ y: isCopied ? -100 : 0 }} transition={{ duration: 0.3 }} onClick={handleCopy} className='flex flex-row gap-1 py-1 px-2 justify-center absolute top-0 items-center font-medium'><TbCopy /> Email</motion.div>
            <motion.div initial={{ y: isCopied ? 0 : -100 }} animate={{ y: isCopied ? 0 : -100 }} transition={{ duration: 0.3 }} className='flex flex-row gap-1 py-1 px-2 absolute top-0 justify-center items-center font-medium'><MdDone /> Copied</motion.div>
        </div>
    )
}
