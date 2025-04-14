"use client"

import Link from "next/link"
import { Leaf } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <SidebarTrigger className="mr-2 text-primary dark:text-primary" />
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-accent/10 dark:bg-accent/20 p-1 rounded-md">
              <Leaf className="h-6 w-6 text-accent dark:text-accent" />
            </div>
            <span className="font-bold inline-block bg-gradient-to-r from-primary to-secondary dark:from-primary dark:to-secondary text-transparent bg-clip-text">
              Flora Scan
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/flora-gallery" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Flora Gallery
            </Link>
            <Link
              href="/interactive-tools/find-plant"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Build Your Facade
            </Link>
            <Link
              href="/interactive-tools/facade-preview"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Facade Preview
            </Link>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
