import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Image from "next/image";
import PayBoxButton from "./PayBoxButton";
import ShareIconButton from "./ShareIconButton";
export type DonationCardProps = {
  id: string;
  title: string;
  date: string;
  price: number;
  description: string;
  image: string;
  paymentLink: string;
};

function DonationCard({
  title,
  date,
  price,
  image,
  description,
  paymentLink,
  id,
  priority,
}: DonationCardProps & {
  priority: boolean;
}) {
  return (
    <Card
      dir="rtl"
      sx={{
        ":hover": {
          boxShadow: "md",
        },
        maxWidth: "100%",
        width: "400px",
      }}
    >
      <div>
        <Typography level="title-lg">{title}</Typography>
        <Typography level="body-sm">{date}</Typography>
        <ShareIconButton shareableLink={`https://donations-roan.vercel.app/donations/${id}`} />
      </div>

      <Typography level="body-sm">{description}</Typography>
      <AspectRatio minHeight="120px" maxHeight="200px" objectFit="contain">
        <Image src={`${image}?auto=format&fit=crop&w=286`} fill={true} priority={priority} alt={title} sizes="(max-width: 768px) 120px, 200px" />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">יעד גיוס:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {price.toLocaleString("he-IL", {
              style: "currency",
              minimumFractionDigits: 0,
              currency: "ILS",
            })}
          </Typography>
        </div>
        <PayBoxButton paymentLink={paymentLink} />
      </CardContent>
    </Card>
  );
}
export default DonationCard;
