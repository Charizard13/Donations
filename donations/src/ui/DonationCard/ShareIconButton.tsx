"use client";

import { IconButton } from "@mui/joy";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";

type ShareIconButtonProps = {
  shareableLink: string;
  title: string;
  description: string;
};
export default function ShareIconButton({ shareableLink, title, description }: ShareIconButtonProps) {
  const handleShare = async () => {
    try {
      await navigator.share({
        title,
        text: description,
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
