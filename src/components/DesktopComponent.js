import Sidebar from "./SideBar";
import HomePageCard from "./HomePageCard";

function DesktopComponent(props) {
     return(
        <div style={{ display: "flex", backgroundColor: "#F6F8FA" }}>
        <Sidebar history={props.history} />
        <div>
            <HomePageCard />
            {props.children}
        </div>
    </div>
     )
}
export default DesktopComponent;