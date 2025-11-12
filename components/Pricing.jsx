export default function Pricing(){
  const Card = ({title,desc,bullets,price,highlight}) => (
    <div className={`card p-5 ${highlight?'ring-1 ring-cbre-green/40':''}`}>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-neutral-700">{desc}</div>
      <ul className="text-sm text-neutral-700 mt-3 space-y-1">{bullets.map((b,i)=><li key={i}>• {b}</li>)}</ul>
      <div className="mt-3 text-neutral-600">{price}</div>
    </div>
  );
  return (
    <section className="border-t border-cbre-mid bg-white">
      <div className="container py-12">
        <h2 className="text-2xl font-semibold text-cbre-dark">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <Card title="Pilot" desc="1–5 assets" bullets={["Twin setup","AI yield reports","Token simulator"]} price="Custom" />
          <Card title="Portfolio" desc="5–100 assets" bullets={["Portfolio twins","AI pricing & leasing","Token rails (reviewed)"]} price="$499 / building / month" highlight />
          <Card title="Enterprise" desc="Funds / REITs" bullets={["Custom models","Multi‑region legal","Dedicated success"]} price="Custom" />
        </div>
      </div>
    </section>
  );
}
