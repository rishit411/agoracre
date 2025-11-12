export default function Product(){
  const Card = ({ step, title, text, img }) => (
    <div className="rounded-2xl border border-line bg-panel shadow-subtle p-5">
      <div className="text-accent text-xs font-semibold">Step {step}</div>
      <h3 className="mt-1 font-semibold">{title}</h3>
      <p className="text-sm text-text-dim mt-2">{text}</p>
      {img ? (
        <img src={img} alt="" className="mt-4 w-full h-auto rounded-lg border border-line" />
      ) : null}
    </div>
  );

  return (
    <section id="product" className="container py-12">
      <h2 className="text-2xl font-semibold">What we provide</h2>
      <p className="text-text-dim mt-1">A single system to run pricing and liquidity like a modern marketplace—without changing your operating partners.</p>

      <div className="grid md:grid-cols-3 gap-5 mt-6">
        <Card
          step="1"
          title="Digitize each building (Digital Twin OS)"
          text="We normalize BIM, IoT, lease abstracts, and historicals into an auditable asset profile your team and partners can trust."
          img="/img-twin.png"
        />
        <Card
          step="2"
          title="Price continuously (AI Yield & Leasing)"
          text="We compute rent/yield bands and match tenants-to-space using live signals—replacing quarterly guesses with weekly clarity."
          img="/img-bands.png"
        />
        <Card
          step="3"
          title="Unlock liquidity (Compliant Fractionalization)"
          text="We wrap assets into SPV tokens with KYC/AML, qualified custody, and jurisdiction-vetted opinions to enable programmable liquidity."
          img="/img-token.png"
        />
      </div>
    </section>
  );
}
