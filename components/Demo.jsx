// components/Demo.jsx
export default function Demo() {
  return (
    <section id="demo" className="border-t border-cbre-mid bg-white">
      <div className="container py-12">
        <h2 className="text-2xl font-semibold text-cbre-dark">90-second product walkthrough</h2>
        <p className="text-neutral-700 mt-1 mb-4">
          A quick tour of live yield bands, tenant–asset fit, and compliant tokenization workflow.
        </p>

        {/* Option A: Local MP4 (recommended for private demos) */}
        <div className="card overflow-hidden">
          <video
            src="/demo.mp4"
            controls
            playsInline
            muted
            preload="metadata"
            style={{ width: "100%", height: "auto", display: "block" }}
            poster="/hero-ui.png"
          />
        </div>

        {/* Option B: Loom/YouTube embed (uncomment one of these and remove Option A above) */}
        {/*
        <div className="card overflow-hidden">
          <div style={{position:'relative', paddingTop:'56.25%'}}>
            <iframe
              src="https://www.loom.com/embed/YOUR_LOOM_ID"
              title="AgoraCRE demo"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
              style={{position:'absolute', inset:0, width:'100%', height:'100%', border:0}}
            />
          </div>
        </div>
        */}

        {/*
        <div className="card overflow-hidden">
          <div style={{position:'relative', paddingTop:'56.25%'}}>
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0"
              title="AgoraCRE demo"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer"
              style={{position:'absolute', inset:0, width:'100%', height:'100%', border:0}}
            />
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
