import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Workora HR Consultancy - Home"
      className="inline-flex shrink-0 items-center gap-2.5"
    >
      <svg width="58" height="44" viewBox="0 0 58 44" aria-hidden="true">
        <circle cx="12" cy="8" r="5" fill="#6b8fd4" />
        <circle cx="29" cy="5" r="5" fill="#3459a6" />
        <circle cx="46" cy="8" r="5" fill="#6b8fd4" />
        <path
          d="M2 16c8 0 10 6 14 18 3-8 5-14 13-14s10 6 13 14c4-12 6-18 14-18-3 14-8 26-14 26-5 0-8-6-13-6s-8 6-13 6C10 42 5 30 2 16z"
          fill="#3459a6"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[34px] font-bold tracking-tight text-[#25448a] sm:text-[40px]">
          Workora
        </span>
        <span className="mt-1 whitespace-nowrap text-[9px] tracking-[0.3em] text-slate-500 sm:text-[10.5px]">
          — HR CONSULTANCY —
        </span>
      </span>
    </Link>
  );
}