import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './sidebarData'
import SubMenu from './sidemenu';
import { IconContext } from 'react-icons/lib';
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import './sidemenu.css';
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();
  const showSidebar = () => setSidebar(!sidebar);
  const LogoutHandle = () => {
    navigate("/login");
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to='#'>
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>

          <h1 className='ms-xxl-auto text-info ms-auto'>Svachchh Adhikaar Sammaan (Trast)</h1>
          <button className='logout-button' onClick={LogoutHandle}>
            <h5 className='color'> welecome: kameshwar Prasad</h5>
            <IoMdLogOut />
          </button>
        </Nav>
        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
      <marquee className="marq"
        bgcolor="Green"
        direction="left"
        loop="">
        <div className="geek1">MobNo:- 9898202735   स्वच्छ अधिकार सम्मान (ट्रस्ट)  

        Address: Shop No.2, 1st Floor, Janki Complex, Paliwal Chokdi, GIDC Sachin, Surat - 394230
        </div>
      </marquee>
    </>
  );
};

export default Sidebar;
