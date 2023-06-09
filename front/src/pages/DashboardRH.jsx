import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CorporateIcon from "@mui/icons-material/CorporateFare";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import ListConsultants from "../components/RH/ListConsultants";
import ListCompanies from "../components/RH/ListCompanies";
import ListTrainings from "../components/RH/ListTrainings";
import HomeRH from "../components/RH/HomeRH";
import Profile from "../components/RH/Profile";
import Copyright from "../components/Copyright";
import AppBar from "../components/AppBar";
import Drawer from "../components/Drawer";

const mainListItemsRH = (handleDisplay) => {
  const itemsRH = [
    {
      onClick: () => handleDisplay(<HomeRH />),
      icon: <DashboardIcon />,
      text: 'Dashboard'
    },
    {
      onClick: () => handleDisplay(<ListCompanies />),
      icon: <CorporateIcon />,
      text: 'Companies'
    },
    {
      onClick: () => handleDisplay(<ListConsultants />),
      icon: <PeopleIcon />,
      text: 'Consultants'
    },
    {
      onClick: () => handleDisplay(<ListTrainings />),
      icon: <AssignmentIcon />,
      text: 'Trainings'
    }
  ];

  return (
    <>
      {itemsRH.map((item, index) => (
        <ListItemButton key={index} onClick={item.onClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </>
  );
};

const secondaryListItemsRH = (handleDisplay) => {
  const secondaryItemsRH = [
    {
      onClick: () => handleDisplay(<Profile />),
      icon: <ProfileIcon />,
      text: 'Profile'
    }
  ];

  return (
    <>
      <ListSubheader component="div" inset>
        My Information
      </ListSubheader>
      {secondaryItemsRH.map((item, index) => (
        <ListItemButton key={index} onClick={item.onClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </>
  );
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const DashboardRH = () => {
  const [open, setOpen] = React.useState(true);
  const [display, setDisplay] = React.useState(<HomeRH />);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDisplay = (display) => {
    setDisplay(display);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItemsRH(handleDisplay)}
            <Divider sx={{ my: 1 }} />
            {secondaryListItemsRH(handleDisplay)}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid item xs={12} md={8} lg={9}>
              {display}
            </Grid>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashboardRH;
