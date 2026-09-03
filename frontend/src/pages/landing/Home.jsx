import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "../../components/ThemeToggle";

const navItems = [
  { label: "Features", id: "features" },
  { label: "Connectivity", id: "connectivity" },
  { label: "Security", id: "security" },
  { label: "Pricing", id: "pricing" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("features");

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Ripple home"
          className="group flex items-center gap-2.5"
        >
          <div
            className="
              flex h-9 w-9 items-center justify-center
              rounded-xl border border-primary/30
              bg-primary/10
              transition-colors duration-300
              group-hover:border-primary/50
              group-hover:bg-primary/15
            "
          >
            {/* Ripple Icon — no glow */}
            <svg
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-105"
            >
              <circle cx="16" cy="16" r="4" fill="currentColor" />

              <circle
                cx="16"
                cy="16"
                r="8"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeOpacity="0.75"
              />

              <circle
                cx="16"
                cy="16"
                r="12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeOpacity="0.4"
              />
            </svg>
          </div>

          <span className="font-display text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
            Ripple
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className={`
                  relative py-2 text-sm font-medium
                  transition-colors duration-200
                  ${isActive ? "text-primary" : "text-muted hover:text-primary"}
                `}
              >
                {item.label}

                {/* Functional active underline */}
                <span
                  className={`
                    absolute -bottom-px left-0 h-0.5
                    rounded-full bg-primary
                    transition-all duration-300 ease-out
                    ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}
                  `}
                />
              </a>
            );
          })}
        </div>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/auth/login"
            className="
              hidden rounded-full px-4 py-2
              text-sm font-semibold text-muted
              transition-all duration-200
              hover:bg-primary/5 hover:text-primary
              sm:block
            "
          >
            Log In
          </Link>

          <Link
            to="/auth/register"
            className="
              rounded-full
              border border-primary/20
              bg-primary
              px-5 py-2.5
              text-sm font-bold text-background
              transition-all duration-300
              hover:scale-[1.02]
              hover:brightness-110
              active:scale-95
            "
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      <main className="pt-16">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 py-20 lg:min-h-[85vh] lg:flex lg:items-center">
          {/* Simple linear gradient background */}
          <div className="pointer-events-none absolute inset-0" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:px-8">
            {/* LEFT */}
            <div className="max-w-xl">
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Real-Time Connection,
                <br />
                <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Refined.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-sm leading-6 text-muted sm:text-base">
                Experience the next generation of instant messaging and
                high-fidelity video calls. Built for speed, designed for
                simplicity, and engineered for real-time communication.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/auth/register"
                  className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-background transition hover:brightness-110"
                >
                  Get Started for Free
                </Link>

                <a
                  href="#features"
                  className="rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/40"
                >
                  Explore Features
                </a>
              </div>

              {/* Stats */}
              {/* <div className="mt-10 flex flex-wrap gap-8">
                <div>
                  <div className="font-display text-2xl font-bold text-primary">
                    2M+
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted">
                    Active Users
                  </div>
                </div>

                <div>
                  <div className="font-display text-2xl font-bold text-secondary">
                    99.9%
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted">
                    Uptime
                  </div>
                </div>

                <div>
                  <div className="font-display text-2xl font-bold text-tertiary">
                    &lt;50ms
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted">
                    Latency
                  </div>
                </div>
              </div> */}
            </div>

            {/* RIGHT */}
            <div className="relative lg:pl-4">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full" />
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl border border-border/80 bg-surface shadow-2xl">
                <img
                  src="/hero.png"
                  alt="Ripple real-time communication dashboard"
                  className=" block w-full object-cover transition-transform duration-700 hover:scale-[1.015] "
                />
                {/* Edge fade */}
                <div className="pointer-events-none absolute inset-0" />
              </div>
              {/* Small floating status card */}
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-background/90 px-4 py-3 shadow-xl backdrop-blur-md sm:block">
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-success" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">
                      Connection Active
                    </p>
                    <p className="mt-0.5 text-[10px] text-muted">
                      Real-time • Secure
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="border-y border-border bg-linear-to-br from-background via-surface to-background py-20"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Powerful by design
              </p>

              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Everything you need to communicate in real time.
              </h2>

              <p className="mt-4 text-sm leading-6 text-muted">
                Powerful real-time communication tools wrapped in a clean,
                focused interface.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <FeatureCard
                icon="chat"
                title="Instant Messaging"
                description="Send messages instantly with real-time Socket.IO communication. Stay connected across every device."
                color="primary"
              />

              <FeatureCard
                icon="videocam"
                title="HD Video Calls"
                description="Crystal-clear peer-to-peer video calls powered by WebRTC with smooth, low-latency communication."
                color="secondary"
              />

              <FeatureCard
                icon="public"
                title="Online Presence"
                description="See who's online, set custom statuses, and know when your team or friends are available."
                color="tertiary"
              />
            </div>
          </div>
        </section>

        {/* Connectivity */}
        <section
          id="connectivity"
          className="border-b border-border bg-background py-20"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
            {/* Content */}
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Built for speed
              </p>

              <h2 className="font-display text-2xl font-bold leading-tight sm:text-3xl">
                Stay connected without the delay.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
                Ripple keeps conversations fast and reliable. Send messages,
                make calls, share your screen, and stay updated without
                unnecessary waiting.
              </p>

              {/* Features */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <span className="material-symbols-outlined text-lg text-primary">
                      call
                    </span>
                  </div>
                  <span className="text-sm font-medium">HD Audio Calls</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <span className="material-symbols-outlined text-lg text-primary">
                      videocam
                    </span>
                  </div>
                  <span className="text-sm font-medium">HD Video Calls</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <span className="material-symbols-outlined text-lg text-primary">
                      screen_share
                    </span>
                  </div>
                  <span className="text-sm font-medium">Screen Sharing</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <span className="material-symbols-outlined text-lg text-primary">
                      notifications
                    </span>
                  </div>
                  <span className="text-sm font-medium">
                    Instant Notifications
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <span className="material-symbols-outlined text-lg text-primary">
                      groups
                    </span>
                  </div>
                  <span className="text-sm font-medium">
                    Team Collaboration
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
                    <span className="material-symbols-outlined text-lg text-primary">
                      bolt
                    </span>
                  </div>
                  <span className="text-sm font-medium">
                    Low-Latency Performance
                  </span>
                </div>
              </div>
            </div>

            {/* Chat Preview */}
            <div className="rounded-xl border border-border bg-surface p-4">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9 rounded-full bg-surface-elevated">
                    <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-surface bg-success" />
                  </div>

                  <div>
                    <div className="h-2.5 w-20 rounded bg-surface-elevated" />
                    <div className="mt-2 h-2 w-12 rounded bg-surface-variant" />
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-elevated text-muted">
                    <span className="material-symbols-outlined text-sm">
                      videocam
                    </span>
                  </button>

                  <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined text-sm">
                      call
                    </span>
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="space-y-4 p-5">
                <div className="max-w-[75%] rounded-lg rounded-tl-sm bg-surface-elevated p-3">
                  <div className="h-2 w-full rounded bg-surface-variant" />
                  <div className="mt-2 h-2 w-2/3 rounded bg-surface-variant" />
                </div>

                <div className="ml-auto max-w-[70%] rounded-lg rounded-tr-sm bg-primary/10 p-3">
                  <div className="h-2 w-full rounded bg-primary/20" />
                  <div className="mt-2 h-2 w-1/2 rounded bg-primary/20" />
                </div>

                <div className="max-w-[60%] rounded-lg rounded-tl-sm bg-surface-elevated p-3">
                  <div className="h-2 w-full rounded bg-surface-variant" />
                </div>
              </div>

              {/* Input */}
              <div className="flex gap-2 border-t border-border pt-4">
                <div className="h-9 flex-1 rounded-lg bg-surface-elevated" />
                <div className="h-9 w-9 rounded-lg bg-primary/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section
          id="security"
          className="border-y border-border bg-linear-to-r from-surface via-background to-surface py-20"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg border border-primary/20 bg-primary/10">
              <span className="material-symbols-outlined text-primary">
                lock
              </span>
            </div>

            <h2 className="mt-6 font-display text-2xl font-bold sm:text-3xl">
              Your conversations stay yours.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted">
              Security is built into the experience from the ground up. Ripple
              is designed to keep your communication private while maintaining
              the speed of real-time interaction.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm">
                Secure communication
              </div>

              <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm">
                Privacy focused
              </div>

              <div className="rounded-lg border border-border bg-surface px-4 py-3 text-sm">
                Low latency
              </div>
            </div>
          </div>
        </section>
        {/* CTA */}
        <section
          id="pricing"
          className="border-b border-border py-24 text-center"
        >
          <div className="mx-auto max-w-2xl px-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Get started
            </p>

            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Ready to Ripple?
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted">
              Create your account and start communicating in real time.
            </p>

            <Link
              to="/auth/register"
              className="mt-8 inline-flex rounded-lg bg-primary px-7 py-3 text-sm font-semibold text-background transition hover:brightness-110"
            >
              Sign Up — It's Free
            </Link>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="border-t border-border bg-linear-to-br from-surface via-background to-surface">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          {/* Main Footer */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link
                to="/"
                className="font-display text-xl font-bold tracking-tight"
              >
                Ripple
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
                Simple, fast, and reliable real-time communication. Connect with
                your team and friends through messaging and high-quality calls.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
                Product
              </h3>

              <div className="flex flex-col gap-3 text-sm text-muted">
                <a
                  href="#features"
                  className="transition-colors hover:text-primary"
                >
                  Features
                </a>

                <a
                  href="#connectivity"
                  className="transition-colors hover:text-primary"
                >
                  Connectivity
                </a>

                <a
                  href="#security"
                  className="transition-colors hover:text-primary"
                >
                  Security
                </a>
              </div>
            </div>

            {/* Account */}
            <div>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-foreground">
                Account
              </h3>

              <div className="flex flex-col gap-3 text-sm text-muted">
                <Link
                  to="/auth/login"
                  className="transition-colors hover:text-primary"
                >
                  Login
                </Link>

                <Link
                  to="/auth/register"
                  className="transition-colors hover:text-primary"
                >
                  Register
                </Link>

                <Link
                  to="/dashboard"
                  className="transition-colors hover:text-primary"
                >
                  Dashboard
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Ripple. Pradeep Sharma |{" "}
              <Link
                to="https://pradeep-sharma.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors text-primary hover:underline underline-offset-4"
              >
                Portfolio
              </Link>
            </p>

            <div className="flex gap-5">
              <a href="#" className="transition-colors hover:text-primary">
                Privacy
              </a>

              <a href="#" className="transition-colors hover:text-primary">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* Feature Card */
const FeatureCard = ({ icon, title, description, color }) => {
  const styles = {
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    tertiary: "bg-tertiary/10 text-tertiary border-tertiary/20",
  };

  return (
    <div className="rounded-xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-primary/40">
      <div
        className={`mb-5 flex h-11 w-11 items-center justify-center rounded-lg border ${styles[color]}`}
      >
        <span
          className="material-symbols-outlined text-2xl"
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
        >
          {icon}
        </span>
      </div>

      <h3 className="font-display text-lg font-semibold">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-muted">{description}</p>
    </div>
  );
};
export default Home;
