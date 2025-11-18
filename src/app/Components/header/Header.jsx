import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";

export default function Header() {
  return (
    <header className="hero-header absolute top-0 w-[100%] z-20">
      <div className="hero-header-inner">
        {/* ЛОГО */}
        <div className="logo">
          <Image
            src="/logo.png"
            alt="FitNation Logo"
            width={40}
            height={40}
            className="logo-img"
            priority
          />
        </div>

        {/* НАВИГАЦИЯ */}
        <nav className="nav-menu">
          <Link href="/" className="nav-link active">
            Home
          </Link>
          <Link href="/about" className="nav-link">
            About Us
          </Link>
          <Link href="/blogs" className="nav-link">
            Blogs
          </Link>
          <Link href="/pricing" className="nav-link">
            Pricing
          </Link>
          <Link href="/pages" className="nav-link">
            Pages
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </nav>

        {/* КНОПКА */}
        <Link href="/join" className="join-btn">
          JOIN NOW
        </Link>
      </div>
    </header>
  );
}

