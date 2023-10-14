import { Sheet, Stack, Typography, Button } from "@mui/joy";
import type { DonationCardProps } from "./ui/DonationCard";
import DonationCard from "./ui/DonationCard";
import Theme from "./components/Theme";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const donationsCards: DonationCardProps[] = [
  {
    id: "1",
    title: "ערכת הסבה לגלוק 19 או רמון",
    description: `דרוש השלמה ל 2 מתנדבי פעולות איבה שלחמו בשדרות עם אקדח ללא ערכה כזאת מאחר ולמדינה יש חוסרים 
    בחנויות זה קיים במחיר מופקע לעומת לפני חודש
    עלה 800 עלה ל 1500 ליח׳
    `,
    date: "14/10/2023",
    price: 250,
    image: "https://northarm.co.il/wp-content/uploads/2019/06/411525-600x600.jpg",
    paymentLink: "https://www.paypal.com/il/home",
  },
];

const helpWhatsappLink = "https://wa.me/972525830613";
export default function App() {
  return (
    <Theme>
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
        <Stack spacing={4} alignItems={"center"}>
          {donationsCards.map((donationCardProps: DonationCardProps) => (
            <DonationCard {...donationCardProps} key={donationCardProps.id} />
          ))}
        </Stack>
      </Sheet>
    </Theme>
  );
}
