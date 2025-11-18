'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  brandPartners,
  heroSlides,
  navItems,
  quickNav,
  type HeroSlide,
  type NavItem,
  type QuickNavItem,
} from "@/data/sections";

type HeroProps = {
  slides?: HeroSlide[];
  brands?: string[];
  primaryNav?: NavItem[];
  quickLinks?: QuickNavItem[];
};

export function Hero({
  slides = heroSlides,
  brands = brandPartners,
  primaryNav = navItems,
  quickLinks = quickNav,
}: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeNav, setActiveNav] = useState(quickLinks[0]?.target ?? "#intro");
  const hasSlides = slides.length > 0;

  useEffect(() => {
    if (!hasSlides) return;
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(interval);
  }, [hasSlides, slides.length]);

  if (!hasSlides) {
    return (
      <section id="intro" className="page-shell" data-testid="hero-fallback">
        <div className="skc-card">
          <p className="pill mb-4">SKC Materials</p>
          <h1>No hero slides available yet.</h1>
          <p>
            Add at least one slide to the design system data to display the hero
            showcase.
          </p>
        </div>
      </section>
    );
  }

  const slide = slides[activeSlide];

  const handleQuickNav = (target: string) => {
    setActiveNav(target);
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="intro" className="page-shell" style={{ paddingTop: "var(--space-9)" }}>
      <header
        className="skc-card"
        style={{
          padding: "var(--space-4) var(--space-5)",
          marginBottom: "var(--space-5)",
        }}
      >
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="#intro" style={{ fontWeight: 600, fontSize: "1.25rem" }}>
            SKC
          </Link>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "1rem",
              padding: 0,
              margin: 0,
              flexWrap: "wrap",
            }}
          >
            {primaryNav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                    fontSize: "0.95rem",
                    color: "var(--color-ink-soft)",
                  }}
                >
                  <strong style={{ color: "var(--color-highlight)" }}>
                    {item.prefix}
                  </strong>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <Link href="#communication" className="badge">
              Newsroom
            </Link>
            <button
              type="button"
              className="pill"
              style={{ fontSize: "0.65rem", letterSpacing: "0.2em" }}
            >
              Global
            </button>
          </div>
        </nav>
      </header>

      <div className="hero-grid">
        <div className="skc-card" style={{ minHeight: "420px" }}>
          <p className="pill">SKC Materials</p>
          <h1 style={{ fontSize: "var(--text-display)", marginTop: "var(--space-4)" }}>
            {slide.title}
          </h1>
          <p style={{ fontSize: "var(--text-lg)", color: "var(--color-ink-soft)" }}>
            {slide.tagline}
          </p>
          <p style={{ marginTop: "var(--space-4)", maxWidth: "520px" }}>
            {slide.description}
          </p>
          <div style={{ marginTop: "var(--space-5)" }}>
            <QuickNavigation
              items={quickLinks}
              currentTarget={activeNav}
              onNavigate={handleQuickNav}
            />
          </div>
          <div style={{ marginTop: "var(--space-5)" }}>
            <span className="badge" style={{ marginBottom: "var(--space-2)" }}>
              Family companies
            </span>
            <div className="brand-grid">
              {brands.map((brand) => (
                <span key={brand} className="brand-chip">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="skc-card" style={{ padding: 0 }}>
          <figure
            style={{
              margin: 0,
              borderRadius: "inherit",
              overflow: "hidden",
              position: "relative",
              minHeight: "420px",
            }}
          >
            <Image
              src={slide.media.src}
              alt={slide.media.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <figcaption
              style={{
                position: "absolute",
                insetInline: "var(--space-4)",
                bottom: "var(--space-4)",
                background: "rgba(4, 24, 49, 0.65)",
                color: "#fff",
                padding: "var(--space-4)",
                borderRadius: "var(--radius-lg)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p style={{ margin: 0, fontWeight: 600 }}>{slide.tagline}</p>
              <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.8)" }}>
                {slide.description}
              </span>
            </figcaption>
          </figure>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.5rem",
              padding: "var(--space-3)",
            }}
          >
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setActiveSlide(idx)}
                style={{
                  width: idx === activeSlide ? "2rem" : "0.5rem",
                  height: "0.5rem",
                  borderRadius: "var(--radius-pill)",
                  border: "none",
                  background:
                    idx === activeSlide
                      ? "var(--color-highlight)"
                      : "rgba(13, 26, 46, 0.2)",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type QuickNavigationProps = {
  items: QuickNavItem[];
  currentTarget: string;
  onNavigate: (target: string) => void;
};

function QuickNavigation({ items, currentTarget, onNavigate }: QuickNavigationProps) {
  if (!items.length) return null;
  return (
    <div className="quick-nav" role="navigation" aria-label="Section shortcuts">
      {items.map((item) => (
        <button
          key={item.index}
          type="button"
          aria-current={currentTarget === item.target}
          onClick={() => onNavigate(item.target)}
        >
          <strong>{item.index}</strong>
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
}
