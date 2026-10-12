"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown } from "lucide-react";
import { navItems } from "@/app/data/site";
import Logo from "../common/Logo";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `inline-flex items-center gap-1.5 border-b-2 py-3 text-lg font-medium transition-colors hover:text-primary ${
      isActive(href)
        ? "border-primary font-semibold text-primary"
        : "border-transparent text-ink"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "border-primary/20 bg-white/90 shadow-sm backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Logo />

        <nav className="hidden lg:block" aria-label="Main">
          <ul className="flex items-center gap-10 xl:gap-12">
            {navItems.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={linkClass(item.href)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      size={16}
                      strokeWidth={2.5}
                      className="transition-transform group-focus-within:rotate-180 group-hover:rotate-180"
                    />
                  )}
                </Link>

                {item.children && (
                  <ul className="invisible absolute left-0 top-full min-w-64 translate-y-2 rounded-lg bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 font-medium text-ink transition-colors hover:bg-tint hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-md bg-primary px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-navy lg:inline-flex"
          >
            Get a Quote
            <ArrowRight size={20} />
          </Link>

          <button
            className="flex flex-col gap-1.5 p-2 lg:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-transform ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-transform ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-gray-100 px-4 pb-5 pt-3 lg:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-base font-medium ${
                    isActive(item.href) ? "text-primary" : "text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 border-l border-gray-200 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1.5 text-sm text-gray-600 hover:text-primary"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-white"
          >
            Get a Quote
            <ArrowRight size={18} />
          </Link>
        </nav>
      )}
    </header>
  );
}