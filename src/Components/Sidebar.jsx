import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { IconContext } from 'react-icons/lib';
import "./Header.css";
import "react-pro-sidebar/dist/css/styles.css";
import { FaBars } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Dropdown from 'react-bootstrap/Dropdown';

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [sidebaropen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  const sidebarClick = () => {
    const list = document.getElementById("maincontainar").classList;
    if (sidebaropen) {
      list.remove("ActiveSide");
    } else {
      list.add("ActiveSide");
    }
    setSidebarOpen(!sidebaropen);
  }

  const LogoutHandle = () => {
    navigate("/login");
  }

  return (
    <>
      <Navbar expand="lg" className="degin mainnavbar">
        <div className="d-flex justify-content-between w-100">
          <div>
            <Button variant="" onClick={sidebarClick}>
              <FaBars size={30} />
            </Button>
          </div>
          <div className='d-flex align-items-end h4 maincontent'>
            <p className='ms-xxl-auto text-info ms-auto m-0 text-white'>स्वच्छ अधिकार</p>
          </div>
          <div>
            <Dropdown align="end">
              <Dropdown.Toggle as="a" className="dropdown-toggle d-flex align-items-center hidden-arrow">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-circle"
                  height="40px"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/profile">My profile</Dropdown.Item>
                <Dropdown.Item as={Link} to="/settings">Settings</Dropdown.Item>
                <Dropdown.Item onClick={LogoutHandle}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </Navbar>
      <div id="header">
        {sidebaropen && (
          <ProSidebar className="prosidebr" collapsed={menuCollapse}>
            <SidebarHeader />
            <SidebarContent>
              <Menu iconShape="square">
                <MenuItem icon={<FiHome />} active={location.pathname === '/home'}>
                  <span>
                    <Link to='/home'>Home</Link>
                  </span>
                </MenuItem>
                <MenuItem icon={<FaList />} active={location.pathname === '/Users'}>
                  <span>
                    <Link to='/Users'>Add New Users</Link>
                  </span>
                </MenuItem>
                <MenuItem icon={<FaRegHeart />} active={location.pathname === '/ChangePassword'}>
                <span>
                    <Link to='/ChangePassword'>Change Password</Link>
                  </span>
                
                </MenuItem>
                <MenuItem icon={<RiPencilLine />} active={location.pathname === '/author'}>
                  Author
                </MenuItem>
                <MenuItem icon={<BiCog />} active={location.pathname === '/settings'}>
                  Settings
                </MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />} onClick={LogoutHandle}>
                  Logout
                </MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        )}
        <div className='marqee mt-2'>
          <Marquee>MobNo:- 9898202735   स्वच्छ अधिकार सम्मान (ट्रस्ट) Address: Shop No.2, 1st Floor, Janki Complex, Paliwal Chokdi, GIDC Sachin, Surat - 394230</Marquee>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
