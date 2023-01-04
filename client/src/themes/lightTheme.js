import { createTheme } from "@mui/material";

export default createTheme({
  palette: {
    primary: {
      main: "#e7d07a",
    },
    secondary: {
      main: "#ffb300",
    },
    text: {
      light: "#f5f5f5",
      primary: "#e7d07a",
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
        margin: "dense",
        fullWidth: true,
        InputLabelProps: {
          shrink: true,
          color: "primary",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "#fff",
        },
      },
    },
    MuiCard: {
      variants: [
        {
          props: { variant: "shaded" },
          style: {
            backgroundColor: "white",
            borderRadius: "10px",
          },
        },
      ],
    },
    MuiTypography: {
      defaultProps: {
        align: "left",
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 8,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#6191b5",
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#6191b5",
          backgroundColor: "white",
          borderRadius: "50%",
        },
      },
    },
  },
});
