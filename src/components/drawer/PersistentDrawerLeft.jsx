import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Sumary from "../../pages/sumary";
import Alucard from "../../pages/alucard";
import Sypha from "../../pages/sypha";
import Trevor from "../../pages/trevor";
import About from "../../pages/about";
import SearchAppBar from "../navBar/SearchAppBar";

const drawerWidth = "auto";
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [component, setComponent] = React.useState("sumary");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Castlevania's Blog
          </Typography>
          <SearchAppBar />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ListItem button onClick={() => setComponent("sumary")}>
          <ListItemIcon></ListItemIcon>

          <ListItemText disableTypography primary="Sumary" />
        </ListItem>
        <ListItem button onClick={() => setComponent("alucard")}>
          <ListItemIcon></ListItemIcon>

          <ListItemText disableTypography primary="Alucard" />
        </ListItem>
        <ListItem button onClick={() => setComponent("sypha")}>
          <ListItemIcon></ListItemIcon>

          <ListItemText disableTypography primary="Sypha" />
        </ListItem>
        <ListItem button onClick={() => setComponent("trevor")}>
          <ListItemIcon></ListItemIcon>

          <ListItemText disableTypography primary="Trevor" />
        </ListItem>
        <ListItem button onClick={() => setComponent("about")}>
          <ListItemIcon></ListItemIcon>

          <ListItemText disableTypography primary="About" />
        </ListItem>
        <Divider />
      </Drawer>
      <Main open={open}>
        {component === "sumary" ? (
          <Sumary />
        ) : component === "alucard" ? (
          <Alucard />
        ) : component === "sypha" ? (
          <Sypha />
        ) : component === "trevor" ? (
          <Trevor />
        ) : component === "about" ? (
          <About />
        ) : null}
      </Main>
    </Box>
  );
}
