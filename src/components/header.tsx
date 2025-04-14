"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="text-white sticky top-0 z-50 w-full border-b border-border/80 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-black">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          Port<span className="text-purple-600">folio</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          <Link href="#home" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-purple-600 transition-colors">
            About
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Projects
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Skills
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-purple-600 transition-colors">
            Contact
          </Link>
        </nav>

        <Button variant="outline" className="hidden md:flex text-black">
          Resume
        </Button>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {isMenuOpen && (
          <div className=" text-white bg-black absolute top-16 left-0 right-0 bg-background border-b border-border/80 md:hidden">
            <nav className="flex flex-col p-4 gap-4">
              <Link
                href="#home"
                className="text-sm font-medium hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-sm font-medium hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="text-sm font-medium hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button variant="outline" className="w-full">
                Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

