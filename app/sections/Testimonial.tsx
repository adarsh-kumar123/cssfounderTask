import { Quote, Star } from "lucide-react";

const BG_IMAGE =
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1920&q=80";

const avatar = (id: string) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&h=200&q=80`;

const testimonials = [
    {
        text: "Workora helped us find the right talent quickly and efficiently. Their professionalism and understanding of our requirements made the entire hiring process seamless.",
        name: "Arjun Mehta",
        role: "HR Manager, TechNova Solutions",
        image: avatar("photo-1560250097-0b93528c311a"),
    },
    {
        text: "The team at Workora truly understands career goals. They guided me at every step and helped me secure a role that perfectly matches my skills and aspirations.",
        name: "Priya Sharma",
        role: "Marketing Executive",
        image: avatar("photo-1573496359142-b8d87734a5a2"),
    },
    {
        text: "We have been working with Workora for over 3 years. Their commitment, speed, and quality of candidates have been exceptional. Highly recommended!",
        name: "Karan Malhotra",
        role: "Director, GrowthEdge Media",
        image: avatar("photo-1472099645785-5658abf4ff4e"),
    },
];

export default function Testimonials() {
    return (
        <section className="relative isolate overflow-hidden bg-[#0b1a3d] py-10 text-white lg:py-10">
            <img
                src={BG_IMAGE}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[70%_20%]"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,22,56,.88)_0%,rgba(12,28,68,.86)_55%,rgba(9,22,56,.94)_100%)]"
            />
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,22,56,.7)_0%,rgba(9,22,56,0)_35%,rgba(9,22,56,0)_65%,rgba(9,22,56,.7)_100%)]"
            />

            <div className="relative z-10 mx-auto max-w-6xl px-4 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="flex items-center justify-center gap-4">
                        <span aria-hidden="true" className="h-0.5 w-9 bg-white" />
                        <span className="text-sm font-semibold uppercase tracking-[0.15em]">
                            Testimonials
                        </span>
                        <span aria-hidden="true" className="h-0.5 w-9 bg-white" />
                    </div>

                    <h2 className="mt-4 text-[1.7rem] font-bold leading-tight sm:text-4xl lg:text-[2.6rem]">
                        <span className="block whitespace-nowrap">Success Stories from</span>
                        <span className="block whitespace-nowrap">
                            Our <span className="text-[#2f6df0]">Clients and Candidates</span>
                        </span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
                        Trusted by businesses and professionals, our services have made meaningful impact on
                        careers and organizations.
                    </p>
                </div>

                <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((item) => (
                        <li
                            key={item.name}
                            className="flex flex-col rounded-xl bg-white p-5 text-slate-600 shadow-lg"
                        >
                            <Quote
                                size={26}
                                fill="currentColor"
                                className="rotate-180 text-[#2f6df0]/70"
                                aria-hidden="true"
                            />

                            <p className="mt-2 flex-1 text-sm leading-snug">{item.text}</p>

                            <span aria-hidden="true" className="mt-3 block h-0.5 w-9 bg-primary" />

                            <div className="mt-3 flex items-center gap-3">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="h-14 w-14 shrink-0 rounded-full border-2 border-slate-100 object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-navy">{item.name}</p>
                                    <p className="text-xs text-slate-500">{item.role}</p>
                                    <div
                                        className="mt-1.5 flex gap-1 text-[#2f6df0]"
                                        aria-label="5 out of 5 stars"
                                    >
                                        {[0, 1, 2, 3, 4].map((i) => (
                                            <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>

                <div aria-hidden="true" className="mt-7 flex items-center justify-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#2f6df0]" />
                    <span className="h-2 w-2 rounded-full bg-white/40" />
                    <span className="h-2 w-2 rounded-full bg-white/40" />
                </div>
            </div>
        </section>
    );
}