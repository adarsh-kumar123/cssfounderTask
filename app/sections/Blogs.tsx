import Link from "next/link";
import { ArrowRight } from "lucide-react";

const unsplash = (id: string) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&h=450&q=80`;

const blogs = [
    {
        date: "12 AUG 2026",
        title: "The Future of Employee Engagement – What's Next?",
        text: "Discover how evolving workplace trends, technology, and people-first strategies are shaping the future of employee engagement.",
        image: unsplash("photo-1573496359142-b8d87734a5a2"),
        href: "/blogs/future-of-employee-engagement",
    },
    {
        date: "08 AUG 2026",
        title: "How to Handle Employee Conflict Effectively",
        text: "Learn practical strategies to identify, address, and resolve workplace conflicts for a more positive and productive team.",
        image: unsplash("photo-1522071820081-009f0129c71c"),
        href: "/blogs/handle-employee-conflict",
    },
    {
        date: "03 AUG 2026",
        title: "Adapting to Remote Work Best Practices for HR",
        text: "Explore best practices, tools, and strategies to manage remote teams effectively and keep your workforce connected.",
        image: unsplash("photo-1600880292203-757bb62b4baf"),
        href: "/blogs/remote-work-best-practices",
    },
];

export default function Blogs() {
    return (
        <section className="bg-white py-10 ">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="flex items-center justify-center gap-4">
                        <span aria-hidden="true" className="h-0.5 w-14 bg-primary" />
                        <span className="text-sm font-semibold uppercase tracking-[0.1em] text-primary">
                            Our Blogs
                        </span>
                        <span aria-hidden="true" className="h-0.5 w-14 bg-primary" />
                    </div>

                    <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
                        Latest Insights &amp; <span className="text-primary">HR Trends</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-slate-600">
                        Explore expert insights, practical tips, and the latest trends to help you build
                        stronger teams and smarter workplaces.
                    </p>
                </div>

                <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog) => (
                        <li
                            key={blog.title}
                            className="rounded-xl bg-white p-3.5 shadow-[0_4px_20px_rgba(20,39,90,0.1)]"
                        >
                            <div className="relative aspect-[15/8] overflow-hidden rounded-t-lg">
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="h-full w-full object-cover"
                                />
                                <span className="absolute bottom-3 left-3 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-white">
                                    {blog.date}
                                </span>
                            </div>

                            <div className="px-5 pb-3 pt-4">
                                <h3 className="text-xl font-semibold leading-snug text-navy">
                                    {blog.title}
                                </h3>
                                <p className="mt-2 text-[15px] leading-snug text-slate-600">{blog.text}</p>
                                <Link
                                    href={blog.href}
                                    className="mt-5 inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-navy"
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