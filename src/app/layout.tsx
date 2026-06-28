import type { Metadata } from "next";
export const metadata: Metadata = { title: "cafe website", description: "Built by Heaven AI Engine" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body>{children}</body></html>);
}