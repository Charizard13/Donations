import DonationCard from "@/ui/DonationCard/DonationCard";
import { donationsCards } from "@/utils/consts";
import { Sheet } from "@mui/joy";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  const id = params.id;
  const donationCardProps = donationsCards.find((donationCardProps) => donationCardProps.id === id);
  if (!donationCardProps) throw new Error(`Donation card with id ${id} not found`);

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL(`https://donations-roan.vercel.app/donations/${id}`),
    title: donationCardProps.title,
    description: donationCardProps.description,
    keywords: donationCardProps.title.split(" "),
    openGraph: {
      type: "website",
      siteName: "תרומות לחיילי צה״ל",
      images: [donationCardProps.image, ...previousImages],
      title: donationCardProps.title,
      url: `https://donations-roan.vercel.app/donations/${id}`,
      description: donationCardProps.description,
    },
    twitter: {
      title: donationCardProps.title,
      description: donationCardProps.description,
      images: [donationCardProps.image, ...previousImages],
    },
  };
}
export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const donationCardProps = donationsCards.find((donationCardProps) => donationCardProps.id === id);
  if (!donationCardProps) throw new Error(`Donation card with id ${id} not found`);
  return (
    <Sheet
      style={{
        alignSelf: "center",
        maxWidth: "100%",
      }}
    >
      <DonationCard {...donationCardProps} priority={true} />
    </Sheet>
  );
}
