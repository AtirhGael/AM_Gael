import Tab from "@mui/material/Tab";
import { Tabs, styled } from "@mui/material";

export const AntTabs = styled(Tabs)({
  backgroundColor: "white",
  width: 270,
  borderRadius: 10,
  height: 55,
  display: "flex",
  justifyContent: "center",
  "& .MuiTabs-indicator": {
    backgroundColor: "#4CAC3E",
    height: 3,
  },
});

export const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    // minWidth: 0,
    width: 130,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
    color: "black",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      //   color: "#4CAC3E",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#000",
      fontWeight: theme.typography.fontWeightBold,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

