export default function AIAdvantage(){
  const Block = ({ title, points }) => (
    <div className="rounded-2xl border border-line bg-panel p-5">
      <h3 className="font-semibold">{title}</h3>
      <ul className="mt-2 text-sm text-text-dim space-y-1.5">
        {points.map((p,i)=> <li key={i}>• {p}</li>)}
      </ul>
    </div>
  );

  return (
    <section id="ai" className="container py-12">
      <h2 className="text-2xl font-semibold">What AI actually changes in 2025</h2>
      <div className="grid md:grid-cols-3 gap-5 mt-6">
        <Block title="Live pricing" points={[
          "Confidence-band rents per unit",
          "Scenario sims: capex, demand shocks",
          "Variance tracked vs appraisals"
        ]}/>
        <Block title="Leasing speed" points={[
          "Tenant–asset fit from real signals",
          "AI lease drafting + redlines",
          "Week-by-week vacancy compression"
        ]}/>
        <Block title="Capital agility" points={[
          "Programmatic SPV issuance",
          "Investor dashboard & custody rails",
          "Lower friction exits, better price discovery"
        ]}/>
      </div>
    </section>
  );
}
