import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Strategy(){
  return (
    <>
      <Navbar />
      <main className="pt-6">
        <section className="container py-8">
          <h1 className="text-3xl font-semibold">Strategy</h1>
          <p className="text-text-dim max-w-3xl mt-2">
            We’ll win by combining product depth (Digital Twin OS + AI price bands), compliance-first tokenization,
            and speed of execution with focused pilots and distribution through trusted partners.
          </p>
        </section>

        <section className="border-t border-line/80">
          <div className="container py-8 grid md:grid-cols-3 gap-4">
            <details className="rounded-2xl border border-line bg-panel p-5" open>
              <summary className="font-semibold cursor-pointer">Axis 1 — Product (50 units)</summary>
              <ul className="text-sm text-text-dim mt-2 space-y-1">
                <li>• Month 1: ingestion + schema normalization</li>
                <li>• Month 1: AI rent/yield bands + confidence intervals</li>
                <li>• Month 1: lease co-pilot with redlines & audit trail</li>
                <li>• Month 3 “good”: ≥20 assets digitized; variance ≤5% vs appraisals</li>
              </ul>
            </details>
            <details className="rounded-2xl border border-line bg-panel p-5">
              <summary className="font-semibold cursor-pointer">Axis 2 — Business Model (30 units)</summary>
              <p className="text-sm text-text-dim mt-2">
                Usage-based pricing + tokenization fees. No freemium. Revisit brand spend upon reaching $500M tokenized AUM.
              </p>
            </details>
            <details className="rounded-2xl border border-line bg-panel p-5">
              <summary className="font-semibold cursor-pointer">Axis 3 — Execution (20 units)</summary>
              <p className="text-sm text-text-dim mt-2">
                Parallel engineering, legal, and issuance pilots. SLA: first tokenized asset ≤ 8 weeks; T+10 liquidity target with MM partners.
              </p>
            </details>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="container py-8">
            <h2 className="text-2xl font-semibold">Distribution</h2>
            <ul className="text-sm text-text-dim mt-2 space-y-1">
              <li>• Chainalysis / Fireblocks: we gain custody & compliance trust; they extend their institutional rails.</li>
              <li>• ULI / NAIOP: we gain owner pipeline & thought leadership; they get best-practice content & pilots.</li>
              <li>• JLL T-Labs & mid-tier PMs: we gain standardized data & rollout; they retain clients with new capability.</li>
            </ul>
          </div>
        </section>

        <section className="border-t border-line/80">
          <div className="container py-8">
            <h2 className="text-2xl font-semibold">Incumbent response & our counter</h2>
            <p className="text-sm text-text-dim mt-2 max-w-4xl">
              Month 4: incumbents launch a marketplace PR & discounted advisory. Our counter: open read-only APIs, free dashboards for long-tail landlords,
              and double-down on issuance speed + compliance. Forcing function: T+10 liquidity SLA with market-makers. Month 6 moat:
              consented cross-portfolio telemetry + jurisdiction-vetted rails that compound with each pilot.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
