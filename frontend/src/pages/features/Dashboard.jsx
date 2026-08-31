import React from 'react'

const Dashboard = () => {
  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 font-mono text-xs uppercase tracking-wider text-primary">
          Overview
        </p>

        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          Dashboard
        </h1>

        <p className="mt-2 text-base text-muted">
          Welcome back. Here's what's happening today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border bg-surface p-5">
          <p className="text-sm text-muted">Total Projects</p>

          <p className="mt-2 font-display text-2xl font-semibold text-foreground">
            24
          </p>

          <p className="mt-2 text-xs text-success">+12% this month</p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <p className="text-sm text-muted">Active Users</p>

          <p className="mt-2 font-display text-2xl font-semibold text-foreground">
            1,284
          </p>

          <p className="mt-2 text-xs text-success">+8.4% this month</p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <p className="text-sm text-muted">Revenue</p>

          <p className="mt-2 font-display text-2xl font-semibold text-foreground">
            $12,840
          </p>

          <p className="mt-2 text-xs text-success">+18.2% this month</p>
        </div>

        <div className="rounded-lg border border-border bg-surface p-5">
          <p className="text-sm text-muted">Pending</p>

          <p className="mt-2 font-display text-2xl font-semibold text-foreground">
            18
          </p>

          <p className="mt-2 text-xs text-tertiary">Requires attention</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Activity */}
        <div className="rounded-lg border border-border bg-surface p-6 lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="font-display text-lg font-semibold text-foreground">
                Recent Activity
              </h2>

              <p className="mt-1 text-sm text-muted">
                Latest activity from your account.
              </p>
            </div>

            <button className="text-xs font-medium text-primary hover:underline">
              View all
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 border-b border-border pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                <span className="material-symbols-outlined text-primary">
                  add
                </span>
              </div>

              <div className="flex-1">
                <p className="text-sm text-foreground">New project created</p>

                <p className="text-xs text-muted">10 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center gap-4 border-b border-border pb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary/10">
                <span className="material-symbols-outlined text-secondary">
                  person_add
                </span>
              </div>

              <div className="flex-1">
                <p className="text-sm text-foreground">New user registered</p>

                <p className="text-xs text-muted">32 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-tertiary/10">
                <span className="material-symbols-outlined text-tertiary">
                  payments
                </span>
              </div>

              <div className="flex-1">
                <p className="text-sm text-foreground">Payment received</p>

                <p className="text-xs text-muted">1 hour ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-lg border border-border bg-surface p-6">
          <h2 className="font-display text-lg font-semibold text-foreground">
            Quick Actions
          </h2>

          <p className="mt-1 text-sm text-muted">Common actions</p>

          <div className="mt-6 space-y-3">
            <button className="flex w-full items-center gap-3 rounded-lg border border-border bg-surface-elevated p-3 text-left transition-colors hover:border-primary">
              <span className="material-symbols-outlined text-primary">
                add
              </span>

              <span className="text-sm text-foreground">Create project</span>
            </button>

            <button className="flex w-full items-center gap-3 rounded-lg border border-border bg-surface-elevated p-3 text-left transition-colors hover:border-primary">
              <span className="material-symbols-outlined text-secondary">
                person_add
              </span>

              <span className="text-sm text-foreground">Invite user</span>
            </button>

            <button className="flex w-full items-center gap-3 rounded-lg border border-border bg-surface-elevated p-3 text-left transition-colors hover:border-primary">
              <span className="material-symbols-outlined text-tertiary">
                settings
              </span>

              <span className="text-sm text-foreground">Settings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard