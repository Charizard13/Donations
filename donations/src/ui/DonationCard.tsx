import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";

export type DonationCardProps = {
  id: string;
  title: string;
  date: string;
  price: number;
  description: string;
  image: string;
  paymentLink: string;
};

function DonationCard({ title, date, price, image, description, paymentLink }: DonationCardProps) {
  return (
    <Card
      sx={{
        width: "400px",
        maxWidth: "100%",
      }}
    >
      <div>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-md">{date}</Typography>
        {/* <IconButton aria-label="bookmark Bahamas Islands" variant="plain" color="neutral" size="sm" sx={{ position: "absolute", top: "0.875rem", right: "0.5rem" }}>
          <BookmarkAdd />
        </IconButton> */}
      </div>
      <Typography level="body-sm">{description}</Typography>

      <AspectRatio minHeight="120px" maxHeight="200px" objectFit="contain">
        <img src={`${image}?auto=format&fit=crop&w=286`} srcSet={`${image}?auto=format&fit=crop&w=286&dpr=2 2x`} loading="lazy" alt="" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">גויס סה״כ</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ₪{price}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          component="a"
          href={paymentLink}
          referrerPolicy="no-referrer"
          target="_blank"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ mr: "auto", alignSelf: "center", fontWeight: 600 }}
        >
          תרומה באמצעות Paybox
        </Button>
      </CardContent>
    </Card>
  );
}
export default DonationCard;
