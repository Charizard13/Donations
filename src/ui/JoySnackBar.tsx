import * as React from "react";
import * as Toast from "@radix-ui/react-toast";
import type { ToastProps } from "@radix-ui/react-toast";
import { keyframes } from "@mui/system";
import Alert, { AlertProps } from "@mui/joy/Alert";

const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
  to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: "translateX(calc(100% + var(--viewport-padding)))" },
});

const JoySnackbar = React.forwardRef<HTMLLIElement, Omit<AlertProps, "ref"> & ToastProps>(function JoySnackbar({ sx, ...props }, ref) {
  return (
    <Alert
      ref={ref}
      variant="soft"
      color="neutral"
      {...props}
      component={Toast.Root}
      sx={[
        {
          boxShadow: "sm",
          '&[data-state="open"]': {
            animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
          },
          '&[data-state="closed"]': {
            animation: `${hide} 100ms ease-in`,
          },
          '&[data-swipe="move"]': {
            transform: "translateX(var(--radix-toast-swipe-move-x))",
          },
          '&[data-swipe="cancel"]': {
            transform: "translateX(0)",
            transition: "transform 200ms ease-out",
          },
          '&[data-swipe="end"]': {
            animation: `${swipeOut} 100ms ease-out`,
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    />
  );
});

export default JoySnackbar;
