"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export interface NavbarLink {
  id: number;
  url: string;
  name: string;
}

interface NavbarProps {
  links: NavbarLink[];
}

export default function Navbar({ links }: NavbarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-10 w-10 flex-shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-zinc-300 bg-white transition-colors hover:bg-zinc-50 sm:hidden"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`h-0.5 w-5 bg-zinc-700 transition-all duration-200 ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-zinc-700 transition-all duration-200 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-0.5 w-5 bg-zinc-700 transition-all duration-200 ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`absolute right-0 top-full z-50 mt-2 w-48 rounded-xl border border-zinc-200 bg-white py-2 shadow-lg transition-opacity duration-200 sm:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        {links.map((link) => {
          const isActive = pathname === link.url;
          return (
            <Link
              key={link.id}
              href={link.url}
              className={`block px-4 py-2.5 text-sm transition-colors hover:bg-pink-50 ${
                isActive ? "font-semibold text-pink-600" : "text-zinc-700"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <nav className="hidden flex-wrap items-center gap-x-1 sm:flex sm:gap-x-2">
        {links.map((link, index) => {
          const isActive = pathname === link.url;
          return (
            <span key={link.id} className="flex items-center">
              <Link
                href={link.url}
                className={`px-1 py-1 text-sm transition-colors duration-200 sm:text-base ${
                  isActive
                    ? "font-semibold text-pink-600"
                    : "text-zinc-700 hover:text-pink-500"
                }`}
              >
                {link.name}
              </Link>
              {index < links.length - 1 && (
                <span className="px-0.5 text-zinc-300 sm:px-1">|</span>
              )}
            </span>
          );
        })}
      </nav>
    </div>
  );
}
