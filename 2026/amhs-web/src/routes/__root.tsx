import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div>
        <p>This is the notFoundComponent configured on root route</p>
        <Link to="/">Start Over</Link>
      </div>
    )
  },
})

export function RootComponent() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="w-full">
        <Outlet />
      </main>
    </div>
  );
}
