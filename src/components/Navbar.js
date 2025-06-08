import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
      <Link href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <div className="m-0 fw-bold d-flex align-items-center">
          <Image src="/img/logo.png" alt="Logo" width={40} height={40} />
          <span style={{ color: "black", marginLeft: 6 }}>Tech</span>
          <span style={{ color: "#d4af37", marginLeft: 4 }}>Roots Club</span>
        </div>
      </Link>

      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link href="/" className="nav-item nav-link active">
            Home
          </Link>

          <Link href="/about" className="nav-item nav-link">
            About
          </Link>

          <Link href="/courses" className="nav-item nav-link">
            Courses
          </Link>

          {/* External link remains <a> */}
          <a
            href="https://review-7l63.onrender.com"
            className="nav-item nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reviews
          </a>

          <Link href="/contact" className="nav-item nav-link">
            Contact
          </Link>

          <div className="nav-item nav-link">
            <div id="google_translate_element"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
