import React from "react";

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 hidden h-screen w-70 flex-col border-r border-border bg-background/80 py-6 shadow-lg shadow-primary/5 backdrop-blur-xl md:flex">
      {/* Header */}
      <div className="mb-8 px-5">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-md shadow-primary/5">
            <div className="absolute inset-0 bg-primary/5" />
            <span
              className="material-symbols-outlined relative text-3xl text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              hub
            </span>
          </div>
          {/* Brand */}
          <div className="min-w-0">
            <h1 className="font-display text-xl font-semibold tracking-tight text-foreground">
              Connect
            </h1>
            <div className="mt-0.5 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,181,148,0.7)]" />
              <p className="font-sans text-xs font-medium text-secondary">
                Online
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <div className="flex-1 space-y-1.5 px-3">
        {/* Active: Inbox */}
        <a
          href="#"
          className="group relative flex items-center gap-3 overflow-hidden rounded-lg border border-primary/20 bg-primary/10 px-4 py-3 text-primary shadow-sm shadow-primary/10 transition-all duration-200 hover:bg-primary/15 active:scale-[0.98]"
        >
          {/* Active glow */}
          <span className="absolute inset-y-0 left-0 w-0.5 bg-primary shadow-[0_0_12px_rgba(0,209,255,0.8)]" />
          <span
            className="material-symbols-outlined text-[21px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            inbox
          </span>
          <span className="font-sans text-sm font-medium"> Inbox </span>
          <span className="ml-auto flex min-w-6 items-center justify-center rounded-full bg-primary/15 px-2 py-0.5 font-mono text-xs font-medium text-primary">
            3
          </span>
        </a>
        {/* Messages */}
        <a
          href="#"
          className="group flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-foreground active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
            chat
          </span>
          <span className="font-sans text-sm font-medium"> Messages </span>
        </a>
        {/* Calls */}
        <a
          href="#"
          className="group flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-foreground active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
            call
          </span>
          <span className="font-sans text-sm font-medium"> Calls </span>
        </a>
        {/* Contacts */}
        <a
          href="#"
          className="group flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-foreground active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
            contacts
          </span>
          <span className="font-sans text-sm font-medium"> Contacts </span>
        </a>
        {/* Notifications */}
        <a
          href="#"
          className="group flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-foreground active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
            notifications
          </span>
          <span className="font-sans text-sm font-medium">Notifications</span>
          <span className="ml-auto h-2 w-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(254,177,39,0.7)]" />
        </a>
        {/* Settings */}
        <a
          href="#"
          className="group flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-foreground active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:rotate-45">
            settings
          </span>
          <span className="font-sans text-sm font-medium"> Settings </span>
        </a>
      </div>
      {/* Footer */}
      <div className="mt-auto border-t border-border px-3 pt-4">
        <a
          href="#"
          className="group flex items-center gap-3 rounded-lg border border-transparent px-4 py-3 text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-foreground active:scale-[0.98]"
        >
          <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
            account_circle
          </span>
          <span className="font-sans text-sm font-medium"> Profile </span>
          <span className="ml-auto material-symbols-outlined text-lg text-outline transition-transform duration-200 group-hover:translate-x-0.5">
            chevron_right
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Sidebar;
