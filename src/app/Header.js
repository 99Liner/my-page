import Link from 'next/link';
import './header.css';

// Global header
export default function Header() {
  return (
    <header className="header">
      <div className="header-title">
        Denice Jaquez
      </div>

      <nav className="header-nav">
        <Link href="/">Homepage</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/docs">Documentation Samples</Link>
      </nav>
    </header>
  );
}