import Link from "next/link";
import { ArrowRight } from "lucide-react";

const unsplash = (id: string) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;

const services = [
    {
        title: "Talent Acquisition",
        text: "Helping businesses find the right talent with a strategic and streamlined hiring approach.",
        image: unsplash("photo-1521791136064-7986c2920216"),
        href: "/services/talent-acquisition",
    },
    {
        title: "Executive Search",
        text: "Identifying and placing leadership talent to drive business growth and long-term success.",
        image: unsplash("photo-1573496359142-b8d87734a5a2"),
        href: "/services/executive-search",
    },
    {
        title: "Training & Development",
        text: "Building skills and capabilities through tailored learning and development programs.",
        image: unsplash("photo-1552664730-d307ca884978"),
        href: "/services/training-development",
    },
    {
        title: "HR Consulting",
        text: "Strategic HR solutions to improve organizational performance and build stronger teams.",
        image: unsplash("photo-1600880292203-757bb62b4baf"),
        href: "/services/hr-consulting",
    },
    {
        title: "Payroll Management",
        text: "Accurate and compliant payroll processing so your team is always paid on time.",
        image: unsplash("photo-1454165804606-c3d57bc86b40"),
        href: "/services/payroll-management",
    },
    {
        title: "Employee Engagement",
        text: "Creating a positive workplace culture that keeps your people motivated and committed.",
        image: unsplash("photo-1522071820081-009f0129c71c"),
        href: "/services/employee-engagement",
    },
    {
        title: "Compliance & Policy",
        text: "Keeping your business aligned with labour laws through clear and practical HR policies.",
        image: unsplash("photo-1556761175-5973dc0f32e7"),
        href: "/services/compliance-policy",
    },
    {
        title: "Workforce Planning",
        text: "Data-driven planning to match your workforce with where your business is heading.",
        image: unsplash("photo-1542744173-8e7e53415bb0"),
        href: "/services/workforce-planning",
    },
];

export default function Services() {
    return (
        <section className="bg-white py-10 lg:py-10">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="flex items-center justify-center gap-4">
                        <span aria-hidden="true" className="h-0.5 w-10 bg-primary" />
                        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                            Our Services
                        </span>
                        <span aria-hidden="true" className="h-0.5 w-10 bg-primary" />
                    </div>

                    <h2 className="mt-5 text-4xl font-semibold leading-tight text-navy sm:text-5xl">
                        Comprehensive HR Solutions
                        <span className="block text-primary">for a Stronger Tomorrow</span>
                    </h2>

                    <p className="mt-5 text-slate-600">
                        We provide end-to-end HR services designed to help businesses attract, develop and
                        retain the right talent while empowering professionals to achieve their career goals.
                    </p>
                </div>

                <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <li
                            key={service.title}
                            className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
                        >
                            <div className="aspect-[16/9] overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
                                <h3 className="text-xl font-semibold text-navy">{service.title}</h3>
                                <span aria-hidden="true" className="mt-2 block h-0.5 w-10 bg-primary" />
                                <p className="mt-3 flex-1 text-[15px] leading-snug text-slate-600">
                                    {service.text}
                                </p>
                                <Link
                                    href={service.href}
                                    className="mt-4 inline-flex w-fit items-center gap-3 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy"
                                >
                                    Read More
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}