import { Button } from "@mui/joy";

type PayBoxButtonProps = {
  paymentLink: string;
};

export default function PayBoxButton({ paymentLink }: PayBoxButtonProps) {
  return (
    <Button
      component="a"
      href={paymentLink}
      target="_blank"
      rel="noopener noreferrer"
      color="primary"
      aria-label="תרום עכשיו באמצעות Paybox"
      sx={{ mr: "auto", alignSelf: "center", fontWeight: 600 }}
    >
      תרומה באמצעות Paybox
    </Button>
  );
}
