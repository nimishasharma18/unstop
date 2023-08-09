import React, { useState } from "react";
import styled from "styled-components";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import SidebarItems  from "../constants/sideBarManu";

// STYLES
import "../styles/navbar.css";

import segment from "../assets/images/segment.svg";
import close from "../assets/images/close.svg";
import laptop from "../assets/images/laptop.svg";
import admin_meds from  "../assets/images/admin_meds.svg";
import { Assessment } from "@mui/icons-material";

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

        <div className="navbar">

            <AssessmentHeader onClick={showSidebar} >
              <AssessmentMenu> <img src={segment} alt="tiggle-icon"/>
              <AssessmentTxt>Assessment</AssessmentTxt></AssessmentMenu>
              </AssessmentHeader>

        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>

<ToggleBarIcon  className="menu-bars">
      <MenuTxt>Menu</MenuTxt>
      <div><img src={close} alt="close-icon" className="menu-bars" height={24} width={24}/></div>
      </ToggleBarIcon>



      {SidebarItems.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
      
<Link href="#">
<img src={item.icon} alt="icon"/>
                    <MenuName>{item.name}</MenuName></Link>
   

                </li>
              );
            })}
             <HrLine/>
        <AdminItem>
        <AdminSec>
        <img src={admin_meds} alt="admin-img" height={20} width={20}/>
        <AdminText>Round Status</AdminText>


        </AdminSec>
        <AdminBtn>Admin</AdminBtn> 
       
        </AdminItem>
      

           
     
          </ul>
        </nav>

    </>
  );
}


const ToggleBarIcon = styled.li`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    align-content: flex-end;
    padding:16px;
`



const HrLine = styled.hr`
border: none;
border-top: 1px dotted #DADCE0;
margin: 5px 0;
margin:10px;
`
const AdminItem = styled.div`
display: flex;
padding:10px 20px 0px 32px;
    flex-direction: row;
    justify-content:space-between;
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
margin-right:8px;

margin:0;
line-height: 140%; `

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

const AdminSec= styled.div`
display:flex;
`

const MenuTxt = styled.p`
color: var(--primary-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 140%; `

const MenuName = styled.p`
color: var(--primary-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
margin-left: 5px;
margin-top: 16px;
line-height: 140%; `


const AssessmentTxt = styled.p`
margin:0;
color: var(--text-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: 140%;
margin-left:8px;

`

const AssessmentMenu =styled.div`
display: flex;
justify-content: center;
align-items: center;`

const AssessmentHeader =styled.div``