import React from "react";
import { useNavigate } from "react-router-dom";
const ArchitectureView = () => {
  const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-background text-foreground font-sans">
      {/* Top Bar */}
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/85 px-4 backdrop-blur-xl sm:px-6">
        <div className="flex items-center gap-3">
          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            aria-label="Back to dashboard"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full
                 border border-border bg-glass text-muted
                 transition-all duration-200
                 hover:border-primary/30
                 hover:bg-surface-elevated
                 hover:text-primary
                 hover:shadow-[0_0_12px_rgba(0,209,255,0.18)]
                 active:scale-95"
          >
            <span className="material-symbols-outlined text-[20px]">
              arrow_back
            </span>
          </button>

          {/* Title */}
          <div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px] text-primary">
                account_tree
              </span>

              <h2 className="font-display text-sm font-semibold tracking-wide text-foreground">
                Architecture
              </h2>
            </div>

            <p className="mt-0.5 hidden text-xs text-muted sm:block">
              Real-time communication infrastructure
            </p>
          </div>
        </div>

        {/* System Status */}
        <div className="flex items-center gap-2 rounded-full border border-border bg-glass px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-success shadow-[0_0_8px_rgba(37,194,160,0.8)]" />

          <span className="text-xs font-medium text-success">
            Systems Operational
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="mb-6">
          <div className="mb-2 flex items-center gap-2">
            <span className="rounded-md border border-primary/20 bg-primary/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-primary">
              SYSTEM OVERVIEW
            </span>

            <span className="font-mono text-[10px] text-muted">v2.4.1</span>
          </div>

          <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Real-Time Routing
          </h1>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
            Ripple uses a hybrid communication architecture. Signaling,
            presence, and session state are handled through a low-latency
            Socket.IO cluster, while audio and video traffic uses direct WebRTC
            peer-to-peer connections.
          </p>
        </div>

        {/* Architecture Stats */}
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatCard
            icon="bolt"
            label="Signaling"
            value="< 50ms"
            status="Low latency"
          />

          <StatCard icon="hub" label="Connection" value="P2P" status="WebRTC" />

          <StatCard
            icon="encrypted"
            label="Transport"
            value="DTLS"
            status="Encrypted"
          />

          <StatCard
            icon="monitor_heart"
            label="System"
            value="99.99%"
            status="Operational"
          />
        </div>

        {/* Diagram */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-surface/80 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

          {/* Diagram Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-border px-4 py-3 sm:px-6">
            <div>
              <h3 className="font-display text-sm font-semibold text-foreground">
                Network Topology
              </h3>

              <p className="mt-0.5 text-xs text-muted">
                Live communication flow
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-md border border-success/20 bg-success/5 px-2.5 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-success" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-success">
                Live
              </span>
            </div>
          </div>

          {/* Canvas */}
          <div className="relative h-130 overflow-hidden sm:h-145">
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)
                `,
                backgroundSize: "32px 32px",
              }}
            />

            {/* SVG Connections */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 600"
              preserveAspectRatio="none"
            >
              <defs>
                {/* Signaling gradient */}
                <linearGradient
                  id="signalGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00d1ff" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#00d1ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00d1ff" stopOpacity="0.1" />
                </linearGradient>

                {/* Media gradient */}
                <linearGradient
                  id="mediaGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#00b594" stopOpacity="0.1" />
                  <stop offset="50%" stopColor="#00b594" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#00b594" stopOpacity="0.1" />
                </linearGradient>

                <filter id="cyanGlow">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                <filter id="greenGlow">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Client A → Server */}
              <path
                d="M180 265 C300 100 700 100 820 265"
                fill="none"
                stroke="url(#signalGradient)"
                strokeWidth="2"
                strokeDasharray="7 8"
                opacity="0.8"
              />

              {/* Server → Client B */}
              <path
                d="M820 265 C700 100 300 100 180 265"
                fill="none"
                stroke="url(#signalGradient)"
                strokeWidth="2"
                strokeDasharray="7 8"
                opacity="0.45"
              />

              {/* P2P Media */}
              <path
                d="M180 390 L820 390"
                fill="none"
                stroke="url(#mediaGradient)"
                strokeWidth="4"
                opacity="0.8"
              />

              {/* Media secondary line */}
              <path
                d="M180 398 L820 398"
                fill="none"
                stroke="#00b594"
                strokeWidth="1"
                opacity="0.2"
              />

              {/* Signal particles */}
              <circle r="4" fill="#00d1ff" filter="url(#cyanGlow)">
                <animateMotion
                  dur="2.5s"
                  repeatCount="indefinite"
                  path="M180 265 C300 100 700 100 820 265"
                />
              </circle>

              <circle r="4" fill="#00d1ff" filter="url(#cyanGlow)">
                <animateMotion
                  dur="2.5s"
                  begin="1.2s"
                  repeatCount="indefinite"
                  path="M820 265 C700 100 300 100 180 265"
                />
              </circle>

              {/* Media particles */}
              <circle r="6" fill="#00b594" filter="url(#greenGlow)">
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  path="M180 390 L820 390"
                />
              </circle>

              <circle r="6" fill="#00b594" filter="url(#greenGlow)">
                <animateMotion
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                  path="M820 390 L180 390"
                />
              </circle>
            </svg>

            {/* Nodes */}
            <div className="absolute inset-0">
              {/* Client A */}
              <NetworkNode
                className="left-[5%] top-[39%] sm:left-[10%]"
                avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuBKwktlMb704VsEat0DPU9PqkNdR-iZNI_GYZ_rAqDjsHc6A787EsKlCsi1MoHu_WJZIj0H6G5FWO_qq2vVbW10jEYcVsk7qdowBAnm0lV7Izm6Jj8k6D7O42jiGB94ypBy-kjJMJ8cnxuaaDBNBPvD31FjZnVpUy56MD5m-nKXBZ9xLXxj2SIhnqkwX6Y1hKx66F1XqSAuhm2Xg6kfbJpcob1fTdx-QrTGqx5Rw9847kwnutR6dH3z"
                name="Client A"
                ip="192.168.1.10"
              />

              {/* Server */}
              <div className="absolute left-1/2 top-[8%] flex -translate-x-1/2 flex-col items-center">
                <div className="relative flex h-20 w-20 items-center justify-center rounded-xl border border-primary/40 bg-surface-elevated shadow-[0_0_35px_rgba(0,209,255,0.14)] sm:h-24 sm:w-24">
                  <div className="absolute inset-0 rounded-xl bg-primary/5" />

                  <span className="material-symbols-outlined relative text-3xl text-primary sm:text-4xl">
                    dns
                  </span>

                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-surface bg-success shadow-[0_0_8px_rgba(37,194,160,0.8)]" />
                </div>

                <div className="mt-3 rounded-lg border border-border bg-surface/90 px-3 py-2 text-center backdrop-blur-md sm:px-4">
                  <h3 className="font-mono text-xs font-semibold text-primary">
                    Socket.IO Cluster
                  </h3>

                  <p className="mt-1 font-mono text-[9px] text-muted">
                    wss://signal.ripple.io
                  </p>

                  <div className="mt-1 flex items-center justify-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-success" />
                    <span className="text-[9px] text-success">
                      Signal Routing
                    </span>
                  </div>
                </div>
              </div>

              {/* Client B */}
              <NetworkNode
                className="right-[5%] top-[39%] sm:right-[10%]"
                avatar="https://lh3.googleusercontent.com/aida-public/AB6AXuAuHtWCJCEHenBKgVFwbSJnzQzOZ1aUscRBooSuLnSMF49A9SImGo8aX-1xmuG-_l790qsMbzuQrtbgogFkysZB3616uvTm_ua9b-RgPsN31WAewejxpT0SiYTdxj_vRQMsPOExaD8ovm1X5rVoZ0iRf-r1nmukMIstyB1hfZSyU2E80Nvz3gqwhcB92htGfTpwkUxoaopSDq2zwjXl0fT2iAzgT2ITBK-3aANA9UrFxHFsAt1w1x9z"
                name="Client B"
                ip="10.0.0.54"
              />

              {/* WebRTC Label */}
              <div className="absolute left-1/2 top-[68%] flex -translate-x-1/2 flex-col items-center">
                <div className="rounded-lg border border-secondary/30 bg-secondary/5 px-3 py-2 text-center backdrop-blur-md sm:px-4">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-secondary">
                      lan
                    </span>

                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-secondary">
                      WebRTC P2P Stream
                    </span>
                  </div>

                  <p className="mt-1 font-mono text-[9px] text-secondary/70">
                    DTLS / SRTP • Low-latency Media
                  </p>
                </div>
              </div>

              {/* Connection labels */}
              <div className="absolute left-1/2 top-[29%] hidden -translate-x-1/2 items-center gap-2 sm:flex">
                <span className="h-px w-8 bg-primary/30" />
                <span className="rounded-full border border-primary/20 bg-background/80 px-2 py-1 font-mono text-[9px] text-primary/80">
                  SIGNALING
                </span>
                <span className="h-px w-8 bg-primary/30" />
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-5 border-t border-border px-4 py-4 sm:gap-8">
            <LegendItem
              color="bg-primary"
              label="Signaling Data"
              description="Socket.IO"
            />

            <LegendItem
              color="bg-secondary"
              label="Media Stream"
              description="WebRTC P2P"
            />

            <LegendItem
              color="bg-success"
              label="Active Node"
              description="Connected"
            />
          </div>
        </div>

        {/* Architecture Details */}
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <InfoCard
            icon="hub"
            title="Signaling Layer"
            description="Handles connection negotiation, presence, room state, and session metadata."
            items={["Socket.IO", "WebSockets", "Low latency"]}
          />

          <InfoCard
            icon="call"
            title="Media Layer"
            description="Audio and video traffic travels directly between connected clients."
            items={["WebRTC", "DTLS / SRTP", "P2P"]}
          />

          <InfoCard
            icon="security"
            title="Security Layer"
            description="Communication is protected using encrypted transport and secure session negotiation."
            items={["TLS", "DTLS", "Encrypted media"]}
          />
        </div>

        {/* Footer status */}
        <div className="mt-5 flex flex-col gap-2 rounded-lg border border-border bg-surface/60 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px] text-success">
              check_circle
            </span>

            <span className="text-xs text-muted">
              All architecture services are operating normally.
            </span>
          </div>

          <span className="font-mono text-[10px] text-outline">
            LAST CHECK • JUST NOW
          </span>
        </div>
      </div>
    </section>
  );
};

const NetworkNode = ({ className, avatar, name, ip }) => {
  return (
    <div
      className={`absolute flex -translate-y-1/2 flex-col items-center ${className}`}
    >
      <div className="relative h-16 w-16 rounded-full border border-primary/30 bg-surface-elevated p-1 shadow-[0_0_25px_rgba(0,209,255,0.12)] sm:h-20 sm:w-20">
        <img
          src={avatar}
          alt={name}
          className="h-full w-full rounded-full object-cover"
        />

        <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-[3px] border-surface-elevated bg-success shadow-[0_0_8px_rgba(37,194,160,0.8)]" />
      </div>

      <div className="mt-2 text-center">
        <h3 className="font-mono text-xs font-semibold text-foreground">
          {name}
        </h3>

        <p className="mt-0.5 font-mono text-[9px] text-muted">{ip}</p>
      </div>
    </div>
  );
};

const StatCard = ({ icon, label, value, status }) => {
  return (
    <div className="rounded-lg border border-border bg-surface/70 p-3 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <span className="material-symbols-outlined text-[18px] text-primary">
          {icon}
        </span>

        <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_6px_rgba(37,194,160,0.7)]" />
      </div>

      <p className="mt-2 text-[10px] uppercase tracking-wider text-muted">
        {label}
      </p>

      <div className="mt-0.5 flex items-baseline gap-2">
        <span className="font-display text-lg font-semibold text-foreground">
          {value}
        </span>

        <span className="hidden text-[9px] text-success sm:inline">
          {status}
        </span>
      </div>
    </div>
  );
};

const LegendItem = ({ color, label, description }) => {
  return (
    <div className="flex items-center gap-2">
      <span className={`h-1.5 w-6 rounded-full ${color}`} />

      <div>
        <p className="text-[10px] font-medium text-foreground">{label}</p>
        <p className="text-[9px] text-muted">{description}</p>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, description, items }) => {
  return (
    <div className="rounded-xl border border-border bg-surface/70 p-4 backdrop-blur-md transition-all duration-200 hover:border-primary/20 hover:bg-surface-elevated/60">
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/5">
          <span className="material-symbols-outlined text-[20px] text-primary">
            {icon}
          </span>
        </div>

        <div className="min-w-0">
          <h3 className="font-display text-sm font-semibold text-foreground">
            {title}
          </h3>

          <p className="mt-1 text-xs leading-5 text-muted">{description}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {items.map((item) => (
              <span
                key={item}
                className="rounded-md border border-border bg-glass px-2 py-1 font-mono text-[9px] text-outline"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureView;
