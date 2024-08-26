// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <h5 className="text-uppercase">KavachApp</h5>
            <p>
              A solution to enhance productivity by managing all your organizational tasks efficiently.
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled mb-0">
              <li>
                <a href="/" className="text-dark">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-dark">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-dark">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@kavachapp.com" className="text-dark">
                  info@kavachapp.com
                </a>
              </li>
              <li>
                <p>+123 456 7890</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 KavachApp - All Rights Reserved
      </div>
    </footer>
  );
}
