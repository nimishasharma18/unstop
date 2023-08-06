import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import SidebarItems from "../constants/sideBarManu";
import { Link, useLocation } from "react-router-dom";
import admin_meds from '../assets/images/admin_meds.svg'

function Sidebar({ defaultActive }) {
    const location = useLocation();
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex);
        setActiveIndex(newIndex);
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return "/" + path;
        }
        return path;
    }

    useEffect(() => {
        const activeItem = SidebarItems.findIndex(item => getPath(item.route) === getPath(location.pathname));
        changeActiveIndex(activeItem);
    }, [location]);

    return (
        <SidebarParent>
            <div style={{ position: 'fixed', width:"auto", height:"auto" }}>
                {
                    SidebarItems.map((item, index) => (
                        <Link key={item.name} to={item.route}>
                            <SidebarItem active={index === activeIndex} >
                                <img src={item.icon} alt="img"/> 
                                <p>{item.name}</p>
                            </SidebarItem>
                        </Link>
                    ))
                }
        <HrLine/>
        <AdminItem><AdminBtn>Admin</AdminBtn> 
        <img src={admin_meds} alt="admin-img"/>
        <AdminText>Round</AdminText>
        <AdminText>Status</AdminText>
        </AdminItem>
      
            </div>
            <div className="behind-the-scenes" />
        </SidebarParent>
    );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: #ffffff;
  width:auto;
  height:auto;

  a {
    text-decoration: none;
  }

  & > div {

    height: 100vh;
  }

  .behind-the-scenes {
    width: 168px;
  }
`;

const SidebarItem = styled.div`
padding: 10px 20px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#E5F1FC;" : ""};
  margin: 4px 12px;
display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  border-radius: 8px;
  border:  ${props => props.active ? "1px solid  #0073E6":""};
  

  p {
    color:  ${props => props.active ? "#0073E6": " #1C4980"};
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;

const HrLine = styled.hr`
border: none;
border-top: 1px dotted #DADCE0;
margin: 5px 0;
margin:10px;
`

const AdminBtn = styled.div`
border-radius:22px ;
border: 1px solid var(--accent-new-red, #D63500);
background: var(--accent-red-light, #FBEBEA);
color: var(--accent-new-red, #D63500);
font-size: 10px;
font-style: normal;
font-weight: 500;
width:47px;
height:18px;
display: flex;
height: 18px;
gap: 6px;
justify-content: center;
padding: 6px 8px;
align-items: center;
margin-bottom:10px;`


const AdminItem = styled.div`
display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`
const AdminText = styled.p`
color: var(--text-100, #1C4980);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
margin:0;
line-height: 140%; `
