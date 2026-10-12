import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-190px)] items-center overflow-hidden bg-[#f4f6fb]"
    >
      <img
        src={HERO_IMAGE}
        alt="HR consultant shaking hands with a client"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center] lg:object-[70%_center]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.96)_0%,rgba(255,255,255,.85)_60%,rgba(255,255,255,.6)_100%)] lg:bg-[linear-gradient(90deg,#fff_0%,rgba(255,255,255,.94)_28%,rgba(255,255,255,.55)_48%,rgba(255,255,255,0)_68%)]"
      />

      <div className="relative z-10 w-full max-w-[760px] px-5 py-12 lg:py-16 lg:pl-[5.3rem] lg:pr-8">
        <p className="mb-7 flex items-center gap-4 text-lg font-medium text-primary lg:text-xl">
          <span aria-hidden="true" className="h-0.5 w-9 shrink-0 bg-primary" />
          People Today. Stronger Businesses Tomorrow.
        </p>

        <h1
          id="hero-title"
          className="text-[clamp(2.5rem,5.2vw,4.4rem)] font-bold leading-[1.12] tracking-tight text-navy"
        >
          Strategic
          <span className="block text-primary">HR Solutions</span>
          for Your Growing Business
        </h1>

        <p className="mt-7 max-w-[34rem] text-lg leading-relaxed text-slate-600 lg:text-xl">
          We help businesses attract, develop and retain the right talent with
          tailored HR strategies that drive long-term success.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-xl font-semibold text-white transition-colors hover:bg-navy"
        >
          Get a Quote
          <ArrowRight size={22} />
        </Link>
      </div>
    </section>
  );
}