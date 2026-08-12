import Link from 'next/link';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-name">
        <h2>DENICE JAQUEZ</h2>
      </div>

      <div className="footer-content">

        {/* CONTACT */}
        <div className="footer-column">
          <p className="footer-label">Email</p>

          <a href="mailto:Denicejaquez@outlook.com">
            Denicejaquez@outlook.com
          </a>

          <p className="footer-label footer-location-label">
            Location
          </p>

          <p>United States</p>
        </div>


        {/* SOCIALS */}
        <div className="footer-column">
          <p className="footer-label">Social</p>

          <div className="footer-socials">
            <a
              href="https://github.com/99Liner"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/denice-j-8b4698198/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <Link href="/contact">
              Contact ↗
            </Link>
          </div>
        </div>


        {/* CREDIT */}
        <div className="footer-credit">
          <p>
            Designed and Developed
            <br />
            by <span>Denice Jaquez</span>
          </p>

          <p className="copyright">
            © 2026
          </p>
        </div>

      </div>

    </footer>
  );
}
//emty comment