import Link from "next/link";

export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 border-b border-line/80 backdrop-blur bg-[rgba(11,15,20,0.72)]">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-accent flex items-center justify-center text-white font-bold">A</div>
          <span className="font-semibold tracking-tight">AgoraCRE</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-text-dim">
          <a href="/#product" className="hover:text-white">Product</a>
          <a href="/#ai" className="hover:text-white">AI Advantage</a>
          <a href="/#compare" className="hover:text-white">Why We Win</a>
          <Link href="/strategy" className="hover:text-white">Strategy</Link>
          <a href="/#faq" className="hover:text-white">FAQ</a>
        </nav>
        <a href="/#cta" className="hidden md:inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black">
          Request Access
        </a>
      </div>
    </header>
  );
}
