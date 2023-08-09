import dashboard from "../../src/assets/images/dashboard.svg";
import note_alt from "../../src/assets/images/note_alt.svg";
import quiz from "../../src/assets/images/quiz.svg"

const SidebarItems = [
    {
        name: "Dashboard",
        route: '/',
        icon:dashboard,
        cName: "nav-text"
    },
    {
        name: "Assessment",
        route: '/dashboard',
        cName: "nav-text",
        icon:note_alt,
    },
    {
        name: "My Library",
        route: '/page-1',
        cName: "nav-text",
        icon:quiz,
    },
  
];

export default SidebarItems;