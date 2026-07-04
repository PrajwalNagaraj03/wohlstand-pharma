'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/what-we-do', label: 'Capabilities' },
    { href: '/who-we-are', label: 'About' },
    { href: '/work-with-us', label: 'White Label' },
    { href: '/write-to-us', label: 'Start a Project' },
  ];

  const wpplDropdown = [
    { href: '/where-we-are', label: 'Location' },
    { href: '/white-papers', label: 'Downloads' },
    { href: '/gallery', label: 'Facility Notes' },
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="header-logo">
          <Image
            src="/logo.svg"
            alt="WohlStand Pharma Private Limited"
            width={280}
            height={70}
            priority
            style={{ height: '70px', width: '280px', objectFit: 'contain' }}
          />
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-controls="main-nav"
          aria-expanded={menuOpen}
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
          Menu
        </button>

        <nav id="main-nav" className={`header-nav ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="nav-dropdown">
            <Link href="#" onClick={(e) => e.preventDefault()}>
              More
            </Link>
            <div className="nav-dropdown-menu">
              {wpplDropdown.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
