import React from "react";

const Login = () => {
  return (
    <section className="flex h-screen items-center text-(--text-main) justify-center  selection:bg-indigo-100 selection:text-indigo-900">
      <main className="max-w-md">
        {/* card */}
        <div className="border rounded-3xl p-8 sm:p-10 flex flex-col gap-4">
          {/* Header/Brand */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl border flex items-center justify-center">
              {/* inner subtle */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none"></div>
              <span
                className="material-symbols-outlined text-4xl text-(--accent-purple)"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                hub
              </span>
            </div>
            <div className="text-center">
              <h1 className="font-medium text-2xl sora text-(--text-main) tracking-tight">
                Connect
              </h1>
              <p className="text-sm mt-2">Welcome back. Enter your details.</p>
            </div>
          </div>
          {/* Social Login */}
          <div className="flex flex-col gap-2">
            <button className="w-full flex items-center justify-center gap-2 border rounded-xl border-(--text-muted) py-3 px-4 transition-all duration-200 active:scale-[0.98] group">
              <span className="material-symbols-outlined text-(--text-muted) text-xl">
                code
              </span>
              <span className="font-medium text-xs text-(--text-main) uppercase tracking-tight">
                Continue with Google
              </span>
            </button>
          </div>
          {/* Divider */}
          <div className="flex items-center gap-4 w-full">
            <div className="h-px flex-1 border border-(--border-color)"></div>
            <span className="font-medium text-sm uppercase tracking-tight text-(--text-muted)">
              Or
            </span>
            <div className="h-px flex-1 border border-(--border-color)"></div>
          </div>
          {/* Email Password Form */}
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within:text-(--text-muted) transition-colors">
                  mail
                </span>
                <input
                  className="w-full border rounded-xl py-3 pl-12 pr-4 text-(--text-muted) placeholder:text-(--text-muted)/50 focus:border-(--text-main) focus:ring-0  focus:outline-none transition-all text-md"
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-(--text-muted) group-focus-within:text-(--text-muted) transition-colors">
                  lock
                </span>
                <input
                  className="w-full border rounded-xl py-3 pl-12 pr-4 text-(--text-muted) placeholder:text-(--text-muted)/50 focus:border-(--text-main) focus:ring-0  focus:outline-none transition-all text-md"
                  placeholder="Password"
                  type="password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-0.5">
              <label className="flex items-center gap-2 cursor-pointer group">
                <div className="relative flex items-center justify-center">
                  <input
                    className="peer appearance-none w-4 h-4 border border-(--text-muted) rounded checked:bg-none checked:border-(--text-muted) transition-colors cursor-pointer"
                    type="checkbox"
                  />
                  <span
                    className="material-symbols-outlined absolute text-[10px] text-(--text-muted) opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                </div>
                <span className="font-medium text-[12px] text-(--text-main) group-hover:text-(--text-main)">
                  Remember me
                </span>
              </label>
              <a
                className="text-[12px] text-(--text-main) hover:underline underline-offset-4"
                href="#"
              >
                Forgot password?
              </a>
            </div>
            <button
              className="w-full bg-(--accent-purple)/50 font-bold text-sm uppercase tracking-wider rounded-xl py-4 mt-2 transition-all duration-200 active:scale-[0.98] border border-(--border-color)"
              type="submit"
            >
              Sign In
            </button>
          </form>
          {/* footer */}
          <p className="text-center text-[12px] mt-2">
            Don't have an account?{" "}
            <a
              className=" text-blue-600 font-medium transition-colors hover:underline underline-offset-4"
              href="#"
            >
              Sign up
            </a>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Login;
