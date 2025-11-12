import { IconToken, IconChart, IconBuilding, IconShield } from "@/components/Icons";

const Item = ({icon, title, desc}) => (
  <div className="card p-5 flex items-start gap-3">
    <div className="text-cbre-green">{icon}</div>
    <div>
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-neutral-700">{desc}</div>
    </div>
  </div>
);

export default function Solution(){
  return (
    <section id="solution" className="container py-12">
      <h2 className="text-2xl font-semibold text-cbre-dark">Solution — built for institutional workflows</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <Item icon={<IconBuilding />} title="Digital Twin OS" desc="Normalize BIM, IoT, & lease data into auditable asset profiles." />
        <Item icon={<IconChart />} title="AI Yield & Leasing" desc="Live price bands, tenant–asset fit, and lease co‑pilot." />
        <Item icon={<IconShield />} title="Compliance‑First" desc="KYC/AML, custody partners, and jurisdiction‑vetted wrappers." />
        <Item icon={<IconToken />} title="Programmatic Liquidity" desc="SPV‑wrapped security tokens with secondary rails." />
      </div>
    </section>
  );
}
