"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "หน้าแรก" },
  { href: "/renovate", label: "รับรีโนเวท" },
  { href: "/spiral-staircase", label: "บันไดวน" },
  { href: "/awning", label: "กันสาด" },
  { href: "/automatic-gate", label: "ประตูอัตโนมัติ" },
  { href: "/portfolio", label: "ผลงาน" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/75">
      <nav
        aria-label="เมนูหลัก"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 lg:px-8"
      >
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="BT Metal บีทีเมทัล รับรีโนเวท - หน้าแรก"
        >
          <Image
            src="/logo.png"
            alt="BT Metal บีทีเมทัล รับรีโนเวทบ้าน บันไดวน กันสาด ประตูอัตโนมัติ"
            width={1264}
            height={618}
            preload
            sizes="(min-width: 768px) 130px, 100px"
            className="h-12 w-auto md:h-16"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative rounded-md px-3 py-2 text-[15px] font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-white after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-zinc-400 after:via-white after:to-zinc-400"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-md bg-gradient-to-b from-zinc-100 to-zinc-400 px-5 py-2.5 text-sm font-semibold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition hover:from-white hover:to-zinc-300 sm:inline-block"
          >
            ขอใบเสนอราคา
          </Link>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "ปิดเมนู" : "เปิดเมนู"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md text-zinc-200 hover:bg-white/10 lg:hidden"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-black transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[32rem]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                tabIndex={open ? undefined : -1}
                onClick={close}
                className={`block rounded-md px-3 py-3 text-base font-medium ${
                  isActive(link.href)
                    ? "bg-white/10 text-white"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/contact"
              tabIndex={open ? undefined : -1}
              onClick={close}
              className="block rounded-md bg-gradient-to-b from-zinc-100 to-zinc-400 px-3 py-3 text-center text-base font-semibold text-black"
            >
              ขอใบเสนอราคา
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
