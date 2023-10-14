import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Sheet } from "@mui/joy";
import { Noto_Sans_Hebrew } from "next/font/google";

import Navbar from "@/ui/NavBar";

export const metadata = {
  title: "עוברים את זה ביחד",
  description: "עוברים את זה ביחד",
  openGraph: {
    images: ["https://klvoddikzmytpbewxsir.supabase.co/storage/v1/object/public/donations/2.webp?t=2023-10-14T15%3A57%3A39.612Z"],
  },
};
// If loading a variable font, you don't need to specify the font weight
const NotoSansHebrew = Noto_Sans_Hebrew({
  subsets: ["hebrew"],
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={NotoSansHebrew.className}>
      <body>
        <ThemeRegistry>
          <Sheet
            sx={{
              display: "flex",
              flexDirection: "column",
              bgcolor: "primary.50",
              minHeight: "100vh",
              p: 2,
              gap: 2,
            }}
          >
            <Navbar />
            {children}
          </Sheet>
        </ThemeRegistry>
      </body>
    </html>
  );
}
