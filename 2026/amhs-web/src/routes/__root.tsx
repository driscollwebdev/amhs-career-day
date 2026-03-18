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

function RootComponent() {
  const navItems = [
    { name: 'Academics', path: '/academics' },
    { name: 'Athletics', path: '/athletics' },
    { name: 'Guidance', path: '/guidance' },
    { name: 'Students', path: '/students' },
    { name: 'Parents', path: '/parents' },
    { name: 'Schools', path: '/schools' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="w-full bg-white border-b-2 border-orange-600 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/panther-logo.png"
                  alt="Avon Panthers"
                  className="h-16 w-16 object-contain"
                />
                <div className="ml-3 hidden md:block">
                  <h1 className="text-xl font-bold text-black">
                    Avon Middle High School
                  </h1>
                  <p className="text-sm text-orange-600 font-semibold">
                    Unite. Empower. Achieve.
                  </p>
                </div>
              </Link>
            </div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="px-4 py-2 text-black font-medium hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors duration-200"
                  activeProps={{
                    className: 'text-orange-600 bg-orange-50',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-orange-600 hover:bg-orange-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-600 hover:bg-orange-50"
                activeProps={{
                  className: 'text-orange-600 bg-orange-50',
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="w-full">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-orange-600 font-bold mb-3">Panther PRIDE</h3>
              <ul className="space-y-1 text-sm">
                <li>Persistence</li>
                <li>Respect</li>
                <li>Integrity</li>
                <li>Diversity</li>
                <li>Empowerment</li>
              </ul>
            </div>
            <div>
              <h3 className="text-orange-600 font-bold mb-3">Contact</h3>
              <p className="text-sm">
                Avon Middle High School<br />
                Avon, Massachusetts
              </p>
            </div>
            <div>
              <h3 className="text-orange-600 font-bold mb-3">Communities Served</h3>
              <p className="text-sm">Avon, Brockton, Randolph</p>
              <p className="text-sm mt-2">Grades 7-12</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Avon Middle High School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
