import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { lazy, Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davey Projects",
  description: "Davey's List Of Creations",
};

const PreviewProvider = lazy(() => import("@/components/PreviewProvider"));
const VisualEditing = lazy(() => import("@sanity/visual-editing"));

interface RootLayoutProps {
  children: ReactNode;
  draftMode?: boolean;
  token?: string;
}

const RootLayout = ({ children, draftMode, token }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {draftMode ? (
          <PreviewProvider token={token || ""}>
            {children}
            <Suspense fallback={null}>
              <VisualEditing />
            </Suspense>
          </PreviewProvider>
        ) : (
          <>
            {children}
            <Analytics />
          </>
        )}
      </body>
    </html>
  );
};

export default RootLayout;

