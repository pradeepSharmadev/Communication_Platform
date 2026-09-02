import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = ({ profile, onBack }) => {
  const navigate = useNavigate();

  const handleVideoCall = () => {
    navigate(`/dashboard/${profile.id}/video-call`);
  };
  return (
    <header className="fixed right-0 top-0 z-40 hidden h-16 w-[calc(100%-280px)] items-center justify-between border-b border-border bg-background/85 px-6 backdrop-blur-xl md:flex">
      {profile ? (
        <>
          {/* Profile */}
          <div className="flex items-center gap-3">
            {/* Back Button */}
            <button
              type="button"
              onClick={onBack}
              aria-label="Go back"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full
             bg-glass text-muted transition-all duration-200
             hover:bg-surface-elevated hover:text-primary
             hover:shadow-[0_0_12px_rgba(0,209,255,0.2)]
             active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M19 12H5" />
                <path d="M12 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="relative">
              <img
                src={
                  profile.avatar ||
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCej5D8Z6qx9qbmtiMC7ua1GzBUq1Ly_10aNSGatNzyA5hc1sk9kGwyGp5vD0x8uQHdQQek9QmyBCkb_TFJluHMrCdTvns54U6UlxRu4tp00ZTDJGFK478-rF4XwWoH8OoaMF1z9wuQSrMFC_sh9brrptQyv_E0dmyrtbDG3NrJnEq8PoBXO067PIu7B95BR9Rl6kXLOQoohaYRLShWmpP7Sp8Qodn9gPnMhOnxWj5e85jL9xFRr_CR"
                }
                alt={`${profile.name || "Sarah"} profile`}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-border"
              />

              {/* Online indicator */}
              <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background bg-success shadow-[0_0_8px_rgba(37,194,160,0.6)]" />
            </div>

            <div className="min-w-0">
              <h2 className="font-sans text-base font-semibold leading-6 text-foreground">
                {profile.name || "Sarah"}
              </h2>

              <p className="font-sans text-xs font-medium leading-4 text-success">
                Online
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Start video call"
              onClick={handleVideoCall}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-primary hover:shadow-[0_0_16px_rgba(0,209,255,0.08)] active:scale-95"
            >
              <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
                videocam
              </span>
            </button>

            <button
              type="button"
              aria-label="Start voice call"
              onClick={()=> navigate(`/dashboard/${profile.id}/audio-call`)}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-primary hover:shadow-[0_0_16px_rgba(0,209,255,0.08)] active:scale-95"
            >
              <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
                call
              </span>
            </button>

            <button
              type="button"
              aria-label="Search conversation"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-primary hover:shadow-[0_0_16px_rgba(0,209,255,0.08)] active:scale-95"
            >
              <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
                search
              </span>
            </button>

            <button
              type="button"
              aria-label="More options"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-primary hover:shadow-[0_0_16px_rgba(0,209,255,0.08)] active:scale-95"
            >
              <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
                more_vert
              </span>
            </button>
          </div>
        </>
      ) : (
        <>
          {/* Empty state */}
          <div className="flex items-center gap-4">
            <span className="font-sans text-sm font-medium text-muted">
              Select a conversation to start messaging
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Search"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-primary hover:shadow-[0_0_16px_rgba(0,209,255,0.08)] active:scale-95"
            >
              <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
                search
              </span>
            </button>

            <button
              type="button"
              aria-label="More options"
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition-all duration-200 hover:border-border hover:bg-glass hover:text-primary hover:shadow-[0_0_16px_rgba(0,209,255,0.08)] active:scale-95"
            >
              <span className="material-symbols-outlined text-[21px] transition-transform duration-200 group-hover:scale-105">
                more_vert
              </span>
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Profile;
