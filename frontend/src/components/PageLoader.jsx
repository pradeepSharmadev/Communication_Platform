import React from "react";

const PageLoader = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* Spinner */}
        <div
          className="w-10 h-10 rounded-full border-2 border-surface-variant
                     border-t-primary animate-spin
                     shadow-[0_0_20px_var(--color-glow)]"
        />

        {/* Loading text */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm text-muted">Loading</span>

          <span className="flex gap-1">
            <span className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
            <span className="w-1 h-1 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
            <span className="w-1 h-1 rounded-full bg-primary animate-bounce" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageLoader