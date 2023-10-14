import { Stack } from "@mui/joy";
import type { DonationCardProps } from "../ui/DonationCard/DonationCard";
import DonationCard from "../ui/DonationCard/DonationCard";
import { donationsCards } from "@/utils/consts";

export default function Home() {
  return (
    <Stack spacing={4} alignItems={"center"}>
      {donationsCards.map((donationCardProps: DonationCardProps) => (
        <DonationCard {...donationCardProps} key={donationCardProps.id} />
      ))}
    </Stack>
  );
}
