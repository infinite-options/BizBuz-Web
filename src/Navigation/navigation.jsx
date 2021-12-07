

import React, { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
//import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router-dom";
//import InstagramIcon from "@material-ui/icons/Instagram";
//import Logo from "../Assets/Images/Logo.png";
import "./Navbar.css";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [projects, setProjects] = useState(false)
  const [onClickAbout, setOnClickAbout] = useState(false)
  const [onClickproject, setOnClickProject] = useState(false)
  const [onClickteams, setOnClickTeams] = useState(false)

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
    setProjects(false)

  };

  const closeMenuHome = () => {
    setOpen(false);
    setProjects(false)
    setOnClickAbout(!onClickAbout)
    console.log("about", onClickAbout)

  };

  const closeMenuProjects = () => {
    setOpen(false);
    setProjects(true)
    setOnClickProject(!onClickproject)
    console.log("clickPro", onClickproject)

  };

  const closeMenuTeams = () => {
    setOpen(false);
    setProjects(true)
    setOnClickTeams(!onClickteams)
    console.log("click", onClickteams)
  };


  return (
  <nav className="navbar">
      <Link to="/" className="nav-logo"  onClick={closeMenu}>
         {/* <img src={Logo} style={{height:'auto', width:'10rem'}}/> */}
         <h1 >BizBuz.desgin </h1>
      </Link>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item" >
          <Link to={{pathname: '/', state_project : { project: onClickproject } }} className="nav-link" onClick={closeMenuProjects} >
           Services
          </Link>
        </li>
        <li className="nav-item">
          <Link to={{pathname: '/packages', state_teams : { teams: onClickteams } }} className="nav-link" onClick={closeMenuTeams} >
            Packages
          </Link>
        </li>

        <li className="nav-item">
          <Link to={{pathname: '/thankyou', state : { click: onClickAbout } }}  className="nav-link" onClick={closeMenuHome} >
            Products
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/thankyou2" className="nav-link" onClick={closeMenu} > 
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
