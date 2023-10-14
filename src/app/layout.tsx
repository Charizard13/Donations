import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Sheet } from "@mui/joy";
import { Noto_Sans_Hebrew } from "next/font/google";

import Navbar from "@/ui/NavBar";

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
