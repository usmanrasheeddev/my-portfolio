"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useScroll, motion } from "framer-motion";
import Footer from '@/app/components/footer/Footer';
import FooterClose from '@/app/components/footer/FooterClose';
import { BiChevronLeft } from 'react-icons/bi';
import { PiSuitcaseLight, PiTruck, PiMapPin, PiShieldCheck, PiPackage } from "react-icons/pi";
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
    const stack = [
        "React 19", "TypeScript", "Vite", "React Router", "Tailwind CSS", "shadcn/ui",
        "GSAP", "Lenis", "Leaflet", "React Hook Form", "Zod", "Supabase", "Auth0", "Resend"
    ];

    return (
        <div>
            <div className='flex flex-col md:flex-row gap-5 justify-between items-start'>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center opacity-60 mb-1'><PiSuitcaseLight /> <span>Project</span></div>
                    <p className='font-bold text-lg'>Movers Packers Dubai</p>
                </div>
                <div className='w-full md:w-1/2'>
                    <div className='text-xs flex flex-row gap-1 items-center mb-1 opacity-60'><span>Introduction</span></div>
                    <p className='text-xs text-balance font-medium leading-relaxed'>
                        A production-ready moving and packing service platform built for Dubai. It combines a conversion-focused public website with a complete booking workflow, customer authentication, address selection, photo uploads, order tracking, email notifications, and a protected admin dashboard. The product is designed around a cash-on-delivery service model, so customers can book confidently without a payment gateway.
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
            title: "The Front Door",
            subtitle: "A premium service brand built for immediate trust",
            detail: "The public experience starts with a focused promise: Dubai's easiest move. The landing page uses a strong visual hero, clear phone and booking actions, bilingual messaging, proof points such as the 4.9 Google rating and 500+ completed moves, and a direct explanation of the service. The visual direction balances a premium feel with the reassurance customers need when they are trusting a team with their home, office, or valuable items.",
            icon: PiTruck,
            color: "bg-orange-500/10 text-orange-400",
            images: [
                { src: "/assets/projects/movers&packers/N.png", alt: "Movers Packers Dubai landing page hero", caption: "Landing page hero with service promise, phone CTA, booking CTA, and trust signals." },
                { src: "/assets/projects/movers&packers/Screenshot 2026-05-30 010801.png", alt: "Movers Packers Dubai about page", caption: "About section positioning the company around careful handling, clean wrapping, and an effortless process." }
            ]
        },
        {
            title: "The Service Catalog",
            subtitle: "A clear path from a customer need to the right service",
            detail: "The service layer gives customers a practical way to choose what they need without forcing them through a generic contact flow. Apartment movers, villa movers, office movers, junk removal, bike and car delivery, and large item delivery each have their own context and starting price. This makes the offer easy to scan while keeping the next action visible through Learn more and Book Now routes.",
            icon: PiPackage,
            color: "bg-emerald-500/10 text-emerald-400",
            images: [
                { src: "/assets/projects/movers&packers/Screenshot 2026-05-28 212152.png", alt: "Movers Packers Dubai services grid", caption: "Service catalog with category-specific descriptions, icons, starting prices, and booking entry points." }
            ]
        },
        {
            title: "The Booking Journey",
            subtitle: "Turning a service request into structured operational data",
            detail: "The multi-step booking flow collects the information a moving team actually needs: selected service, schedule, pickup and dropoff addresses, item details, customer contact information, and optional photos. Authentication through Auth0 protects customer bookings, while Leaflet map selection and optional Google Places autocomplete reduce address mistakes. The cash-on-delivery model keeps the journey focused on accurate scheduling and a reliable follow-up rather than payment friction.",
            icon: PiMapPin,
            color: "bg-blue-500/10 text-blue-300",
            images: [
                { src: "/assets/projects/movers&packers/Screenshot 2026-05-28 212444.png", alt: "Movers Packers Dubai booking detail modal", caption: "A complete booking record brings pickup, dropoff, schedule, item details, customer data, and uploaded photos together." },
                { src: "/assets/projects/movers&packers/Screenshot 2026-05-28 212519.png", alt: "Movers Packers Dubai booking workflow screen", caption: "The booking workflow is designed to preserve the details needed for a smooth move from request to delivery." }
            ]
        },
        {
            title: "The Control Room",
            subtitle: "Status, communication, and service delivery visibility",
            detail: "Once a booking is submitted, the admin side becomes the operational control room. Protected access lets the team view and filter submissions, inspect customer requests and photo galleries, and update the order state through Pending, Confirmed, In Transit, and Delivered. Resend handles booking and contact emails, Supabase provides database, authentication, and storage capabilities, and the tracking experience gives customers a simple view of what is happening next.",
            icon: PiShieldCheck,
            color: "bg-purple-500/10 text-purple-300",
            images: [
                { src: "/assets/projects/movers&packers/Screenshot 2026-05-28 212336.png", alt: "Movers Packers Dubai admin dashboard bookings table", caption: "Admin dashboard for filtering bookings, seeing schedules and customers, and changing status." }
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

export const Cta = () => (
    <div className='pb-20 mt-8'>
        <div className="bg-[#181818] p-8 flex flex-row gap-2 items-center space-y-3 rounded-xl border border-white/5">
            <div className='space-y-2'>
                <p className="text-2xl font-bold capitalize">Let's build your next service platform</p>
                <p className="text-sm text-balance opacity-60">Need a booking flow, operations dashboard, or customer-facing service experience? Let's talk.</p>
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
            <motion.div initial={{ y: isCopied ? -100 : 0 }} animate={{ y: isCopied ? -100 : 0 }} transition={{ duration: 0.3 }} onClick={handleCopy} className='flex flex-row gap-1 py-1 px-2 justify-center absolute top-0 items-center font-medium'>
                <TbCopy /> Email
            </motion.div>
            <motion.div initial={{ y: isCopied ? 0 : -100 }} animate={{ y: isCopied ? 0 : -100 }} transition={{ duration: 0.3 }} className='flex flex-row gap-1 py-1 px-2 absolute top-0 justify-center items-center font-medium'>
                <MdDone /> Copied
            </motion.div>
        </div>
    )
}
