/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
//import Divider from "@mui/material/Divider";
//import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
//import ListSubheader from "@mui/material/ListSubheader";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";

import PhoneRoundedIcon from "@mui/icons-material/Phone";
import "./Header.css";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import Button from "react-bootstrap/Button";

import Popup from "../../utils/Popup";

import PopupContact from "./PopupContact";
import Image from "./Picture1.png";
const Header = (props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [isNewPopup, setIsNewPopup] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const openmodal = () => {
    setIsNewPopup(true);
    setOpenMenu(false);
  };
  const updateParentState = (value) => {
    setIsNewPopup(value);
  };
  return (
    <div id="menu" className="nav-container container-fluid">
      {isNewPopup ? (
        <Popup imgSrc={Image} openPopup={isNewPopup} setPopups={setIsNewPopup}>
          <PopupContact updateParentState={updateParentState} />
        </Popup>
      ) : null}
      <nav>
        <div className="nav-logo-container">
          <a href="#banner" className="page-scroll dropdown">
            <img
              src="/assets/Icons/Picture1.png"
              alt="LegoAI"
              className="logo1"
            />
          </a>
        </div>

        <div className="navbar-links-container">
          <ul className="nav-items">
            <li className="nav-item ">
              <a href="#OntoCraft" className="page-scroll dropdown ">
                Platform
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#OntoCraft">OntoCraft</a>
                </li>
                <li>
                  <a href="#OntoSphere">OntoSphere</a>
                </li>
                <li>
                  <a href="#OntoQl">OntoQL</a>
                </li>
              </ul>
            </li>
            {
              // <li className="nav-item">
              //   <a href="#UseCase" className="page-scroll ">
              //     Use Cases
              //   </a>
              // </li>
            }
            <li className="nav-item">
              <a href="#About" className="page-scroll">
                About Us
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#ourvision">Our Vision</a>
                </li>
                <li>
                  <a href="#team"> The Founding Team</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </li>
            {
              //  <li className="nav-item">
              //   <a href="#Community" className="page-scroll">
              //     Community
              //   </a>
              // </li>
              // <li className="nav-item">
              //   <a href="#Blog" className="page-scroll">
              //     Blogs
              //   </a>
              // </li>
            }
            <li className="nav-item">
              <a href="#Resource" className="page-scroll ">
                Resources
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">API Documentation</a>
                </li>
                <li>
                  <a href="#Architecture">Technical Architecture</a>
                </li>
                <li>
                  <a href="#">Blogs</a>
                </li>
              </ul>
            </li>
            <li>
              <Button
                onClick={() => {
                  setIsNewPopup(!isNewPopup);
                }}
                variant="outline-light"
                className="wait-list-btn"
              >
                Join Wait List
              </Button>
            </li>
          </ul>
        </div>

        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>

        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box sx={{ width: 250 }} role="presentation">
            <List>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Platform" />
                {open ? (
                  <ExpandLess onClick={handleClick} />
                ) : (
                  <ExpandMore onClick={handleClick} />
                )}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component="a"
                    href="#OntoCraft"
                    className="page-scroll"
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="OntoCraft" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component="a"
                    href="#OntoSphere"
                    className="page-scroll"
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="OntoSphere" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component="a"
                    href="#OntoQl"
                    className="page-scroll"
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="OntoQL" />
                  </ListItemButton>
                </List>
              </Collapse>

              {
                //   <ListItemButton>
                //   <ListItemIcon>
                //     <CommentRoundedIcon />
                //   </ListItemIcon>
                //   <ListItemText
                //     primary="Usecase"
                //     onClick={() => setOpenMenu(false)}
                //   />
                // </ListItemButton>
              }
              <ListItemButton>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="About" />
                {open1 ? (
                  <ExpandLess onClick={handleClick1} />
                ) : (
                  <ExpandMore onClick={handleClick1} />
                )}
              </ListItemButton>
              <Collapse in={open1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component="a"
                    href="#ourvision"
                    className="page-scroll"
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Our Vision" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component="a"
                    href="#team"
                    className="page-scroll"
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="The Founding Team" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component="a"
                    href="#Contact"
                    className="page-scroll"
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Contact" />
                  </ListItemButton>
                </List>
              </Collapse>

              {
                //   <ListItemButton
                //   component="a"
                //   href="#Community"
                //   className="page-scroll"
                //   onClick={() => setOpenMenu(false)}
                // >
                //   <ListItemIcon>
                //     <Diversity1Icon />
                //   </ListItemIcon>
                //   <ListItemText primary="Community" />
                // </ListItemButton>
              }
              {
                // <ListItemButton
                //   component="a"
                //   href="#Blog"
                //   className="page-scroll"
                //   onClick={() => setOpenMenu(false)}
                // >
                //   <ListItemIcon>
                //     <BookOnlineIcon />
                //   </ListItemIcon>
                //   <ListItemText primary="Blog" />
                // </ListItemButton>
              }
              <ListItemButton>
                <ListItemIcon>
                  <BookOnlineIcon />
                </ListItemIcon>
                <ListItemText primary="Resources" />
                {open2 ? (
                  <ExpandLess onClick={handleClick2} />
                ) : (
                  <ExpandMore onClick={handleClick2} />
                )}
              </ListItemButton>
              <Collapse in={open2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component="a"
                    href="#"
                    className="page-scroll"
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="API Documentation" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component="a"
                    href="#"
                    className="page-scroll"
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Technical Architecture" />
                  </ListItemButton>
                  <ListItemButton
                    sx={{ pl: 4 }}
                    component="a"
                    href="#"
                    className="page-scroll"
                    onClick={() => setOpenMenu(false)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Blogs" />
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton
                className="wait-list-btn mobile-view"
                onClick={openmodal}
              >
                <ListItemText primary="Join Wait List" />
              </ListItemButton>
            </List>
          </Box>
        </Drawer>
      </nav>
    </div>
  );
};
export default Header;
