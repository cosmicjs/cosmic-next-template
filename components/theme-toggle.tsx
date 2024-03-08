"use client"

import * as React from "react"
import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const searchParams = useSearchParams()
  const dashboardTheme = searchParams.get("theme")
  const { setTheme, theme } = useTheme()
  if (dashboardTheme) {
    setTheme(dashboardTheme)
    return <></>
  }
  return (
    <Suspense>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        <Sun className="h-[1.5rem] w-[1.3rem] dark:hidden" />
        <Moon className="hidden size-5 dark:block" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </Suspense>
  )
}
