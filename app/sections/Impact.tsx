import { BarChart3, FileText, Handshake, Users } from "lucide-react";

const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: FileText, value: "12K+", label: "Candidates Placed" },
    { icon: BarChart3, value: "25+", label: "Years of Experience" },
    { icon: Handshake, value: "98%", label: "Client Satisfaction" },
];

const BG_IMAGE =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80";

export default function Impact() {
    return (
        <section className="relative isolate overflow-hidden bg-navy  text-white py-10 lg:py-10">
            <img
                src={BG_IMAGE}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div aria-hidden="true" className="absolute inset-0 bg-navy/75" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <div className="flex items-center gap-3">
                            <span aria-hidden="true" className="h-0.5 w-8 bg-[#6d97e8]" />
                            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#8fb0f0]">
                                Our Impact
                            </span>
                        </div>

                        <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
                            Creating Opportunities
                            <span className="block text-[#6d97e8]">Building Brighter Futures</span>
                        </h2>
                    </div>

                    <p className="max-w-sm text-sm leading-relaxed text-white/85">
                        Our numbers reflect the trust businesses and professionals place in us, and the
                        positive impact we create together.
                    </p>
                </div>

                <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-0">
                    {stats.map(({ icon: Icon, value, label }, i) => (
                        <li
                            key={label}
                            className={`lg:px-8 ${i === 0 ? "lg:pl-0" : "lg:border-l lg:border-white/25"}`}
                        >
                            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm">
                                <Icon size={26} className="text-[#8fb0f0]" aria-hidden="true" />
                            </span>

                            <p className="mt-5 text-5xl font-semibold leading-none sm:text-6xl">{value}</p>

                            <p className="mt-4 flex items-center gap-3 text-base text-white/90">
                                <span aria-hidden="true" className="h-0.5 w-7 bg-[#6d97e8]" />
                                {label}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}