import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen scroll-smooth bg-background text-foreground font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/30">
              <span className="text-primary text-xl">⌁</span>
            </div>

            <span className="font-display text-xl font-bold text-primary">
              Ripple
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-primary">
              Features
            </a>

            <a
              href="#connectivity"
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              Connectivity
            </a>

            <a
              href="#security"
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              Security
            </a>

            <a
              href="#pricing"
              className="text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              Pricing
            </a>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-3">
            <Link
              to="/auth/login"
              className="hidden text-sm font-semibold text-muted transition-colors hover:text-primary sm:block"
            >
              Log In
            </Link>

            <Link
              to="/auth/register"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-background transition-all duration-300 hover:shadow-[0_0_25px_var(--color-glow)] hover:brightness-110 active:scale-95"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero */}
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-24">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/4 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
            <div className="absolute bottom-0 left-1/4 h-75 w-75 rounded-full bg-secondary/10 blur-[100px]" />
            <div className="absolute right-1/4 top-1/3 h-62.5 w-62.5 rounded-full bg-tertiary/5 blur-[100px]" />

            <div className="absolute inset-0 opacity-[0.035] bg-[linear-gradient(var(--color-outline)_1px,transparent_1px),linear-gradient(90deg,var(--color-outline)_1px,transparent_1px)] bg-size-[60px_60px]" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              Real-time communication
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Real-Time Connection,
              <br />
              <span className="bg-linear-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Refined.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Experience the next generation of instant messaging and
              high-fidelity video calls. Built for speed, designed for
              simplicity, and engineered for real-time communication.
            </p>

            {/* CTA */}
            <div className="mt-10 flex w-full flex-col justify-center gap-4 sm:w-auto sm:flex-row">
              <Link
                to="/auth/register"
                className="rounded-full bg-primary px-8 py-4 font-bold text-background shadow-[0_0_30px_var(--color-glow)] transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-95"
              >
                Get Started for Free
              </Link>

              <a
                href="#features"
                className="flex items-center justify-center gap-2 rounded-full border border-border bg-glass px-8 py-4 font-semibold text-foreground backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-surface-elevated active:scale-95"
              >
                <span className="text-primary">▶</span>
                Explore Features
              </a>
            </div>

            {/* Stats */}
            <div className="mt-20 grid w-full max-w-4xl grid-cols-1 overflow-hidden rounded-2xl border border-border bg-glass backdrop-blur-xl sm:grid-cols-3">
              <div className="p-7 sm:border-r sm:border-border">
                <div className="font-display text-3xl font-bold text-primary">
                  2M+
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  Active Users
                </div>
              </div>

              <div className="border-t border-border p-7 sm:border-t-0 sm:border-r">
                <div className="font-display text-3xl font-bold text-secondary">
                  99.9%
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  Uptime
                </div>
              </div>

              <div className="border-t border-border p-7 sm:border-t-0">
                <div className="font-display text-3xl font-bold text-tertiary">
                  &lt;50ms
                </div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted">
                  Latency
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="relative border-y border-border bg-surface py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Powerful by design
              </p>

              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Everything you need to communicate in real time.
              </h2>

              <p className="mt-5 leading-7 text-muted">
                Powerful real-time communication tools wrapped in a clean,
                focused interface.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Card */}
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
        <section id="connectivity" className="relative overflow-hidden py-24">
          <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                Built for speed
              </p>

              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Communication without the waiting.
              </h2>

              <p className="mt-6 leading-8 text-muted">
                Ripple combines WebSockets and WebRTC to create a fast,
                responsive communication experience. Messages arrive instantly
                and calls connect directly between users.
              </p>

              <div className="mt-8 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      call
                    </span>
                    <span>HD Audio Calls</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      videocam
                    </span>
                    <span>HD Video Calls</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      screen_share
                    </span>
                    <span>Screen Sharing</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      notifications
                    </span>
                    <span>Instant Notifications</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      groups
                    </span>
                    <span>Team Collaboration</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">
                      bolt
                    </span>
                    <span>Real-Time Performance</span>
                  </div>
                </div>
              </div>
            </div>

            {/* UI Preview */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" />

              <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-4 shadow-2xl">
                {/* Window header */}
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full bg-surface-elevated">
                      <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-surface bg-success" />
                    </div>

                    <div>
                      <div className="h-3 w-24 rounded bg-surface-elevated" />
                      <div className="mt-2 h-2 w-14 rounded bg-surface-variant" />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-elevated text-muted">
                      <span className="material-symbols-outlined">
                        videocam
                      </span>
                    </button>

                    <button className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                      <span className="material-symbols-outlined">call</span>
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-5 p-5">
                  <div className="max-w-[75%] rounded-2xl rounded-tl-sm border border-border bg-glass p-4">
                    <div className="h-2.5 w-full rounded bg-surface-elevated" />
                    <div className="mt-2 h-2.5 w-2/3 rounded bg-surface-elevated" />
                  </div>

                  <div className="ml-auto max-w-[70%] rounded-2xl rounded-tr-sm border border-primary/30 bg-primary/10 p-4">
                    <div className="h-2.5 w-full rounded bg-primary/20" />
                    <div className="mt-2 h-2.5 w-1/2 rounded bg-primary/20" />
                  </div>

                  <div className="max-w-[60%] rounded-2xl rounded-tl-sm border border-border bg-glass p-4">
                    <div className="h-2.5 w-full rounded bg-surface-elevated" />
                  </div>
                </div>

                {/* Input */}
                <div className="flex gap-2 border-t border-border pt-4">
                  <div className="h-10 flex-1 rounded-lg bg-surface-elevated" />
                  <div className="h-10 w-10 rounded-lg bg-primary/20" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security */}
        <section
          id="security"
          className="border-y border-border bg-surface py-24"
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-2xl text-primary">
              <span className="material-symbols-outlined text-primary">
                lock
              </span>
            </div>

            <h2 className="mt-8 font-display text-3xl font-bold sm:text-4xl">
              Your conversations stay yours.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-8 text-muted">
              Security is built into the experience from the ground up. Ripple
              is designed to keep your communication private while maintaining
              the speed of real-time interaction.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-border bg-glass px-5 py-3 text-sm text-muted">
                Secure communication
              </span>

              <span className="rounded-full border border-border bg-glass px-5 py-3 text-sm text-muted">
                Privacy focused
              </span>

              <span className="rounded-full border border-border bg-glass px-5 py-3 text-sm text-muted">
                Low latency
              </span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="pricing"
          className="relative overflow-hidden py-32 text-center"
        >
          <div className="absolute inset-0 bg-linear-to-t from-primary/10 via-transparent to-transparent" />

          <div className="relative z-10 mx-auto max-w-3xl px-6">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Get started
            </p>

            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Ready to Ripple?
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted">
              Create your account and start communicating in real time.
            </p>

            <Link
              to="/auth/register"
              className="mt-10 inline-flex rounded-full bg-primary px-10 py-4 text-lg font-bold text-background shadow-[0_0_35px_var(--color-glow)] transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
            >
              Sign Up — It's Free
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-surface py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row lg:px-8">
          <Link to="/" className="font-display text-xl font-bold text-primary">
            Ripple
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted">
            <a href="#features" className="hover:text-primary">
              Features
            </a>

            <a href="#connectivity" className="hover:text-primary">
              Connectivity
            </a>

            <a href="#security" className="hover:text-primary">
              Security
            </a>

            <Link to="/auth/login" className="hover:text-primary">
              Login
            </Link>

            <Link to="/auth/register" className="hover:text-primary">
              Register
            </Link>

            <Link to="/dashboard" className="hover:text-primary">
              Dashboard
            </Link>
          </div>

          <p className="text-xs text-outline">
            © {new Date().getFullYear()} Ripple
          </p>
        </div>
      </footer>
    </div>
  );
};

/* Feature Card */
const FeatureCard = ({ icon, title, description, color }) => {
  const styles = {
    primary: { icon: "bg-primary/10 text-primary border-primary/20" },
    secondary: { icon: "bg-secondary/10 text-secondary border-secondary/20" },
    tertiary: { icon: "bg-tertiary/10 text-tertiary border-tertiary/20" },
  };
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-glass p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-elevated">
      <div
        className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${styles[color].icon}`}
      >
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 0, 'wght' 400" }}
        >
          {icon}
        </span>
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-muted"> {description} </p>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/5 blur-3xl" />
    </div>
  );
};

export default Home;
