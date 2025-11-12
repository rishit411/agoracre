export default function FAQ() {
  const items = [
    {
      q: "Do you replace brokers or PMs?",
      a: "No. We’re infrastructure. Your brokers and PMs remain essential; we standardize data, price continuously, and enable compliant liquidity."
    },
    {
      q: "What legal comfort do I get before issuance?",
      a: "SPV wrappers, KYC/AML, qualified custody, and jurisdiction-specific opinions are secured before any live issuance."
    },
    {
      q: "What do you need to start?",
      a: "Lease abstracts, historicals, and any BIM/IoT feeds. We can start from PDFs on day 1 and improve data quality iteratively."
    },
    // add more if you like
  ];

  return (
    <section id="faq" className="container py-12">
      <h2 className="text-2xl font-semibold">FAQs</h2>

      {/* Masonry layout → independent heights, no synchronized stretching */}
      <div className="mt-4 columns-1 md:columns-3 gap-4 [column-fill:_balance]">
        {items.map((it, idx) => (
          <details
            key={idx}
            className="mb-4 inline-block w-full rounded-2xl border border-line bg-panel p-4 break-inside-avoid"
          >
            <summary className="cursor-pointer font-semibold list-none">
              {/* remove default triangle spacing quirks in some browsers */}
              <span className="align-middle">{it.q}</span>
            </summary>
            <p className="mt-2 text-sm text-text-dim">{it.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
