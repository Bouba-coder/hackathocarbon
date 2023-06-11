import * as React from "react";
import { useTheme, ThemeProvider } from "@mui/material/styles";
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
import DividerComponent from "../components/DividerComponent";
import { authService } from "../services";
import LogoutIcon from '@mui/icons-material/Logout';
import { ListEntreprise } from "./entreprise/List";
import { ListConsultant } from "./consultant/List";
import { ListFormation } from "./formation/List";
import { ViewUser } from "./user/View";
import { Link } from "react-router-dom";
import Forum from "../components/Consultant/Forum";
import ChatIcon from '@mui/icons-material/Chat';

const mainListItemsRH = (handleDisplay) => {
  const dashboard = "Tableau de bord";
  const companies = "Nos clients";
  const consultants = "Nos consultants";
  const trainings = "Nos formations";
  const forum = "Forum";

  const itemsRH = [
    {
      onClick: () => handleDisplay(dashboard),
      navigate: "",
      icon: <DashboardIcon />,
      text: dashboard,
    },
    {
      onClick: () => handleDisplay(companies),
      navigate: "entreprise",
      icon: <CorporateIcon />,
      text: companies,
    },
    {
      onClick: () => handleDisplay(consultants),
      navigate: "consultant",
      icon: <PeopleIcon />,
      text: consultants,
    },
    {
      onClick: () => handleDisplay(trainings),
      navigate: "formation",
      icon: <AssignmentIcon />,
      text: trainings,
    },
    {
      onClick: () => handleDisplay(forum),
      navigate: "forum",
      icon: <ChatIcon />,
      text: forum,
    },
  ];

  return (
    <>
      {itemsRH.map((item, index) => (
        <Link to={item.navigate} key={index}>
          <ListItemButton onClick={item.onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </Link>
      ))}
    </>
  );
};

const secondaryListItemsRH = (handleDisplay) => {
  const profile = "Mon profil";

  const secondaryItemsRH = [
    {
      onClick: () => handleDisplay(profile),
      icon: <ProfileIcon />,
      text: profile,
    },
  ];

  return (
    <>
      <ListSubheader component="div" inset>
        Mes informations
      </ListSubheader>
      {secondaryItemsRH.map((item, index) => (
        <Link to="user/me" key={index}>
          <ListItemButton onClick={item.onClick}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        </Link>
      ))}
    </>
  );
};

const DashboardRH = ({ children }) => {
  const [open, setOpen] = React.useState(true);
  const [display, setDisplay] = React.useState(<HomeRH />);
  const [title, setTitle] = React.useState("Tableau de bord");
  const theme = useTheme();

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleDisplay = (title) => {
    setTitle(title);
  };

  console.log("TITLE", title);

  return (
    <ThemeProvider theme={theme}>
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
              {title}
            </Typography>
            {/* <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
          </Toolbar>
          <DividerComponent />
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
            {/* <ListSubheader component="div" inset>
              Mes informations
            </ListSubheader>
            <Link to="user">
              <ListItemButton>
                  <ListItemIcon>
                    <ProfileIcon />
                  </ListItemIcon>
                  <ListItemText primary="Mon profil" />
              </ListItemButton>
            </Link> */}
            <Divider sx={{ my: 1 }} />
            <ListItemButton key={1} onClick={() => { authService.logout(); window.location.href = "/" }}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Déconnexion" />
            </ListItemButton>
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
            {/* <Grid item xs={12} md={8} lg={9}>
              {display}
            </Grid> */}
            { children }
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default DashboardRH;
