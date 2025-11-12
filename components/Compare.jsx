export default function Compare(){
  const Row = ({label, ours, theirs}) => (
    <tr className="border-t border-line/70">
      <td className="py-3 pr-4 text-sm text-text-dim">{label}</td>
      <td className="py-3 px-4 text-sm font-semibold">{ours}</td>
      <td className="py-3 pl-4 text-sm text-text-faint">{theirs}</td>
    </tr>
  );
  return (
    <section id="compare" className="container py-12">
      <h2 className="text-2xl font-semibold">Why we win vs incumbents</h2>
      <div className="rounded-2xl border border-line bg-panel overflow-hidden mt-4">
        <table className="w-full text-left border-separate border-spacing-y-0">
          <thead className="bg-[rgba(255,255,255,0.02)]">
            <tr>
              <th className="py-3 pl-4 text-xs uppercase tracking-wider text-text-faint">Capability</th>
              <th className="py-3 text-xs uppercase tracking-wider text-text-faint">AgoraCRE</th>
              <th className="py-3 text-xs uppercase tracking-wider text-text-faint">Incumbents</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Pricing cadence" ours="Continuous rent bands" theirs="Quarterly/episodic" />
            <Row label="Liquidity" ours="SPV tokens + custody rails" theirs="Brokered windows" />
            <Row label="Data plumbing" ours="Digital Twin OS" theirs="Spreadsheets & PDFs" />
            <Row label="Lease drafting" ours="AI co-pilot + audit trail" theirs="Manual templates" />
          </tbody>
        </table>
      </div>
    </section>
  );
}
