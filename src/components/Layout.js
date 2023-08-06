import React from 'react';
import Sidebar from "./SideBar";
import HomePageCard from "./HomePageCard";

function Layout(props) {
    return (
        <div>
            <div style={{display: "flex" ,backgroundColor:"#F6F8FA"}}>
                <Sidebar history={props.history}/>
                <div>
                    <HomePageCard/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Layout;
