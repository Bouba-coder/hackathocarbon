import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import AdbIcon from "@mui/icons-material/Adb";
import { ThemeProvider } from "@mui/material/styles";
import { themeNav } from "./Theme";
import { capitalize } from "../utils/functions";
import DividerComponent from "./DividerComponent";
import LogoCarbon from "../assets/logo_blanc.svg";
import { authService } from "../services";
import AccountCircle from '@mui/icons-material/AccountCircle';

const pages = ["login"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [user, setUser] = React.useState(null);
  // const [auth, setAuth] = React.useState(true);
  const [rh, setRh] = React.useState(false);
  const [consultant, setConsultant] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  React.useEffect(() => {
    authService.getCurrentUser().then((data) => {
      setUser(data);
      // setAuth(true);
      
      if (data?.role === "RH" || data?.role === "ADMIN") {
        setRh(true);
      } else if (data?.role === "CONSULTANT") {
        setConsultant(true);
      }
    }
    ).catch((err) => {
      setUser(null);
      setAuth(false);
    }
    );
  }, []);

  //console.log('user', user);
  // console.log('auth', auth);

  return (
    <AppBar>
      <ThemeProvider theme={themeNav}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Link href="/" underline="none">
              <img src={LogoCarbon} alt="logo" className="w-28" />
            </Link>
            {/* <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography> */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link href={`/${page}`} underline="none">
                        {capitalize(page)}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                flexDirection: "row-reverse",
                display: { xs: "none", md: "flex" },
              }}
            >
              {
                user ? (
                  <div>
                    <span className="capitalize">
                      Bienvenue {user.firstName} {user.lastName}
                    </span>
                    {rh ? (
                      <IconButton
                      size="large"
                      aria-haspopup="true"
                      color="inherit"
                      component={Link}
                      href="/dashboard"
                    >
                        <AccountCircle />
                    </IconButton>
                    ) : (
                      <IconButton
                      size="large"
                      aria-haspopup="true"
                      color="inherit"
                      component={Link}
                      href="/consultant"
                    >
                      <AccountCircle />
                    </IconButton>
                    )
                    }
                  </div>
                ) : (
                  <div>
                    {pages.map((page) => (
                      <Button
                        component={Link}
                        href={`/${page}`}
                        onClick={handleCloseNavMenu}
                        key={page}
                        sx={{ my: 2, color: "white", display: "block", m: 1 }}
                      >
                        Se connecter
                      </Button>
                    ))}
                  </div>
                )
              }
            </Box>
          </Toolbar>
        </Container>
      </ThemeProvider>
      <DividerComponent />
    </AppBar>
  );
}
export default NavBar;
