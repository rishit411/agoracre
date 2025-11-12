export default function Footer(){
  return (
    <footer className="border-t border-line/80">
      <div className="container py-8 text-xs text-text-faint flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© AgoraCRE · Infrastructure for institutional real estate.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Legal</a>
          <a href="mailto:founders@agoracre.io" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
