import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Leafix Services — Privacy Policy" },
      {
        name: "description",
        content:
          "How Leafix Services collects, uses and protects the information you share through our garden care enquiries.",
      },
      {
        property: "og:title",
        content: "Leafix Services — Privacy Policy",
      },
      {
        property: "og:description",
        content:
          "How Leafix Services collects, uses and protects the information you share through our garden care enquiries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="page-shell min-h-[100dvh] bg-[#f6f1e7]">
        <section className="bg-[#2d2230] text-[#f6f1e7]">
          <header
            className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${scrolled ? "top-3 mx-3 sm:mx-6 lg:mx-10 rounded-full bg-[#2d2230] shadow-[0_8px_30px_rgb(0,0,0,0.12)]" : ""}`}
          >
            <div
              className={`mx-auto flex items-center justify-between text-[#f6f1e7] transition-all duration-300 max-w-[1380px] px-5 sm:px-8 lg:px-12 ${scrolled ? "py-3" : "py-5 lg:py-7"}`}
            >
              <a href="/" data-testid="link-home" className="transition-opacity hover:opacity-80">
                <span className="flex items-center gap-3" aria-label="Leafix home">
                  <span className="relative flex h-10 w-9 items-center justify-center">
                    <span className="leaf-mark"></span>
                  </span>
                  <span className="font-display text-[1.6rem] font-semibold leading-none tracking-[-0.04em]">
                    leafix<span className="text-[#bf684d]">.</span>
                  </span>
                </span>
              </a>
              <nav className="hidden items-center gap-9 md:flex" aria-label="Main navigation">
                <a
                  href="/#services"
                  data-testid="link-nav-services"
                  className="text-[0.73rem] font-bold uppercase tracking-[0.13em] text-[#f6f1e7]/80 transition-colors hover:text-[#c8dc53]"
                >
                  Services
                </a>
                <a
                  href="/#story"
                  data-testid="link-nav-our-story"
                  className="text-[0.73rem] font-bold uppercase tracking-[0.13em] text-[#f6f1e7]/80 transition-colors hover:text-[#c8dc53]"
                >
                  Our story
                </a>
                <a
                  href="/#approach"
                  data-testid="link-nav-how-it-works"
                  className="text-[0.73rem] font-bold uppercase tracking-[0.13em] text-[#f6f1e7]/80 transition-colors hover:text-[#c8dc53]"
                >
                  How it works
                </a>
              </nav>
              <a
                href="/#contact"
                data-testid="link-header-enquiry"
                className="hidden rounded-full bg-[#c8dc53] px-5 py-3 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#2d2230] transition-transform hover:-translate-y-0.5 sm:block"
              >
                Start a conversation
              </a>
              <button
                type="button"
                data-testid="button-mobile-menu"
                aria-label="Open navigation"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((v) => !v)}
                className="rounded-full border border-[#f6f1e7]/35 p-2.5 text-[#f6f1e7] md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                  aria-hidden="true"
                >
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </svg>
              </button>
            </div>
          </header>
          <div className="mx-auto max-w-[1380px] px-5 pb-20 pt-40 sm:px-8 sm:pb-28 lg:px-12">
            <a
              href="/"
              className="arrow-link inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[.13em] text-[#c8dc53]"
            >
              Back to Leafix{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
            <p className="mt-16 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#c8dc53]">
              Leafix Services · Bentleigh East
            </p>
            <h1 className="mt-5 max-w-4xl font-display text-[clamp(3.5rem,8vw,8rem)] leading-[.88] tracking-[-.065em]">
              Privacy
              <br />
              <span className="text-[#c8dc53]">Policy.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-7 text-[#f6f1e7]/70">
              A clear explanation of how Leafix Services handles information shared through
              leafixservices.com.
            </p>
          </div>
        </section>
        <main className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <article className="mx-auto max-w-[900px] text-[#2d2230]">
            <p className="text-sm leading-7 text-[#52634b]">Last updated: 30 August 2026</p>
            <div className="mt-12 space-y-12">
              <section>
                <h2 className="font-display text-4xl tracking-[-.04em]">🌿 The short version</h2>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  Leafix Services does not collect personal information beyond what you choose to
                  share with us. We do not use tracking cookies, we do not sell information, and all
                  payments and service arrangements happen directly with our team in person.
                </p>
              </section>
              <section>
                <h2 className="font-display text-4xl tracking-[-.04em]">🌱 What we collect</h2>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  When you contact us, you may choose to provide:
                </p>
                <ul className="mt-4 space-y-3 text-base leading-8 text-[#52634b]">
                  <li>• Your name</li>
                  <li>• Email address</li>
                  <li>• Suburb</li>
                  <li>• A short note about the gardening work you have in mind</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  We do not collect payment details, sensitive information, or anything we do not
                  need for an initial conversation.
                </p>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  We do not use analytics cookies, marketing cookies, or tracking technologies.
                </p>
              </section>
              <section>
                <h2 className="font-display text-4xl tracking-[-.04em]">🌳 How we use your information</h2>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  We use the information you provide only to:
                </p>
                <ul className="mt-4 space-y-3 text-base leading-8 text-[#52634b]">
                  <li>• Reply to your enquiry</li>
                  <li>• Understand the gardening work you need</li>
                  <li>• Arrange a visit or conversation</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  We do not use your information for advertising, marketing, or data profiling.
                </p>
              </section>
              <section>
                <h2 className="font-display text-4xl tracking-[-.04em]">🌼 When we share information</h2>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  We do not sell or trade personal information.
                </p>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  We only share information when:
                </p>
                <ul className="mt-4 space-y-3 text-base leading-8 text-[#52634b]">
                  <li>• It is required to operate the website (basic hosting)</li>
                  <li>• You ask us to (for example, forwarding details to the team)</li>
                  <li>• We are legally required to</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  We do not use third‑party marketing services.
                </p>
              </section>
              <section>
                <h2 className="font-display text-4xl tracking-[-.04em]">🌾 Cookies and website behaviour</h2>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  This website does not use cookies for tracking, analytics, advertising, or
                  personal data collection.
                </p>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  Any technical information your browser sends (like device type or basic usage) is
                  used only for essential website operation and security.
                </p>
              </section>
              <section>
                <h2 className="font-display text-4xl tracking-[-.04em]">🌱 Payments and services</h2>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  All payments, quotes and service arrangements happen in person with the Leafix team.
                  No online payments are processed through this website.
                </p>
              </section>
              <section>
                <h2 className="font-display text-4xl tracking-[-.04em]">🌿 Keeping information safe</h2>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  We take reasonable steps to protect any information you choose to share. Because we
                  collect very little data, the risk is low — but no online system is completely
                  secure.
                </p>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  Please only send information appropriate for an initial gardening enquiry.
                </p>
              </section>
              <section>
                <h2 className="font-display text-4xl tracking-[-.04em]">🌳 Your choices</h2>
                <p className="mt-4 text-base leading-8 text-[#52634b]">You can:</p>
                <ul className="mt-4 space-y-3 text-base leading-8 text-[#52634b]">
                  <li>• Ask what information we hold</li>
                  <li>• Ask us to correct it</li>
                  <li>• Ask us to delete it</li>
                </ul>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  We will do so unless we are legally required to keep it.
                </p>
              </section>
              <section>
                <h2 className="font-display text-4xl tracking-[-.04em]">🌼 Contact us</h2>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  For privacy questions or requests, contact:
                </p>
                <p className="mt-4 text-base leading-8 text-[#52634b]">
                  <a
                    href="mailto:hello@leafixservices.com"
                    className="font-semibold text-[#bf684d] underline decoration-[#bf684d]/40 underline-offset-4 hover:text-[#2d2230]"
                  >
                    hello@leafixservices.com
                  </a>
                </p>
                <p className="mt-4 text-base leading-8 text-[#52634b]">Bentleigh East, Victoria</p>
              </section>
            </div>
          </article>
        </main>
        <footer className="bg-[#2d2230] px-5 py-10 text-[#f6f1e7] sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1380px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <a
                href="/"
                data-testid="link-footer-home"
                className="inline-block transition-opacity hover:opacity-80"
              >
                <span className="flex items-center gap-3" aria-label="Leafix home">
                  <span className="relative flex h-10 w-9 items-center justify-center">
                    <span className="leaf-mark"></span>
                  </span>
                  <span className="font-display text-[1.6rem] font-semibold leading-none tracking-[-0.04em]">
                    leafix<span className="text-[#bf684d]">.</span>
                  </span>
                </span>
              </a>
              <p className="mt-5 max-w-xs text-sm leading-6 text-[#f6f1e7]/55">
                Garden care for homes and small businesses in Bentleigh East.
              </p>
              <a
                href="https://leafixservices.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-xs font-bold uppercase tracking-[.13em] text-[#c8dc53] transition-colors hover:text-[#f6f1e7]"
              >
                leafixservices.com
              </a>
            </div>
            <div className="flex flex-col gap-4 text-xs font-bold uppercase tracking-[.13em] text-[#f6f1e7]/65 sm:items-end">
              <a
                href="/#services"
                data-testid="link-footer-services"
                className="transition-colors hover:text-[#c8dc53]"
              >
                Services
              </a>
              <a
                href="/#story"
                data-testid="link-footer-story"
                className="transition-colors hover:text-[#c8dc53]"
              >
                Our story
              </a>
              <a
                href="/#contact"
                data-testid="link-footer-contact"
                className="transition-colors hover:text-[#c8dc53]"
              >
                Job enquiries
              </a>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-[1380px] flex-col gap-3 border-t border-[#f6f1e7]/15 pt-5 text-[0.65rem] uppercase tracking-[.12em] text-[#f6f1e7]/40 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <span>© 2026 Leafix Gardening</span>
              <a
                href="https://github.com/DeveloperXeno"
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#c8dc53]"
              >
                Built by Mr Xeno
              </a>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
              <a
                href="/privacy-policy"
                data-testid="link-footer-privacy"
                className="transition-colors hover:text-[#c8dc53]"
              >
                Privacy Policy
              </a>
              <span>Made for living outside</span>
            </div>
          </div>
        </footer>
      </div>
      <div role="region" aria-label="Notifications (F8)" tabIndex={-1} style={{ pointerEvents: "none" }}>
        <ol
          tabIndex={-1}
          className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        ></ol>
      </div>
    </>
  );
}
