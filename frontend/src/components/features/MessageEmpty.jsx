import React from "react";

const MessageEmpty = () => {
  return (
    <section className="relative z-20 hidden flex-1 flex-col items-center justify-center overflow-hidden bg-background/40 p-6 md:flex">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 opacity-40 blur-[120px]" />

        {/* Secondary subtle glow */}
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      {/* Empty State */}
      <div className="relative z-10 max-w-md rounded-xl border border-border bg-surface/70 p-10 text-center shadow-xl shadow-primary/5 backdrop-blur-xl">
        {/* Icon */}
        <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border border-border bg-surface-elevated shadow-[0_0_30px_rgba(0,209,255,0.1)]">
          {/* Icon glow */}
          <div className="absolute inset-0 rounded-full bg-primary/5 blur-xl" />

          <span className="material-symbols-outlined relative text-5xl text-primary/70">
            forum
          </span>
        </div>

        {/* Heading */}
        <h2 className="mb-3 font-display text-2xl font-semibold tracking-tight text-foreground">
          Your Inbox
        </h2>

        {/* Description */}
        <p className="mb-8 font-sans text-base leading-6 text-muted">
          Select a conversation from the list to start messaging, or create a
          new chat to connect with your team.
        </p>

        {/* New Message */}
        <button
          type="button"
          className="mx-auto flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 font-sans text-sm font-medium text-primary transition-all duration-200 hover:border-primary/50 hover:bg-primary/15 hover:shadow-[0_0_20px_rgba(0,209,255,0.15)] active:scale-[0.97]"
        >
          <span className="material-symbols-outlined text-[18px]">
            edit_square
          </span>

          <span>New Message</span>
        </button>
      </div>
    </section>
  );
};

export default MessageEmpty;
