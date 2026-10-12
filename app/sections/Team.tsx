const unsplash = (id: string) =>
    `https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&h=700&q=80`;

const team = [
    {
        name: "Ryan Carte",
        role: "HR Director",
        image: unsplash("photo-1560250097-0b93528c311a"),
    },
    {
        name: "James Mitchell",
        role: "Talent Manager",
        image: unsplash("photo-1573496359142-b8d87734a5a2"),
    },
    {
        name: "Ethan Brooks",
        role: "Payroll Specialist",
        image: unsplash("photo-1472099645785-5658abf4ff4e"),
    },
    {
        name: "Daniel Foster",
        role: "Compliance Officer",
        image: unsplash("photo-1580489944761-15a19d654956"),
    },
];

export default function Team() {
    return (
        <section className="bg-white py-10 ">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="flex items-center justify-center gap-4">
                        <span aria-hidden="true" className="h-0.5 w-9 bg-primary" />
                        <span className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                            Our Team
                        </span>
                        <span aria-hidden="true" className="h-0.5 w-9 bg-primary" />
                    </div>

                    <h2 className="mt-4 text-3xl font-bold leading-tight text-navy sm:text-4xl lg:text-5xl">
                        Our People <span className="text-primary">Make the Difference</span>
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-slate-600">
                        A passionate team of experts dedicated to connecting talent with opportunity and
                        driving success for individuals and businesses.
                    </p>
                </div>

                <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {team.map((member) => (
                        <li
                            key={member.name}
                            className="overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(20,39,90,0.08)]"
                        >
                            <div className="aspect-[4/3.7] overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="h-full w-full object-cover object-top"
                                />
                            </div>

                            <div className="px-5 pb-5 pt-4">
                                <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
                                <span aria-hidden="true" className="mt-2 block h-0.5 w-9 bg-primary" />
                                <p className="mt-2 text-sm text-slate-500">{member.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}