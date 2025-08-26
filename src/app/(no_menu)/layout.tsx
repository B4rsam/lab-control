"use client";

import { ReactNode } from "react";
import { QueryProvider } from "@/src/components";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body style={{ margin: "0" }}>
                <QueryProvider>{children}</QueryProvider>
            </body>
        </html>
    );
}
