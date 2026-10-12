import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/app/data/site";
import { socialIcons } from "./SocialIcon";

export default function TopBar() {
    return (
        <div className="flex flex-col text-[15px] font-normal leading-snug text-white xl:flex-row">
            {/* Left - blue */}
            <div className="flex flex-col items-start gap-2 bg-primary px-4 py-3 sm:flex-row sm:items-center sm:gap-7 lg:px-6 xl:flex-[55]">
                <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
                >
                    <Phone size={22} fill="currentColor" aria-hidden="true" />
                    <span>HELP LINE: {siteConfig.phone}</span>
                </a>

                <span aria-hidden="true" className="hidden h-6 w-px bg-white/35 sm:block" />

                <span className="inline-flex items-center gap-3">
                    <Mail
                        size={24}
                        fill="currentColor"
                        className="[&>path]:stroke-primary"
                        aria-hidden="true"
                    />
                    <span>Open Hours: {siteConfig.hours}</span>
                </span>
            </div>

            {/* Right - navy */}
            <div className="hidden items-center justify-between gap-7 bg-navy py-3 pl-12 pr-6 xl:flex xl:flex-[45]">
                <span className="inline-flex items-center gap-3">
                    <MapPin
                        size={22}
                        fill="currentColor"
                        className="[&>circle]:fill-navy"
                        aria-hidden="true"
                    />
                    <span>{siteConfig.address}</span>
                </span>

                <span aria-hidden="true" className="h-6 w-px bg-white/35" />

                <ul className="flex items-center gap-5">
                    {siteConfig.socials.map((s) => {
                        const Icon = socialIcons[s.icon];
                        return (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex transition-opacity hover:opacity-75"
                                >
                                    <Icon />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}