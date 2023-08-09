
import { useState } from "react";
import AssessmentTabs from "./AssessmentTabs";
import ToggleBar from "./ToggleSideBar";
import MyAssessment from './MyAssessment';


// Tabs Array
const tabs = [
  {
    label: "My Assessments",
    Component: MyAssessment,
  },
  {
    label: "Unstop Assessments",
    Component: MyAssessment
  },
 
];

function MobileComponent (){

    const [selectedTab2, setSelectedTab2] = useState(0);


    return(
<div>
<ToggleBar/>
<AssessmentTabs
      
        selectedTab={selectedTab2}
        onClick={setSelectedTab2}
        tabs={tabs}
        type="pills"
      />
</div>
    )
}

export default MobileComponent;