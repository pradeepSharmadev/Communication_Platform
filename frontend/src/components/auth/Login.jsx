import React from "react";

const Login = () => {
  return (
    <body className="bg-animated-gradient min-h-screen flex items-center text-(--text-main) justify-center p-4 text-on-surface font-body-md selection:bg-primary/30">
      <main className="w-full max-w-md relative z-10">
        {/* float design element */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
        {/* card */}
        <div className="bg-surface-container/60 backdrop-blur-xl border border-glass-border rounded-3xl shadow-2xl shadow-black/50 p-8 sm:p-10 flex flex-col gap-8">
          {/* Header/Brand */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-surface-container-high border border-glass-border flex items-center justify-center logo-pulse relative">
              {/* inner subtle */}
              <div className="absolute inset-0 rounded-2xl bg-linear-to-tr from-primary/20 to-transparent pointer-events-none"></div>
              <span
                className="material-symbols-outlined text-4xl text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                hub
              </span>
            </div>
            <div className="text-center">
              <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Connect
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Welcome back. Enter your details.
              </p>
            </div>
          </div>
          {/* Social Login */}
          <div className="flex flex-col gap-3">
            <button className="w-full flex items-center justify-center gap-3 bg-surface-container-high hover:bg-surface-bright border border-glass-border rounded-xl py-3 px-4 transition-all duration-200 active:scale-[0.98] group">
              <img
                className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                data-alt="A small, crisp white Google 'G' logo icon set against a dark grey background. The icon is simple, flat, and immediately recognizable, fitting perfectly within a modern dark mode user interface. The lighting is neutral, ensuring the logo remains clear and undistorted."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYkzw9UY4jlgeiJSDmHAzgIVqx0b0VNSwgE-kQUOf_hjp0ahfpd9MBEkHwZ9c5i9eO3dOIHTR-R6S0LlKos_ghQALb6XL4aBpoOgrSu-2jRcvZc3p-_TAKjKLRNmN_a0psbSMuYS1FUNRRAycLi9iRo8xRdurwll27cNB09ww_9o3JsMricM2CMs7G_jTLoMesEB3j6MKQnzgQRakHc7vdE-1HyAmqhGCdE8qFBaG-4xaDQZKRcMLF"
              />
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
                Continue with Google
              </span>
            </button>
            <button className="w-full flex items-center justify-center gap-3 bg-surface-container-high hover:bg-surface-bright border border-glass-border rounded-xl py-3 px-4 transition-all duration-200 active:scale-[0.98] group">
              <span className="material-symbols-outlined text-on-surface opacity-80 group-hover:opacity-100 transition-opacity text-xl">
                code
              </span>
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider">
                Continue with GitHub
              </span>
            </button>
          </div>
          {/* Divider */}
          <div className="flex items-center gap-4 w-full">
            <div className="h-px flex-1 bg-glass-border"></div>
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              Or
            </span>
            <div className="h-px flex-1 bg-glass-border"></div>
          </div>
          {/* Email Password Form */}
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                  mail
                </span>
                <input
                  className="w-full bg-surface-container border border-glass-border rounded-xl py-3 pl-12 pr-4 text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all font-body-md text-body-md"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">
                  lock
                </span>
                <input
                  className="w-full bg-surface-container border border-glass-border rounded-xl py-3 pl-12 pr-12 text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all font-body-md text-body-md"
                  placeholder="Password"
                  type="password"
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface transition-colors focus:outline-none"
                  type="button"
                >
                  <span className="material-symbols-outlined text-lg">
                    visibility_off
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    className="peer appearance-none w-5 h-5 border border-glass-border rounded bg-surface-container checked:bg-primary checked:border-primary transition-colors cursor-pointer"
                    type="checkbox"
                  />
                  <span
                    className="material-symbols-outlined absolute text-[14px] text-surface-container opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                </div>
                <span className="font-body-md text-[14px] text-on-surface-variant group-hover:text-on-surface transition-colors">
                  Remember me
                </span>
              </label>
              <a
                className="font-body-md text-[14px] text-primary hover:text-primary-fixed-dim transition-colors hover:underline underline-offset-4"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <button
              className="w-full bg-linear-to-r from-primary to-primary-container hover:from-primary-fixed-dim hover:to-primary text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold rounded-xl py-4 mt-2 transition-all duration-200 active:scale-[0.98] shadow-lg shadow-primary/20 hover:shadow-primary/40"
              type="submit"
            >
              Sign In
            </button>
          </form>
          {/* footer */}
          <p className="text-center font-body-md text-[14px] text-on-surface-variant mt-2">
            Don't have an account?{" "}
            <a
              className="text-primary hover:text-primary-fixed-dim font-medium transition-colors hover:underline underline-offset-4"
              href="#"
            >
              Sign up
            </a>
          </p>
        </div>
      </main>
    </body>
  );
};

export default Login;
