export default function Comparison(){
  const Row = ({label, ours, theirs}) => (
    <tr className="border-t border-cbre-mid">
      <td className="py-3 pr-4 text-sm">{label}</td>
      <td className="py-3 px-4 text-sm font-semibold text-cbre-green">{ours}</td>
      <td className="py-3 pl-4 text-sm text-neutral-600">{theirs}</td>
    </tr>
  );
  return (
    <section id="comparison" className="container py-12">
      <h2 className="text-2xl font-semibold text-cbre-dark">Comparison vs incumbents</h2>
      <div className="card overflow-hidden mt-4">
        <table className="w-full text-left border-separate border-spacing-y-0">
          <thead className="bg-cbre-gray">
            <tr>
              <th className="py-3 pl-4 text-xs uppercase tracking-wider text-neutral-600">Capability</th>
              <th className="py-3 text-xs uppercase tracking-wider text-neutral-600">AgoraCRE</th>
              <th className="py-3 text-xs uppercase tracking-wider text-neutral-600">Incumbents</th>
            </tr>
          </thead>
          <tbody>
            <Row label="Pricing Cadence" ours="Continuous bands" theirs="Quarterly/episodic" />
            <Row label="Liquidity" ours="Programmatic SPV tokens" theirs="Brokered windows" />
            <Row label="Data Plumbing" ours="Digital twin OS" theirs="Spreadsheets & PDFs" />
            <Row label="Lease Drafting" ours="AI‑assisted, auditable" theirs="Manual, template‑based" />
          </tbody>
        </table>
      </div>
    </section>
  );
}
