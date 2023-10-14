import { Sheet, Typography, Button } from "@mui/joy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { helpWhatsappLink } from "@/utils/consts";

export default function Navbar() {
  return (
    <>
      <Sheet
        component={"nav"}
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
        <Typography level="h1">תרומות ציוד</Typography>
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
        * כל התרומות והכספים יועברו לקרן צה״ל <br /> * איננו אתר רשמי של צה״ל, אנחנו כאן רק כדי לנסות לעזור
      </Typography>
    </>
  );
}
