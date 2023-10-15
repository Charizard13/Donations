import { Sheet, Typography, Button, Stack, SvgIcon, IconButton } from "@mui/joy";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { helpWhatsappLink } from "@/utils/consts";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

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
        <Stack gap={1} direction={"row"} alignItems={"flex-end"}>
          <IconButton href="/" color="primary" variant="solid">
            <HomeRoundedIcon />
          </IconButton>
        </Stack>
        <Button
          color="success"
          component="a"
          href={helpWhatsappLink}
          rel="noopener noreferrer"
          variant="soft"
          sx={{
            borderWidth: 6,
            borderRadius: 6,
            border: "1px solid",
            borderColor: "success.500",
          }}
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
    </>
  );
}
