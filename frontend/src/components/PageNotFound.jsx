import React from "react";

const PageNotFound = () => {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans flex items-center justify-center px-6 relative overflow-hidden">
      <section className="w-full max-w-2xl text-center">
        {/* Main content */}
        <div>
          <p className="font-mono text-sm text-primary mb-3">ERROR 404</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
            Page not found
          </h1>
          <p className="text-muted max-w-md mx-auto mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-primary text-background font-medium hover:brightness-110 transition"
          >
            Back to home
          </a>
        </div>
        {/* Decorative terminal */}
        <div className="mt-12 mx-auto max-w-md rounded-xl border border-border bg-surface/80 backdrop-blur-xl overflow-hidden text-left shadow-2xl">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="w-2.5 h-2.5 rounded-full bg-error" />
            <span className="w-2.5 h-2.5 rounded-full bg-tertiary" />
            <span className="w-2.5 h-2.5 rounded-full bg-success" />
            <span className="ml-2 font-mono text-xs text-outline">
              system.log
            </span>
          </div>
          {/* Terminal content */}
          <div className="p-4 font-mono text-sm leading-6">
            <p className="text-muted">
              <span className="text-secondary">$</span> locate page
            </p>
            <p className="mt-1 text-error"> ✕ Resource not found </p>
            <p className="mt-1 text-outline">
              status_code: <span className="text-tertiary">404</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
