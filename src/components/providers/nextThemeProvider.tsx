"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "next-themes";

export function NextThemeProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <>{children}</>; // Render children to prevent hydration errors

    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
        </ThemeProvider>
    );
}
