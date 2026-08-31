import React from "react";

const Register = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-4 py-8 text-foreground selection:bg-primary/20 selection:text-primary">
      <main className="w-full max-w-md">
        <div className="flex flex-col gap-6 rounded-xl border border-border bg-surface p-8 sm:p-10">
          {/* Header / Brand */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-elevated">
              <span
                className="material-symbols-outlined text-3xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                hub
              </span>
            </div>

            <div className="text-center">
              <h1 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Create account
              </h1>

              <p className="mt-2 text-sm text-muted">
                Get started by creating your account.
              </p>
            </div>
          </div>

          {/* Social Register */}
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface-elevated px-4 py-3 transition-colors hover:border-outline hover:bg-surface-variant active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-xl text-muted">
              code
            </span>

            <span className="text-xs font-medium uppercase tracking-tight text-foreground">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex w-full items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs font-medium uppercase tracking-tight text-muted">
              Or
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Register Form */}
          <form className="flex flex-col gap-5">
            {/* Name */}
            <div className="group relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted transition-colors group-focus-within:text-primary">
                person
              </span>

              <input
                type="text"
                placeholder="Full name"
                autoComplete="name"
                className="w-full rounded-lg border border-border bg-background py-3 pl-12 pr-4 text-base text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
              />
            </div>

            {/* Email */}
            <div className="group relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted transition-colors group-focus-within:text-primary">
                mail
              </span>

              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-background py-3 pl-12 pr-4 text-base text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
              />
            </div>

            {/* Password */}
            <div className="group relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted transition-colors group-focus-within:text-primary">
                lock
              </span>

              <input
                type="password"
                placeholder="Password"
                autoComplete="new-password"
                className="w-full rounded-lg border border-border bg-background py-3 pl-12 pr-4 text-base text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
              />
            </div>

            {/* Confirm Password */}
            <div className="group relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted transition-colors group-focus-within:text-primary">
                lock_reset
              </span>

              <input
                type="password"
                placeholder="Confirm password"
                autoComplete="new-password"
                className="w-full rounded-lg border border-border bg-background py-3 pl-12 pr-4 text-base text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
              />
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-2">
              <div className="relative mt-0.5 flex items-center justify-center">
                <input
                  type="checkbox"
                  required
                  className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-outline bg-background checked:border-primary checked:bg-primary"
                />

                <span className="material-symbols-outlined pointer-events-none absolute text-[11px] font-bold text-background opacity-0 peer-checked:opacity-100">
                  check
                </span>
              </div>

              <span className="text-xs leading-5 text-muted">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              className="mt-1 w-full rounded-lg bg-primary py-3.5 text-sm font-bold uppercase tracking-wider text-background transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Create Account
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-muted">
            Already have an account?{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Register;
