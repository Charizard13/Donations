import { Stack } from "@mui/joy";
import type { DonationCardProps } from "../ui/DonationCard/DonationCard";
import DonationCard from "../ui/DonationCard/DonationCard";
import { donationsCards } from "@/utils/consts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://donations-roan.vercel.app"),
  title: "עוברים את זה ביחד",
  description: "תרומות ציוד ללוחמים",
  openGraph: {
    images: ["https://klvoddikzmytpbewxsir.supabase.co/storage/v1/object/public/donations/2.webp?t=2023-10-14T15%3A57%3A39.612Z"],
  },
  twitter: {
    images: ["https://klvoddikzmytpbewxsir.supabase.co/storage/v1/object/public/donations/2.webp?t=2023-10-14T15%3A57%3A39.612Z"],
  },
};
export default function Home() {
  return (
    <Stack spacing={4} alignItems={"center"}>
      {donationsCards.map((donationCardProps: DonationCardProps) => (
        <DonationCard {...donationCardProps} key={donationCardProps.id} priority={false} />
      ))}
    </Stack>
  );
}
