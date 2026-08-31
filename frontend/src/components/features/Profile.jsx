import React from "react";

const Profile = () => {
  return (
    <header className="fixed right-0 top-0 z-40 hidden h-16 w-[calc(100%-280px)] items-center justify-between border-b border-border bg-surface/80 px-6 backdrop-blur-xl md:flex">
      {/* Left */}
      <div className="flex items-center gap-4">
        <span className="font-sans text-sm font-medium text-muted">
          Select a conversation to start messaging
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        {/* Search */}
        <button
          type="button"
          aria-label="Search"
          className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-primary hover:shadow-[0_0_16px_rgba(0,209,255,0.08)] active:scale-95 active:opacity-80"
        >
          <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
            search
          </span>
        </button>

        {/* More */}
        <button
          type="button"
          aria-label="More options"
          className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-transparent text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-primary hover:shadow-[0_0_16px_rgba(0,209,255,0.08)] active:scale-95 active:opacity-80"
        >
          <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
            more_vert
          </span>
        </button>
      </div>
    </header>
  );
};

export default Profile;
