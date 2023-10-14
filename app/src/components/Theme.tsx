import { CssVarsProvider, extendTheme } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

const theme = extendTheme({
  //make html padding 0
  components: {
    JoyScopedCssBaseline: {
      styleOverrides: {
        // html: {
        //   padding: 0,
        // },
      },
    },
  },
});

type ThemeProps = {
  children: React.ReactNode;
};

export default function Theme(props: ThemeProps) {
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </CssVarsProvider>
  );
}
