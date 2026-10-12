import Link from "next/link";
import { ArrowRight, BarChart3, Users } from "lucide-react";

const features = [
    {
        icon: Users,
        title: "Connecting Talent with Opportunity",
        text: "We bridge the gap between skilled professionals and forward-thinking companies, ensuring the right fit for long-term success.",
    },
    {
        icon: BarChart3,
        title: "Your Partner in Workforce Success",
        text: "We provide strategic HR solutions that help businesses grow, improve workforce performance, and create lasting impact.",
    },
];

const IMG_MAIN =
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80";
const IMG_TOP =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80";
const IMG_BOTTOM =
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80";

function DotsSvg({ className = "" }: { className?: string }) {
    const dots = [];
    for (let r = 0; r < 7; r++) {
        for (let c = 0; c < 6; c++) {
            dots.push(<circle key={`${r}-${c}`} cx={4 + c * 17} cy={4 + r * 12.5} r="1.6" />);
        }
    }
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 90 80"
            className={className}
            fill="#cfd8e6"
            xmlns="http://www.w3.org/2000/svg"
        >
            {dots}
        </svg>
    );
}

function TriangleSvg({ className = "" }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 108 108"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon points="0,0 0,108 108,108" fill="#dde5f4" />
        </svg>
    );
}

function CircleSvg({ className = "" }: { className?: string }) {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 82 82"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="41" cy="41" r="41" fill="#e3e9f5" />
        </svg>
    );
}

export default function About() {
    return (
        <section className="relative overflow-hidden bg-[#f8faff] py-10 lg:py-10">
            <TriangleSvg className="pointer-events-none absolute bottom-0 left-0 h-20 w-20 lg:h-28 lg:w-28" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
                <div className="relative mx-auto aspect-[640/615] w-full max-w-[640px]">
                    <div
                        aria-hidden="true"
                        className="absolute left-[27%] top-0 h-[27%] w-[18%] bg-white"
                    />

                    <DotsSvg className="absolute left-[2%] top-[3%] w-[14%]" />

                    <CircleSvg className="absolute left-[61%] top-[86%] w-[13%]" />

                    <div className="absolute left-[44.5%] top-[2%] h-[73%] w-[54%] overflow-hidden rounded-2xl shadow-sm">
                        <img
                            src={IMG_MAIN}
                            alt="Smiling HR consultant holding a tablet"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute left-0 top-[25%] h-[40.5%] w-[44.5%] rounded-[22px] bg-white" />
                    <div className="absolute left-0 top-[62.5%] h-[37.5%] w-[59%] rounded-[22px] bg-white" />

                    <div className="absolute left-[2%] top-[27%] h-[36.4%] w-[40.5%] overflow-hidden rounded-2xl">
                        <img
                            src={IMG_TOP}
                            alt="Team meeting in a modern office"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute left-[2%] top-[65%] h-[33.3%] w-[55.5%] overflow-hidden rounded-2xl">
                        <img
                            src={IMG_BOTTOM}
                            alt="Colleagues collaborating around a laptop"
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div className="absolute left-[59%] top-[77%] flex h-[17.7%] w-[39.5%] items-center justify-center gap-3 rounded-xl bg-primary px-3 text-white shadow-md sm:gap-5">
                        <span className="text-3xl font-medium leading-none sm:text-5xl lg:text-6xl">25</span>
                        <span aria-hidden="true" className="h-3/5 w-px bg-white/40" />
                        <span className="text-xs leading-tight sm:text-lg">
                            Years of
                            <br />
                            Experience
                        </span>
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-3">
                        <span aria-hidden="true" className="h-0.5 w-8 bg-primary" />
                        <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            About Us
                        </span>
                    </div>

                    <h2 className="mt-5 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
                        Empowering Careers
                        <span className="block text-primary">Building Stronger Businesses</span>
                    </h2>

                    <p className="mt-6 max-w-xl leading-relaxed text-slate-600">
                        At Workora, we connect talent with opportunity, fostering growth, success, and a
                        brighter future for individuals and businesses alike. Our people-first approach helps
                        organizations build high-performing teams and enables professionals to achieve their
                        career goals.
                    </p>

                    <ul className="mt-8 space-y-6">
                        {features.map(({ icon: Icon, title, text }) => (
                            <li key={title} className="flex items-start gap-5">
                                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Icon size={26} aria-hidden="true" />
                                </span>
                                <div>
                                    <h3 className="text-lg font-semibold text-navy">{title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href="/about"
                        className="mt-9 inline-flex items-center gap-3 rounded-md bg-primary px-7 py-3.5 font-medium text-white shadow-sm transition-colors hover:bg-navy"
                    >
                        More About Us
                        <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}