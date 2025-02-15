"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeBtn() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevents hydration mismatch

    const currentTheme = theme === "system" ? resolvedTheme : theme;

    return (
        <button 
            onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
            className="p-2 rounded-md text-foreground transition-colors ml-5"
        >
            {currentTheme === "light" ? (
                <Moon className="w-5 h-5" />
            ) : (
                <Sun className="w-5 h-5" />
            )}
        </button>
    );
}
