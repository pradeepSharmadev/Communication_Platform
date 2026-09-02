import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VideoCall = ({ userId, profile }) => {
  const navigate = useNavigate();

  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOff, setIsCameraOff] = useState(false);
  const [isSpeakerOn, setIsSpeakerOn] = useState(true);
  const [showMore, setShowMore] = useState(false);

  const userName = profile?.name || "Sarah";

  const userAvatar =
    profile?.avatar ||
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC-wgcdDUl81lWaj3uF3islDk37lCG-F26J9GnVOP8Cw1JivALOXtI9unEDrBoo4rS8m8wYQHki1BsQGvqenoeLklbNc_YFUYlj3TmNKldbt4gmCGR9W-MbzfFsFMJfThHMwl7QIQp6ogHP3efOI0TKsJVQ8le0hlaDF_nLpg5bwYM5_DUmkD5iHBQcEaX4quVJi5jZU_sIhGGrRzzDvJfvO5vZi846PPVqfN7c4i0uTEKPsB-UXtBW";

  const handleEndCall = () => {
    navigate("/dashboard");
  };

  return (
    <main className="relative flex h-full min-h-screen w-full flex-1 overflow-hidden bg-background">
      {/* Remote video */}
      <div className="absolute inset-0 z-0 bg-surface">
        <img
          src={userAvatar}
          alt={`${userName} video`}
          className={`h-full w-full object-cover transition-all duration-500 ${
            isCameraOff ? "scale-100 blur-sm opacity-40" : ""
          }`}
        />

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/60" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(19,19,19,0.45)_100%)]" />

        {/* Camera off */}
        {isCameraOff && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-border bg-surface-elevated/90 shadow-[0_0_40px_rgba(0,209,255,0.15)] backdrop-blur-xl">
              <span className="font-display text-3xl font-semibold text-primary">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Connected status */}
      <div className="absolute left-4 top-4 z-20 sm:left-6 sm:top-6">
        <div className="flex items-center gap-3 rounded-full border border-border bg-surface/75 px-4 py-2.5 shadow-[0_0_20px_rgba(0,209,255,0.08)] backdrop-blur-xl">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,181,148,0.8)]" />
          </span>

          <span className="font-sans text-xs font-semibold text-secondary">
            Connected
          </span>

          <span className="h-3 w-px bg-border" />

          <span className="font-mono text-xs text-muted">02:34</span>
        </div>
      </div>

      {/* User info */}
      <div className="absolute right-4 top-4 z-20 sm:right-6 sm:top-6">
        <div className="flex items-center gap-3 rounded-full border border-border bg-surface/75 px-3 py-2 shadow-[0_0_20px_rgba(0,209,255,0.08)] backdrop-blur-xl">
          <div className="text-right">
            <p className="font-sans text-sm font-semibold text-foreground">
              {userName}
            </p>

            <p className="font-sans text-[10px] text-success">Video call</p>
          </div>

          <div className="relative">
            <img
              src={userAvatar}
              alt={userName}
              className="h-9 w-9 rounded-full border border-border object-cover"
            />

            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-surface bg-success shadow-[0_0_7px_rgba(37,194,160,0.7)]" />
          </div>
        </div>
      </div>

      {/* Local video */}
      <div className="absolute bottom-32 right-4 z-20 h-40 w-28 overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-[0_10px_40px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-[1.02] sm:bottom-36 sm:right-6 sm:h-56 sm:w-40 md:h-64 md:w-44">
        {!isCameraOff ? (
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5zLoAU8hBhPLHXxvtSkQr7j5sEojdD3dboUIBYWZrpDFYEnV31EJIgtu9X6QJ02LUG1_yD5WSu5WfGmiofQpS-P3-q4zz_pBuaI_AE_sDGgqrZcg3wF2c0CcsD2WGoPD8yJcXrkAk0IawRv9QMXFIFuWcLoXmtUSuSULLJUxGjTzXB8r--B4fgKOselJL8tVWqX_Ryyn-qpNtErMYEyPlH7CHP5Q3iV5FUppgNHTMVHTja7SSDHui"
            alt="Your video"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-surface-elevated">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-semibold text-primary">
              You
            </span>
          </div>
        )}

        {/* Local video label */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-md border border-border bg-background/70 px-2 py-1 backdrop-blur-md">
          <span className="font-sans text-[10px] font-medium text-foreground">
            You
          </span>

          {isMuted && (
            <span className="material-symbols-outlined text-error text-[16px]">
              mic_off
            </span>
          )}
        </div>
      </div>

      {/* More menu */}
      {showMore && (
        <div className="absolute bottom-32 left-1/2 z-40 mb-4 w-52 -translate-x-1/2 rounded-xl border border-border bg-surface-elevated/95 p-2 shadow-[0_15px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left font-sans text-sm text-foreground transition-colors hover:bg-glass hover:text-primary"
          >
            <span className="material-symbols-outlined text-[20px]">
              screen_share
            </span>
            Share screen
          </button>

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
              settings
            </span>
            Call settings
          </button>
        </div>
      )}

      {/* Control bar */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-border bg-surface/85 p-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.45),0_0_25px_rgba(0,209,255,0.08)] backdrop-blur-2xl sm:bottom-6 sm:gap-3 sm:rounded-full sm:px-4 sm:py-3">
        {/* Microphone */}
        <button
          type="button"
          onClick={() => setIsMuted((prev) => !prev)}
          aria-label={isMuted ? "Unmute microphone" : "Mute microphone"}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${
            isMuted
              ? "border-error/30 bg-error/10 text-error shadow-[0_0_15px_rgba(255,75,75,0.15)]"
              : "border-border bg-surface-elevated/80 text-foreground hover:border-primary/30 hover:bg-glass hover:text-primary"
          }`}
        >
          <span className="material-symbols-outlined text-[21px]">
            {isMuted ? "mic_off" : "mic"}
          </span>
        </button>

        {/* Camera */}
        <button
          type="button"
          onClick={() => setIsCameraOff((prev) => !prev)}
          aria-label={isCameraOff ? "Turn camera on" : "Turn camera off"}
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${
            isCameraOff
              ? "border-error/30 bg-error/10 text-error"
              : "border-border bg-surface-elevated/80 text-foreground hover:border-primary/30 hover:bg-glass hover:text-primary"
          }`}
        >
          <span className="material-symbols-outlined text-[21px]">
            {isCameraOff ? "videocam_off" : "videocam"}
          </span>
        </button>

        {/* Speaker */}
        <button
          type="button"
          onClick={() => setIsSpeakerOn((prev) => !prev)}
          aria-label={isSpeakerOn ? "Mute speaker" : "Turn speaker on"}
          className={`hidden h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 sm:flex ${
            !isSpeakerOn
              ? "border-error/30 bg-error/10 text-error"
              : "border-border bg-surface-elevated/80 text-foreground hover:border-primary/30 hover:bg-glass hover:text-primary"
          }`}
        >
          <span className="material-symbols-outlined text-[21px]">
            {isSpeakerOn ? "volume_up" : "volume_off"}
          </span>
        </button>

        {/* More */}
        <button
          type="button"
          onClick={() => setShowMore((prev) => !prev)}
          aria-label="More call options"
          className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-200 active:scale-95 ${
            showMore
              ? "border-primary/30 bg-primary/10 text-primary"
              : "border-border bg-surface-elevated/80 text-foreground hover:border-primary/30 hover:bg-glass hover:text-primary"
          }`}
        >
          <span className="material-symbols-outlined text-[21px]">
            more_horiz
          </span>
        </button>

        {/* Divider */}
        <div className="mx-1 hidden h-7 w-px bg-border sm:block" />

        {/* End call */}
        <button
          type="button"
          onClick={handleEndCall}
          aria-label="End call"
          className="flex h-10 w-16 items-center justify-center rounded-full border border-error/20 bg-error text-white shadow-[0_0_18px_rgba(255,75,75,0.3)] transition-all duration-200 hover:bg-error/90 hover:shadow-[0_0_25px_rgba(255,75,75,0.45)] active:scale-95 sm:h-12 sm:w-16"
        >
          <span className="material-symbols-outlined rotate-[135deg] text-[22px]">
            call
          </span>
        </button>
      </div>
    </main>
  );
};

export default VideoCall;
