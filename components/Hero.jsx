import Image from "next/image";

export default function Hero() {
  return (
    <section className="container pt-10 md:pt-16 pb-12">
      <div className="grid grid-cols-12 gap-x-8 gap-y-8 items-start">
        {/* LEFT: Text */}
        <div className="col-span-12 md:col-span-7 lg:col-span-7 z-10">
          <h1 className="font-heading text-4xl md:text-5xl leading-tight tracking-tight hyphens-auto">
            Liquidity & pricing transparency for{" "}
            <span className="text-accent">commercial real estate</span>
          </h1>

          <p className="mt-4 text-lg text-text-dim max-w-[62ch] leading-relaxed">
            AgoraCRE lets asset owners <b>digitize buildings</b>,{" "}
            <b>price continuously</b>, and{" "}
            <b>unlock compliant fractional liquidity</b>. Start with 1–2 pilot
            assets — no change to your managers, brokers, or auditors.
          </p>

          {/* Primary + Secondary CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="btn-primary">Request Early Access</a>
            <a href="#product" className="btn-secondary">See how it works</a>
          </div>

          {/* Feature pills */}
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            <li className="border border-line rounded-lg px-3 py-2 text-sm text-text-faint">Live yield bands</li>
            <li className="border border-line rounded-lg px-3 py-2 text-sm text-text-faint">Lease co-pilot & redlines</li>
            <li className="border border-line rounded-lg px-3 py-2 text-sm text-text-faint">SPV token wrappers</li>
            <li className="border border-line rounded-lg px-3 py-2 text-sm text-text-faint">KYC/AML + custody</li>
          </ul>

          {/* Metrics strip */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-text-faint max-w-xl">
            <span>Vacancy ↓ 11% in 90 days</span>
            <span>Pricing variance ≤ 5% vs appraisal</span>
            <span>T+10 liquidity window</span>
          </div>
        </div>

        {/* RIGHT: Image (slightly larger, no overlap, full height coverage) */}
        <div className="col-span-12 md:col-span-5 lg:col-span-5 z-0 flex justify-center items-start">
          <div className="relative rounded-2xl border border-line bg-panel shadow-card overflow-hidden mt-4 md:mt-0
                          transform origin-left md:scale-110 lg:scale-120 xl:scale-125 transition-transform duration-500"
               style={{ height: "100%", maxHeight: "680px" }}>
            {/* Subtle AI glow */}
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-2xl pointer-events-none" aria-hidden="true"></div>
            <Image
              src="/hero-dashboard.png"
              alt="AgoraCRE dashboard"
              width={1700}
              height={1100}
              className="relative w-full h-full object-cover block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
