"use client";

import { Box, IconButton, Typography } from "@mui/joy";
import IosShareRoundedIcon from "@mui/icons-material/IosShareRounded";
import JoySnackbar from "../JoySnackBar";
import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

type ShareIconButtonProps = {
  shareableLink: string;
};
export default function ShareIconButton({ shareableLink }: ShareIconButtonProps) {
  const [open, setOpen] = useState(false);

  const handleShare = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    try {
      await navigator.share({
        url: shareableLink,
      });
    } catch (e) {
      await navigator.clipboard.writeText(shareableLink);
      setOpen(true);
    }
  };
  return (
    <>
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
      <Toast.Provider swipeDirection="right">
        <JoySnackbar open={open} onOpenChange={setOpen} color="success">
          <Typography>
            <b>הועתק ללוח</b>
          </Typography>
        </JoySnackbar>
        <Box
          component={Toast.Viewport}
          sx={{
            "--viewport-padding": "25px",
            position: "fixed",
            bottom: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            padding: "var(--viewport-padding)",
            gap: "10px",
            width: "390px",
            maxWidth: "100vw",
            margin: 0,
            listStyle: "none",
            zIndex: 2147483647,
            outline: "none",
          }}
        />
      </Toast.Provider>
    </>
  );
}
