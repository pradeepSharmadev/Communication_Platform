import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AudioCall = ({ userId, profile }) => {
  const navigate = useNavigate();

  const [isMuted, setIsMuted] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const userName = profile?.name || "Sarah";

  const userAvatar =
    profile?.avatar ||
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB52EVoQL77Btptc5MUccn21Db7z_8NYBHV4CZ28LesukoBKLwnOZtHFpW7nGey_PfbThhW8rPtyfoBOP0aLxorueqKu7dkJzaAeIX1RSwTG5uUGutzgk0oLX1jnW4UQcLrImdVnuBhRvvQlyE7TSntIsnnvHPR64kYZofVvjoFXH4nXZujDhAZJLosMm5ts2jKGED3n7Be4Gtj7GatS8TEXQT-LYglqYP57zRL3suKsGP0v0yFrZFE";

  const handleEndCall = () => {
    navigate(userId ? `/dashboard/${userId}` : "/dashboard");
  };

  return (
    <main className="relative flex min-h-screen w-full flex-1 flex-col overflow-hidden bg-background">
      {/* Ambient cyan glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      </div>

      {/* Secondary ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-[100px]" />

      {/* Top Info */}
      <div className="relative z-10 flex w-full flex-col items-center justify-center gap-2 px-4 pb-8 pt-14 sm:pt-16">
        {/* Secure connection */}
        <div className="mb-4 flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1.5 text-secondary shadow-[0_0_20px_rgba(0,181,148,0.08)] backdrop-blur-md">
          <span className="material-symbols-outlined text-[16px]">lock</span>

          <span className="font-sans text-xs font-medium">
            Secure Connection
          </span>
        </div>

        <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {userName}
        </h1>

        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,181,148,0.8)]" />

          <p className="font-mono text-sm text-muted">05:12</p>
        </div>
      </div>

      {/* Central Avatar */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6">
        <div className="relative flex items-center justify-center">
          {/* Outer pulse ring */}
          <div className="absolute h-72 w-72 rounded-full border border-primary/10 animate-pulse-ring sm:h-80 sm:w-80" />

          {/* Middle pulse ring */}
          <div
            className="absolute h-64 w-64 rounded-full border border-primary/15 animate-pulse-ring sm:h-72 sm:w-72"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Inner ring */}
          <div
            className="absolute h-56 w-56 rounded-full border border-primary/20 animate-pulse-ring sm:h-64 sm:w-64"
            style={{ animationDelay: "1s" }}
          />

          {/* Avatar */}
          <div className="relative z-20 h-48 w-48 overflow-hidden rounded-full border-4 border-surface shadow-[0_0_60px_rgba(0,209,255,0.2),0_0_120px_rgba(0,209,255,0.08)] sm:h-56 sm:w-56">
            <img
              src={userAvatar}
              alt={userName}
              className="h-full w-full object-cover"
            />

            {/* Subtle image overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-primary/5" />
          </div>

          {/* Voice waveform */}
          <div className="absolute -bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1 rounded-full border border-border bg-surface-elevated/90 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.35),0_0_20px_rgba(0,209,255,0.08)] backdrop-blur-xl">
            <span className="h-2.5 w-1 rounded-full bg-primary animate-bounce" />
            <span className="h-4 w-1 rounded-full bg-primary animate-[bounce_1s_infinite_0.2s]" />
            <span className="h-2 w-1 rounded-full bg-primary animate-[bounce_1s_infinite_0.4s]" />
            <span className="h-5 w-1 rounded-full bg-primary animate-[bounce_1s_infinite_0.1s]" />
            <span className="h-3 w-1 rounded-full bg-primary animate-[bounce_1s_infinite_0.3s]" />
            <span className="h-4 w-1 rounded-full bg-primary animate-[bounce_1s_infinite_0.15s]" />
            <span className="h-2 w-1 rounded-full bg-primary animate-[bounce_1s_infinite_0.35s]" />
          </div>
        </div>
      </div>

      {/* More Menu */}
      {showMore && (
        <div className="absolute bottom-32 left-1/2 z-40 mb-4 w-52 -translate-x-1/2 rounded-xl border border-border bg-surface-elevated/95 p-2 shadow-[0_15px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-sans text-sm text-foreground transition-colors hover:bg-glass hover:text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">
              person_add
            </span>
            Add participant
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-sans text-sm text-foreground transition-colors hover:bg-glass hover:text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">
              call_merge
            </span>
            Merge call
          </button>

          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-sans text-sm text-foreground transition-colors hover:bg-glass hover:text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">
              settings
            </span>
            Call settings
          </button>
        </div>
      )}

      {/* Bottom Controls */}
      <div className="relative z-20 mb-6 w-full px-4 sm:mb-8">
        <div className="mx-auto flex w-full max-w-xs items-center justify-between rounded-3xl border border-border bg-surface/85 p-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.45),0_0_20px_rgba(0,209,255,0.08)] backdrop-blur-2xl sm:p-3">
          {/* Mute */}
          <button
            type="button"
            onClick={() => setIsMuted((prev) => !prev)}
            aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
            className={`group flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${
              isMuted
                ? "border-error/30 bg-error/10 text-error shadow-[0_0_14px_rgba(255,75,75,0.15)]"
                : "border-border bg-surface-elevated/70 text-muted hover:border-primary/30 hover:bg-glass hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[22px] transition-transform group-active:scale-90">
              {isMuted ? "mic_off" : "mic"}
            </span>
          </button>

          {/* Speaker */}
          <button
            type="button"
            onClick={() => setIsSpeakerOn((prev) => !prev)}
            aria-label={isSpeakerOn ? "Turn speaker off" : "Turn speaker on"}
            className={`group flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${
              !isSpeakerOn
                ? "border-error/30 bg-error/10 text-error"
                : "border-border bg-surface-elevated/70 text-muted hover:border-primary/30 hover:bg-glass hover:text-primary"
            }`}
          >
            <span
              className="material-symbols-outlined text-[22px] transition-transform group-active:scale-90"
              style={{
                fontVariationSettings: isSpeakerOn ? '"FILL" 1' : '"FILL" 0',
              }}
            >
              {isSpeakerOn ? "volume_up" : "volume_off"}
            </span>
          </button>

          {/* More */}
          <button
            type="button"
            onClick={() => setShowMore((prev) => !prev)}
            aria-label="More call options"
            className={`group flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${
              showMore
                ? "border-primary/30 bg-primary/10 text-primary shadow-[0_0_14px_rgba(0,209,255,0.12)]"
                : "border-border bg-surface-elevated/70 text-muted hover:border-primary/30 hover:bg-glass hover:text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[22px] transition-transform group-active:scale-90">
              more_horiz
            </span>
          </button>

          {/* End Call */}
          <button
            type="button"
            onClick={handleEndCall}
            aria-label="End call"
            className="group flex h-12 w-12 items-center justify-center rounded-full border border-error/20 bg-error text-white shadow-[0_0_16px_rgba(255,75,75,0.3)] transition-all duration-200 hover:bg-error/90 hover:shadow-[0_0_22px_rgba(255,75,75,0.45)] active:scale-95"
          >
            <span
              className="material-symbols-outlined text-[24px] transition-transform group-active:rotate-12"
              style={{ fontVariationSettings: '"FILL" 1' }}
            >
              call_end
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default AudioCall;
