

// import { ThemeProvider as NextThemesProvider } from "next-themes";

// export function ThemeProvider({ children }: { children: React.ReactNode }) {
//   return (
//     <NextThemesProvider
//       attribute="class"
//       defaultTheme="light"
//       forcedTheme="light" // <- force light theme
//     >
//       {children}
//     </NextThemesProvider>
//   );
// }

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps as NextThemeProviderProps } from "next-themes"

interface ThemeProviderProps extends NextThemeProviderProps {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}

