import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Sheet, Typography } from "@mui/joy";
import { Noto_Sans_Hebrew } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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
            <Typography
              level="h1"
              style={{
                alignSelf: "center",
              }}
            >
              תרומות ציוד
            </Typography>
            <Typography
              level="body-xs"
              sx={{
                width: "400px",
                maxWidth: "100%",
                alignSelf: "center",
              }}
            >
              * כל התרומות והכספים יועברו לקרן צה״ל <br /> * איננו אתר רשמי של צה״ל, אנחנו כאן רק כדי לנסות לעזור
            </Typography>
            {children}
            <Analytics />
          </Sheet>
        </ThemeRegistry>
      </body>
    </html>
  );
}
