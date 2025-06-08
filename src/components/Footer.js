import Link from 'next/link';

export default function Footer() {
  return (
    <div
      className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Quick Link</h4>
            <p>
              <Link href="/about" legacyBehavior>
                <a className="text-white">About Us</a>
              </Link>
            </p>
            <p>
              <Link href="/contact" legacyBehavior>
                <a className="text-white">Contact Us</a>
              </Link>
            </p>
          </div>
          <div className="col-lg-4 col-md-6">
            <h4 className="text-white mb-3">Contact</h4>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>Delhi
            </p>
            <p>
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbzPsvPLHzPpbLzFkMHPzrlJZdQnlHcPHtBZNLmtBhpBGrDPcMMXlRFfgkLLHWbxhFjWL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                <i className="fa fa-envelope me-3"></i> techrootsclub@gmail.com
              </a>
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social"
                href="https://www.instagram.com/techrootsclub/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <p className="text-white ms-2">Follow us on Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
