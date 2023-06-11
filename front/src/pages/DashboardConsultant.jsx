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
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState, useEffect } from "react";
import { getConsultants, getConsultantById } from "../utils/api";
//import ProfilConsultant from '../components/Profil'
import Experiences from "../components/Consultant/Experirences";
import Copyright from "../components/Copyright";
import AppBar from "../components/AppBar";
import Drawer from "../components/Drawer";
import ProfilConsultant from "../components/Consultant/Profil";
import Formation from "../components/Consultant/Formation";
import ConsultantForm from "../components/Consultant/AddInformation";
import Forum from "../components/Consultant/Forum";
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from '@mui/icons-material/Folder';
import PeopleIcon from "@mui/icons-material/People";
import ProfileIcon from "@mui/icons-material/AccountCircle";
import DividerComponent from "../components/DividerComponent";
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import useAuth from "../hooks/useAuth";
import MyProfile from "../components/Consultant/forms/MyProfile";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { Link } from "react-router-dom";
import { authService } from "../services";
import { useNavigate } from "react-router-dom";
import ChatIcon from '@mui/icons-material/Chat';

//main menu consultant
const sideMenuConsultant = (handleDisplay) => {
  const trainings = "Formations";
  const cv = "cv";
  const forum = "Forum";

  const itemsConsultant = [
    {
      onClick: () => handleDisplay(<Formation />, trainings),
      icon: <DashboardIcon />,
      text: 'Formation'
    },
    // {
    //   onClick: () => handleDisplay(<MyProfile />, cv),
    //   icon: <AccessibilityNewIcon />,
    //   text: "Cv"
    // },
    {
      onClick: () => handleDisplay(<Forum />, forum),
      icon: <ChatIcon />,
      text: 'Forum'
    }
  ];


  return (
    <>
      {itemsConsultant.map((item, index) => (
        <ListItemButton key={index} onClick={item.onClick}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </>
  );
};
//secondary menu consultant
const secondMenuConsultant = (handleDisplay, data) => {
  const profile = "Mon profil";
  const experiences = "Mon dossier consultant";
  const secondaryItemsRH = [
    {
      onClick: () => handleDisplay(<ProfilConsultant  consultant={ data } />, profile),
      icon: <ProfileIcon />,
      text: 'Mon profil'
    },
    {
      onClick: () => handleDisplay(<ConsultantForm />, experiences),
      icon: <FolderIcon />,
      text: 'Mon dossier'
    },
  ];

  return (
    <>
      <ListSubheader component="div" sx={{ textAlign: "center" }}>
        Mon espace personnel
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


export default function DashboardConsultant() {
//get consultant
const navigate = useNavigate();
const [consultant, setConsultant] = useState({});
const [open, setOpen] = React.useState(true);
const [loading, setLoading] = useState(false) 
const theme = useTheme();

useEffect(() => {
  const userId = localStorage.getItem("currentUser")
  getConsultantById(userId).then((res)=>{
    setConsultant(res)
  })

  //console.log("get consultant +++++ by id", consultant)
  if (Object.keys(consultant).length === 0) {
    setLoading(true);
  }

}, []);

  const [display, setDisplay] = React.useState(<Formation />);
  const [title, setTitle] = React.useState("Formation");
  
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const handleDisplay = (display, title) => {
    setDisplay(display);
    setTitle(title);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
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
            <ListItemButton key={1}>
                <ListItemIcon>
                  <HomeRoundedIcon />
                </ListItemIcon>
              <Link to={`/`}>
                <ListItemText primary="Page d'accueil" />
              </Link>
            </ListItemButton>
            <Divider sx={{ my: 1 }} />
            { sideMenuConsultant(handleDisplay) }
            <Divider sx={{ my: 1 }} />
            { secondMenuConsultant(handleDisplay, consultant) }
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
            {display}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
