// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link href="/">N.M-Ambition</Link>
        </div>
        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
