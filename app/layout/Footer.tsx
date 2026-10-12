import { ArrowUp, ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/app/data/site";
import { socialIcons } from "@/app/common/SocialIcon";

const BG_IMAGE =
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80";

const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Team", href: "/team" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
];

const services = [
    "Talent Acquisition",
    "Executive Search",
    "Training & Development",
    "HR Consulting",
    "Staffing Solutions",
    "Career Guidance",
    "HR Outsourcing",
    "Recruitment Process Outsourcing",
];

const usefulLinks = [
    { label: "FAQs", href: "/faqs" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Career", href: "/career" },
    { label: "Gallery", href: "/gallery" },
    { label: "Sitemap", href: "/sitemap" },
];

const bottomLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Sitemap", href: "/sitemap" },
];

function LogoMark() {
    return (
        <svg viewBox="0 0 64 44" className="h-11 w-16" fill="none" aria-hidden="true">
            <path
                d="M2 10 C12 8 18 14 22 26 C24 32 27 36 31 36 C35 36 38 30 40 24 L46 8 C50 10 54 10 62 8 C56 16 52 26 48 36 C46 40 42 43 37 43 C32 43 28 40 25 34 C22 40 18 43 13 43 C9 43 6 40 5 35 Z"
                fill="#ffffff"
            />
            <circle cx="30" cy="5" r="4" fill="#9db8f5" />
            <circle cx="39" cy="4" r="3.2" fill="#c9d8fa" />
        </svg>
    );
}

function CornerArcs() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 110 60"
            className="pointer-events-none absolute bottom-0 left-0 h-14 w-28 lg:h-[60px] lg:w-[110px]"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0 C 55 4 100 28 110 60 L0 60 Z" fill="#14388f" />
            <path d="M0 18 C 40 22 78 38 92 60 L0 60 Z" fill="#2563f0" />
        </svg>
    );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h3 className="whitespace-nowrap text-xl font-semibold">{children}</h3>
            <span aria-hidden="true" className="mt-3 block h-0.5 w-9 bg-[#2f6df0]" />
        </>
    );
}

function LinkItem({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            className="inline-flex items-center gap-2 whitespace-nowrap transition-colors hover:text-[#8fb0f0]"
        >
            <ChevronRight size={15} aria-hidden="true" />
            {children}
        </a>
    );
}

const iconCircle = "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f55c9]";

