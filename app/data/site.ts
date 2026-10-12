export const siteConfig = {
  name: "Workora HR Consultancy",
  description:
    "Strategic HR solutions that help growing businesses attract, develop and retain the right talent.",
  phone: "+1 234 567 8900",
  hours: "Mon - Fri 9:00 am - 6:00 pm",
  address: "123 Business Avenue, New York, NY 10001, USA",
  socials: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
    { label: "YouTube", href: "https://youtube.com", icon: "youtube" },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Recruitment", href: "/services/recruitment" },
      { label: "Payroll Management", href: "/services/payroll" },
      { label: "Training & Development", href: "/services/training" },
      { label: "HR Consulting", href: "/services/consulting" },
    ],
  },
  { label: "Our Team", href: "/team" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];