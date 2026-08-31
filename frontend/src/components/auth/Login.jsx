import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../pages/auth/authContext";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();

    // const email = e.target.email.value;
    // const password = e.target.password.value;

    // call backend
    // const response = await fetch("/api/auth/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include",
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // });

    // if (!response.ok) {
    //   // Show login error
    //   return;
    // }

    // const data = await response.json();

    // login(data.user);
    login({ name: "Pradeep", email: "test@gmail.com", id: "abcID" });

    // Return user to the page they originally requested
    const from = location.state?.from?.pathname || "/dashboard";

    navigate(from, { replace: true });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground selection:bg-primary/20 selection:text-primary">
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
                Connect
              </h1>

              <p className="mt-2 text-sm text-muted">
                Welcome back. Enter your details.
              </p>
            </div>
          </div>

          {/* Social Login */}
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

          {/* Email / Password Form */}
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              {/* Email */}
              <div className="group relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted transition-colors group-focus-within:text-primary">
                  mail
                </span>

                <input
                  type="email"
                  placeholder="Email address"
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
                  className="w-full rounded-lg border border-border bg-background py-3 pl-12 pr-4 text-base text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
                />
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between">
              <label className="group flex cursor-pointer items-center gap-2">
                <div className="relative flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-outline bg-background checked:border-primary checked:bg-primary"
                  />

                  <span className="material-symbols-outlined pointer-events-none absolute text-[11px] font-bold text-background opacity-0 peer-checked:opacity-100">
                    check
                  </span>
                </div>

                <span className="text-xs font-medium text-muted transition-colors group-hover:text-foreground">
                  Remember me
                </span>
              </label>

              <a
                href="#"
                className="text-xs font-medium text-primary hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit */}
            <button
              type="submit"
              onClick={handleLogin}
              className="mt-1 w-full rounded-lg bg-primary py-3.5 text-sm font-bold uppercase tracking-wider text-background transition-all hover:brightness-110 active:scale-[0.98]"
            >
              Sign In
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-xs text-muted">
            Don't have an account?{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Login;
