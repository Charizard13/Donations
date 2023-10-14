import * as React from "react";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import { Sheet, Typography, Button } from "@mui/joy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { helpWhatsappLink } from "@/utils/consts";

export const metadata = {
  title: "עוברים את זה ביחד",
  description: "עוברים את זה ביחד",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
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
            <Sheet
              sx={{
                position: "sticky",
                display: "flex",
                width: "400px",
                maxWidth: "100%",
                bgcolor: "transparent",
                alignSelf: "center",
                justifyContent: "space-between",
                alignItems: "center",
                direction: "row",
              }}
            >
              <Typography level="h1">גיוסים</Typography>
              <Button
                color="success"
                component="a"
                href={helpWhatsappLink}
                referrerPolicy="no-referrer"
                target="_blank"
                endDecorator={<WhatsAppIcon />}
                slotProps={{
                  endDecorator: {
                    sx: {
                      m: 0,
                      mr: 1,
                    },
                  },
                }}
              >
                לקבלת סיוע
              </Button>
            </Sheet>
            <Typography
              level="body-xs"
              sx={{
                width: "400px",
                maxWidth: "100%",
                alignSelf: "center",
              }}
            >
              * איננו אתר רשמי של צה״ל, אנחנו כאן רק כדי לנסות לעזור
            </Typography>
            {children}
          </Sheet>
        </ThemeRegistry>
      </body>
    </html>
  );
}
