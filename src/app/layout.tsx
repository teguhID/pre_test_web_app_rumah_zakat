import Link from "next/link";
import { ReactNode } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col bg-gray-100">
        <div className="flex flex-1">
          {/* Sidebar desktop */}
          <aside className="hidden md:block w-64 bg-gray-100 shadow-md p-6 space-y-6 pt-16">
            <nav className="space-y-2">
              <Link
                href="/profile"
                className="block px-3 py-2 rounded-lg text-zinc-800 hover:bg-gray-200"
              >
                <span>👤</span>
                &nbsp; Profile
              </Link>
              <Link
                href="/anime"
                className="block px-3 py-2 rounded-lg text-zinc-800 hover:bg-gray-200"
              >
                <span>📺</span>
                &nbsp; Anime
              </Link>
              <Link
                href="/film"
                className="block px-3 py-2 rounded-lg text-zinc-800 hover:bg-gray-200"
              >
                <span>🎬</span>
                &nbsp; Film
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-6 bg-white">{children}</main>
        </div>

        {/* Bottom Navigation mobile */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-inner border-t flex justify-around py-2">
          <Link
            href="/profile"
            className="flex flex-col items-center text-sm text-zinc-800 hover:text-blue-600"
          >
            <span>👤</span>
            <span>Profile</span>
          </Link>
          <Link
            href="/anime"
            className="flex flex-col items-center text-sm text-zinc-800 hover:text-blue-600"
          >
            <span>📺</span>
            <span>Anime</span>
          </Link>
          <Link
            href="/film"
            className="flex flex-col items-center text-sm text-zinc-800 hover:text-blue-600"
          >
            <span>🎬</span>
            <span>Film</span>
          </Link>
        </nav>
      </body>
    </html>
  );
}
