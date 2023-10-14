"use client";
import { Button } from "@mui/joy";

type PayBoxButtonProps = {
  paymentLink: string;
};

export default function PayBoxButton({ paymentLink }: PayBoxButtonProps) {
  return (
    <Button
      variant="solid"
      size="md"
      onClick={(e) => {
        e.stopPropagation();
        window.open(paymentLink, "_blank");
      }}
      color="primary"
      aria-label="Explore Bahamas Islands"
      sx={{ mr: "auto", alignSelf: "center", fontWeight: 600 }}
    >
      תרומה באמצעות Paybox
    </Button>
  );
}
