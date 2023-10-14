"use client";

import { IconButton } from "@mui/joy";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";

type ShareIconButtonProps = {
  shareableLink: string;
};
export default function ShareIconButton({ shareableLink }: ShareIconButtonProps) {
  const handleShare = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    try {
      await navigator.share({
        url: shareableLink,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <IconButton
      aria-label="שיתוף בקשה לתרומה"
      color="neutral"
      size="sm"
      onClick={handleShare}
      sx={{
        position: "absolute",
        top: "0.5rem",
        left: "0.5rem",
      }}
    >
      <IosShareRoundedIcon />
    </IconButton>
  );
}