export default function Footer() {
    return (
        <footer className="relative isolate overflow-hidden bg-[#08183d] text-white">
            <img
                src={BG_IMAGE}
                alt=""
                className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#08183d_0%,#08183d_40%,rgba(8,24,61,.92)_60%,rgba(8,24,61,.82)_100%)]"
            />

            <div className="relative overflow-hidden">
                <CornerArcs />

                <div className="relative mx-auto max-w-[1345px] px-4 pb-10 pt-10 xl:px-[75px]">
                    <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-[310fr_180fr_273fr_194fr_238fr] xl:gap-0">
                        <div className="xl:pr-10">
                            <a href="/" className="inline-flex flex-col" aria-label="Workora HR Consultancy">
                                <span className="flex items-center gap-1">
                                    <LogoMark />
                                    <span className="text-[2.1rem] font-bold leading-none tracking-tight">
                                        Workora
                                    </span>
                                </span>
                                <span className="ml-16 mt-0.5 flex items-center gap-2 text-[8px] uppercase tracking-[0.25em] text-white/80">
                                    <span className="h-px w-6 bg-white/50" />
                                    HR Consultancy
                                    <span className="h-px w-6 bg-white/50" />
                                </span>
                            </a>

                            <p className="mt-6 max-w-[290px] text-[15px] leading-[1.4] text-white/90">
                                Connecting the right talent with the right opportunities. We help businesses
                                build stronger teams and empower professionals to achieve their career goals.
                            </p>

                            <ul className="mt-7 flex items-center gap-3">
                                {siteConfig.socials.map((s) => {
                                    const Icon = socialIcons[s.icon];
                                    return (
                                        <li key={s.label}>
                                            <a
                                                href={s.href}
                                                aria-label={s.label}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#132a5f] transition-colors hover:bg-[#2f6df0]"
                                            >
                                                <Icon />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>

                        <div className="self-start xl:border-l xl:border-dashed xl:border-white/20 xl:pl-[34px]">
                            <ColumnTitle>Quick Links</ColumnTitle>
                            <ul className="mt-5 space-y-1 text-[15px] leading-6 text-white/90 xl:space-y-1">
                                {quickLinks.map((l) => (
                                    <li key={l.label} className="py-[2px]">
                                        <LinkItem href={l.href}>{l.label}</LinkItem>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="self-start xl:border-l xl:border-dashed xl:border-white/20 xl:pl-9">
                            <ColumnTitle>Our Services</ColumnTitle>
                            <ul className="mt-5 text-[15px] leading-6 text-white/90">
                                {services.map((label) => (
                                    <li key={label} className="py-[0.75px]">
                                        <LinkItem href="/services">{label}</LinkItem>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="self-start xl:border-l xl:border-dashed xl:border-white/20 xl:pl-[34px]">
                            <ColumnTitle>Useful Links</ColumnTitle>
                            <ul className="mt-5 space-y-1 text-[15px] leading-6 text-white/90">
                                {usefulLinks.map((l) => (
                                    <li key={l.label} className="py-[2.5px]">
                                        <LinkItem href={l.href}>{l.label}</LinkItem>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="self-start xl:border-l xl:border-dashed xl:border-white/20 xl:pl-[35px]">
                            <ColumnTitle>Get In Touch</ColumnTitle>
                            <ul className="mt-5 space-y-3.5 text-[15px] leading-snug text-white/90">
                                <li className="flex items-center gap-4 whitespace-nowrap">
                                    <span className={iconCircle}>
                                        <MapPin size={18} fill="currentColor" aria-hidden="true" />
                                    </span>
                                    <span>
                                        123 Business Avenue,
                                        <br />
                                        New Delhi, India 110001
                                    </span>
                                </li>
                                <li className="flex items-center gap-4 whitespace-nowrap">
                                    <span className={iconCircle}>
                                        <Phone size={17} fill="currentColor" aria-hidden="true" />
                                    </span>
                                    <a href="tel:+919876543210" className="hover:text-[#8fb0f0]">
                                        +91 98765 43210
                                    </a>
                                </li>
                                <li className="flex items-center gap-4 whitespace-nowrap">
                                    <span className={iconCircle}>
                                        <Mail
                                            size={18}
                                            fill="currentColor"
                                            className="[&>path]:stroke-[#1f55c9]"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    <a href="mailto:info@workora.com" className="hover:text-[#8fb0f0]">
                                        info@workora.com
                                    </a>
                                </li>
                                <li className="flex items-center gap-4 whitespace-nowrap">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2f6df0]">
                                        <Clock size={18} aria-hidden="true" />
                                    </span>
                                    <span>
                                        Mon - Sat: 9:00 AM - 6:00 PM
                                        <br />
                                        Sunday: Closed
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative border-t border-white/15 bg-[#071538]/80">
                <div className="mx-auto flex max-w-[1345px] flex-col items-start justify-between gap-4 px-4 py-4 text-sm sm:flex-row sm:items-center xl:px-[75px]">
                    <p className="text-white/90">
                        © 2026 <span className="font-semibold">Workora.</span> All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-5">
                        <ul className="flex flex-wrap items-center">
                            {bottomLinks.map((l, i) => (
                                <li key={l.label} className={i > 0 ? "ml-4 border-l border-white/25 pl-4" : ""}>
                                    <a href={l.href} className="text-white/90 transition-colors hover:text-[#8fb0f0]">
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#"
                            aria-label="Back to top"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f55c9] transition-colors hover:bg-[#2f6df0]"
                        >
                            <ArrowUp size={20} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}