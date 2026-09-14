"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft } from 'react-icons/bi';
import { PiSuitcaseLight, PiBookOpen, PiCertificate, PiTree, PiBell, PiUsers, PiLayout } from "react-icons/pi";
import { TbCopy } from "react-icons/tb";
import { MdDone } from "react-icons/md";
import confetti from 'canvas-confetti';
import copy from 'copy-to-clipboard';

const page = () => {

    const containerRef = useRef(null);
    const [open, setOpen] = useState(false)

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    useEffect(() => {
        scrollYProgress.on("change", (e) => {
            if (e >= 0.98) {
                setOpen(true);
            } else {
                setOpen(false);
            }
        });
    }, []);

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

const StorySection = ({ title, subtitle, detail, images, icon: Icon, color, setProgress }) => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["-100px start", "end start"]
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", setProgress);
        return () => unsubscribe();
    }, [scrollYProgress, setProgress]);

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center items-center space-y-4 py-5"
        >
            <div className="bg-[#181818] p-5 rounded-xl border border-white/5 w-full">
                <div className="flex items-center gap-2 mb-2">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
                        <Icon size={18} />
                    </div>
                    <div>
                        <p className="text-sm font-medium">{title}</p>
                        <p className="text-xs opacity-60">{subtitle}</p>
                    </div>
                </div>
                <p className="text-sm leading-relaxed opacity-90">{detail}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {images.map((image) => (
                    <img
                        key={image.src}
                        src={image.src}
                        className="rounded-xl w-full h-auto border-[6px] border-white/10"
                        alt={image.alt}
                    />
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
            title: "The Foundation",
            subtitle: "A focused learning platform for a growing community",
            detail: "A Step Toward Haq began as a complete digital home for an Islamic education institute. The goal was to make Quran and Arabic learning easier to access, while giving the organization a structured way to present courses, guide students, and support families from their first visit through completion.",
            icon: PiBookOpen,
            color: "bg-emerald-500/10 text-emerald-400",
            images: [
                { src: "/assets/projects/a step toward haq/sth1.png", alt: "A Step Toward Haq homepage" },
                { src: "/assets/projects/a step toward haq/sth2.png", alt: "A Step Toward Haq services and course offerings" }
            ]
        },
        {
            title: "The Learning Journey",
            subtitle: "Courses, progress, tests, and certificates",
            detail: "The course experience is built around a clear learning journey. Students can choose structured programs such as Salaat and Ramadan, follow their completion status, take the required tests, and receive a Certificate of Qualification after meeting the course requirements. This turns a collection of lessons into a measurable and motivating path.",
            icon: PiCertificate,
            color: "bg-yellow-500/10 text-yellow-400",
            images: [
                { src: "/assets/projects/a step toward haq/sth3.png", alt: "Course certificate interface" },
                { src: "/assets/projects/a step toward haq/sth6.png", alt: "Student course progress dashboard" }
            ]
        },
        {
            title: "The Network",
            subtitle: "Referrals and visibility across the community",
            detail: "The platform also supports a referral-based community model. A visual tree makes each relationship easier to understand, helps identify broken referral chains, and gives users a transparent view of their network. Supporting screens keep referral information and important updates visible instead of burying them inside disconnected admin records.",
            icon: PiTree,
            color: "bg-purple-500/10 text-purple-300",
            images: [
                { src: "/assets/projects/a step toward haq/sth5.png", alt: "Referral tree interface" },
                { src: "/assets/projects/a step toward haq/sth7.png", alt: "Referral details dashboard" }
            ]
        },
        {
            title: "The Control Layer",
            subtitle: "Administration, records, and timely communication",
            detail: "Behind the student experience is an administration layer for managing users, roll numbers, contact details, course activity, and privileges. Notifications help surface referral issues and platform updates, while the admin views give the team the records and controls needed to operate the institute as the student community grows.",
            icon: PiUsers,
            color: "bg-blue-500/10 text-blue-300",
            images: [
                { src: "/assets/projects/a step toward haq/sth4.png", alt: "Admin management interface" },
                { src: "/assets/projects/a step toward haq/sth8.png", alt: "Notifications and community updates interface" }
            ]
        }
    ];

    return (
        <div className="relative">
            <div className="flex sticky top-0 pt-5 z-40 flex-row items-center gap-2">
                {progress.map((value, index) => (
                    <React.Fragment key={index}>
                        <motion.div className={`flex items-center justify-center min-w-12 min-h-12 rounded-full transition-all duration-300 ${value > 0 ? 'bg-white text-black' : 'bg-[#242424]'}`}>
                            <p className="font-medium">{index + 1}</p>
                        </motion.div>
                        {index < progress.length - 1 && (
                            <motion.div className="w-full h-1 rounded-full bg-[#242424]">
                                <motion.div className="h-full rounded-full bg-white" style={{ width: `${value * 100}%` }} />
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </div>
            <div className="flex flex-col gap-8">
                {sections.map((section, index) => (
                    <StorySection key={section.title} {...section} setProgress={updateProgress(index)} />
                ))}
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <a href='/' className='flex flex-row items-center gap-1 hover:opacity-80 transition-opacity'>
            <div>
                <BiChevronLeft size={22} />
            </div>
            <div>
                <p className='text-sm font-medium'>Usman Rasheed</p>
                <p className='text-xs opacity-60'>Full Stack Developer</p>
            </div>
        </a>
    )
}

const Title = () => {

    const stack = [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "PHP",
        "MySQL",
        "WhatsApp API",
    ];

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 justify-between items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center opacity-60 mb-1'><PiSuitcaseLight /> <span>Project</span></div>
                    <p className='font-bold text-lg'>A Step Toward Haq</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>Overview</span></div>
                    <p className='text-xs text-balance font-medium leading-relaxed'>
                        A full-stack Islamic education platform built for an online Quran and Arabic learning institute. It features structured courses, automated certificate generation, a referral tree system, an admin panel for managing students, course progress tracking, and real-time notifications — all designed to serve a growing global student community.
                    </p>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-xs opacity-60 mb-1'>Stack</p>
                <div className='flex flex-row flex-wrap gap-2 items-center'>
                    {stack.map((item, index) => (
                        <React.Fragment key={index}>
                            <p className='text-xs'>{item}</p>
                            {index !== stack.length - 1 && <div className='w-1 h-1 rounded-full bg-white' />}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const Cta = () => {
    return (
        <div className='pb-20 mt-8'>
            <div className="bg-[#181818] p-8 flex flex-row gap-2 items-center space-y-3 rounded-xl border border-white/5">
                <div className='space-y-2'>
                    <p className="text-2xl font-bold capitalize">
                        Let's build your next platform
                    </p>
                    <p className="text-sm text-balance opacity-60">
                        Need a custom education platform, admin dashboard, or a full-stack web app? Let's talk.
                    </p>
                    <div className="pt-2">
                        <EmailBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

const EmailBtn = () => {

    const shootConfetti = () => {
        var defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            colors: ['FFE400', 'FFBD00', 'E89400', 'FFCA6C', 'FDFFB8']
        };

        function shoot() {
            confetti({
                ...defaults,
                particleCount: 50,
                scalar: 1.4,
                shapes: ['star']
            });

            confetti({
                ...defaults,
                particleCount: 20,
                scalar: 0.95,
                shapes: ['circle']
            });
        }

        setTimeout(shoot, 0);
        setTimeout(shoot, 150);
        setTimeout(shoot, 250);
    }

    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsCopied(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [isCopied]);

    return (
        <div className='bg-white text-black flex-col w-full max-w-[100px] min-h-[28px] flex justify-center items-center rounded-lg text-sm overflow-hidden cursor-pointer relative'>
            <motion.div initial={{ y: isCopied ? -100 : 0, opacity: 1 }} animate={{ y: isCopied ? -100 : 0, opacity: 1 }} transition={{ type: "smooth", duration: 0.3, ease: "easeInOut" }} onClick={() => {
                shootConfetti();
                setIsCopied(true);
                copy("usmanrasheed.dev@gmail.com")
            }} className='flex flex-row gap-1 py-1 px-2 justify-center absolute top-0 items-center font-medium'>
                <TbCopy />  Email
            </motion.div>
            <motion.div initial={{ y: isCopied ? 0 : -100, opacity: 1 }} animate={{ y: isCopied ? 0 : -100, opacity: 1 }} transition={{ type: "smooth", duration: 0.3, ease: "easeInOut" }} className='flex flex-row gap-1 py-1 px-2 absolute top-0 justify-center items-center font-medium'>
                <MdDone />  Copied
            </motion.div>
        </div>
    )
}
