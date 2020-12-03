import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#263238",
    },
    secondary: {
      main: "#8DC26F",
    },
  },
  shadows: ["none"],
  props: {
    MuiButton: {
      disableRipple: true,
    },
  },
})
