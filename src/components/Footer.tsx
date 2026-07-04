import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="container footer-grid">
        {/* Brand */}
        <div>
          <div className="footer-logo">
            <Image
              src="/logo.svg"
              alt="WohlStand Pharma"
              width={220}
              height={60}
              style={{ height: '60px', width: '220px', objectFit: 'contain' }}
            />
          </div>
          <p className="footer-desc">
            A small R&D-led B2B partner for pharma research, cosmetic formulation, small-scale cosmetic manufacturing, and white-label product development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="footer-heading">Quick Links</h5>
          <div className="footer-links">
            <Link href="/">Home</Link>
            <Link href="/what-we-do">Capabilities</Link>
            <Link href="/work-with-us">White Label</Link>
            <Link href="/who-we-are">About WPPL</Link>
            <Link href="/write-to-us">Start a Project</Link>
          </div>
        </div>

        {/* WPPL */}
        <div>
          <h5 className="footer-heading">Company</h5>
          <div className="footer-links">
            <Link href="/where-we-are">Location</Link>
            <Link href="/white-papers">Downloads</Link>
            <Link href="/gallery">Facility Notes</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h5 className="footer-heading">Registered Office</h5>
          <address className="footer-address">
            <strong>WohlStand Pharma Private Limited</strong><br />
            Harohalli Industrial Area,<br />
            Ramanagara District,<br />
            Karnataka, India<br />
            <span style={{ fontSize: '0.8rem', color: '#777', marginTop: '0.25rem', display: 'inline-block' }}>
              ~86 km from Bengaluru International Airport
            </span>
          </address>
          <div className="footer-contact-line">
            <p>Email: <a href="mailto:info@wohlstandpharma.com">info@wohlstandpharma.com</a></p>
            <p>CIN: U46497KA2023PTC175337</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>
            Copyrights &copy; 2023 - {currentYear}, All Rights Reserved by WohlStand Pharma Private Limited
          </p>
          <p>
            B2B pharma research and cosmetic white-label support
          </p>
        </div>
      </div>
    </footer>
  );
}
