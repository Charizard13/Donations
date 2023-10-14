import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Link from "next/link";
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
    <Link href={`/donations/${id}`} style={{ maxWidth: "100%", textDecoration: "none" }}>
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
          <Typography level="body-md">{date}</Typography>
          <ShareIconButton shareableLink={`https://donations-roan.vercel.app/posts/${id}`} title={title} description={description} />
        </div>
        <Typography level="body-sm">{description}</Typography>
        <AspectRatio minHeight="120px" maxHeight="200px" objectFit="contain">
          <Image src={`${image}?auto=format&fit=crop&w=286`} fill={true} priority={priority} alt={title} sizes="(max-width: 768px) 120px, 200px" />
        </AspectRatio>
        <CardContent orientation="horizontal">
          <div>
            <Typography level="body-xs">גויס סה״כ</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              ₪{price}
            </Typography>
          </div>
          <PayBoxButton paymentLink={paymentLink} />
        </CardContent>
      </Card>
    </Link>
  );
}
export default DonationCard;
