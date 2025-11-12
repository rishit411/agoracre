export default function Problem(){
  return (
    <section id="problem" className="border-t border-cbre-mid bg-white">
      <div className="container py-12 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-semibold text-cbre-dark">Current state slows good assets</h2>
          <ul className="mt-3 text-neutral-700 space-y-1 text-sm">
            <li>• 30–90 day closings across time zones & PDFs</li>
            <li>• Pricing by anecdote; stale comps</li>
            <li>• Yield & risk updated quarterly at best</li>
            <li>• Liquidity only during episodic brokered events</li>
          </ul>
        </div>
        <div className="card p-5">
          <h3 className="text-sm font-semibold mb-2">What owners told us</h3>
          <ul className="text-sm text-neutral-700 space-y-1">
            <li>“Show me live rent bands, not a static DCF.”</li>
            <li>“Legal confidence on fractional wrappers is non‑negotiable.”</li>
            <li>“Vacancy is a data problem before it’s a demand problem.”</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
