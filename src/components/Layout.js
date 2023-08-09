// import React from 'react';
// import MediaBreakPoints from '../utils/MediabreakPoints'; 

// import Sidebar from "./SideBar";
// import HomePageCard from "./HomePageCard";
// import MobileComponent from './MobileComponent';

// function Layout(props) {
//     const smDown = MediaBreakPoints({ mediaName: 'smDown' });
//     const isMobileView = smDown ? true : false;

//     if (isMobileView) {
//       <div>hey</div>

//     } else {
//         return (
//             <div style={{ display: "flex", backgroundColor: "#F6F8FA" }}>
//                 <Sidebar history={props.history} />
//                 <div>
//                     <HomePageCard />
//                     {props.children}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Layout;
import React from 'react';
 import MobileComponent from './MobileComponent';
 import MediaBreakPoints from '../utils/MediabreakPoints'; 
import DesktopComponent from './DesktopComponent';

function Layout(props) {
  
    const smDown = MediaBreakPoints({ mediaName: 'smDown' });
        const isMobileView = smDown ? true : false;
    return (
<>
            {
            isMobileView ? (
                <div><MobileComponent/></div>
            ) :  ( 
<div><DesktopComponent props={props}/></div>
)}
       </>     
    );
}

export default Layout;
