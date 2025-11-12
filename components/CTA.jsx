export default function CTA(){
  return (
    <section id="cta" className="border-t border-line/80">
      <div className="container py-12">
        <h2 className="text-2xl font-semibold">Request Early Access</h2>
        <p className="text-text-dim mt-1">Start with one pilot asset. Auditable. Reversible.</p>
        <form className="grid md:grid-cols-4 gap-3 mt-4" method="get" action="/api/lead">
          <input name="name" placeholder="Full name" className="rounded-lg bg-panel border border-line px-3 py-2 text-sm" required />
          <input name="email" type="email" placeholder="Work email" className="rounded-lg bg-panel border border-line px-3 py-2 text-sm" required />
          <input name="company" placeholder="Company" className="rounded-lg bg-panel border border-line px-3 py-2 text-sm" />
          <button className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black">Join Waitlist</button>
        </form>
        <p className="text-[11px] text-text-faint mt-2">We respond within 3 business days.</p>
      </div>
    </section>
  );
}
