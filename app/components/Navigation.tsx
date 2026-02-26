import Link from 'next/link'

export default function Navigation() {
    return (
<div className="flex flex-col items-center gap-6 p-1 sm:flex-row sm:gap-6">
        <Link
          href="/resume"
          className="group relative block h-32 w-32 transition-transform duration-200 hover:scale-105"
        >
          <div className="h-full w-full rounded-full bg-pink-300 shadow-md transition-colors duration-200 group-hover:bg-pink-400 group-hover:shadow-lg" />
          <span className="absolute inset-0 flex items-center justify-center font-semibold text-white transition-colors group-hover:text-black">
            Resume
          </span>
        </Link>
        <Link
          href="/projects"
          className="group relative block h-32 w-32 transition-transform duration-200 hover:scale-105"
        >
          <div className="h-full w-full rounded-full bg-yellow-300 shadow-md transition-colors duration-200 group-hover:bg-yellow-400 group-hover:shadow-lg" />
          <span className="absolute inset-0 flex items-center justify-center font-semibold text-white transition-colors group-hover:text-black">
            Projects
          </span>
        </Link>
        <Link
          href="/education"
          className="group relative block h-32 w-32 transition-transform duration-200 hover:scale-105"
        >
          <div className="h-full w-full rounded-full bg-purple-300 shadow-md transition-colors duration-200 group-hover:bg-purple-400 group-hover:shadow-lg" />
          <span className="absolute inset-0 flex items-center justify-center font-semibold text-white transition-colors group-hover:text-black">
            Education
          </span>
        </Link>
        <Link
          href="/contact"
          className="group relative block h-32 w-32 transition-transform duration-200 hover:scale-105"
        >
          <div className="h-full w-full rounded-full bg-blue-300 shadow-md transition-colors duration-200 group-hover:bg-blue-400 group-hover:shadow-lg" />
          <span className="absolute inset-0 flex items-center justify-center font-semibold text-white transition-colors group-hover:text-black">
            Contact
          </span>
        </Link>
      </div>
    );
}