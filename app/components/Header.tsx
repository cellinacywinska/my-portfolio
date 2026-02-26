import Navbar, { NavbarLink } from "./Navbar";
import Link from 'next/link'

const links: NavbarLink[] = [
  { id: 1, url: "/resume", name: "Resume" },
  { id: 2, url: "/projects", name: "Projects" },
  { id: 3, url: "/education", name: "Education" },
  { id: 4, url: "/contact", name: "Contact" },
];

export default function Header() {
  return (
    <header className="w-full">
      <main className="flex w-full flex-row items-center justify-start py-5 px-4 sm:justify-end sm:px-8 sm:items-start md:px-16">
        <div className="flex-1">
          <div className="flex flex-row items-center">
            <Link href="/" className="text-2xl font-bold transition-transform duration-200 hover:scale-105">Celina Cywinska</Link>
          </div>
          <p className="text-sm text-zinc-600">Software Engineer</p>
        </div>

        <Navbar links={links} />
      </main>
    </header>
  );
}
