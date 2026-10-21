import type { ReactNode } from "react";
import "./globals.css";
export const metadata = { title: "EVA Marketing", description: "Oma Solutions AI marketing platform" };
export default function RootLayout({ children }: { children: ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
