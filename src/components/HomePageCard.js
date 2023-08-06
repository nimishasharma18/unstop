import React from 'react';
import{useState } from 'react';
import styled from 'styled-components';
import { Card, Modal, Nav } from 'react-bootstrap';
import CandidateCard from './CandidateCard';
import AssessmentForm from '../components/AssessmentForm';
import add from '../assets/images/add.svg';
import assignment from '../assets/images/assignment.svg';
import three_dots from '../assets/images/three_dots.svg';
import calendar_today from '../assets/images/calendar_today.svg';
import link from '../assets/images/link.svg';
import divider from '../assets/images/divider.svg';
import mobile_screen_share from '../assets/images/mobile_screen_share.svg';

function HomePageCard() {
const [showModal,setShowModal] = useState(false);


const handleClick=()=>{
  setShowModal(true);
}

  return (
    <AssessmentCard >

      <CardTitleBlock >

        <NavBar>
          <CardTitle>Assessment</CardTitle>
          <img src={divider} alt="dicider"/>
          
          <AssessmentTab variant="underline" >
            <Nav.Item>
              <ActiveAssessment   active={true}>Assessment</ActiveAssessment >
            </Nav.Item>

          </AssessmentTab>
        </NavBar>
        <img src={mobile_screen_share} alt="mobile-screen" />

      </CardTitleBlock>



      <CardBody>
<HrSeparator/>
        <AssessmentTitle>Assessments Overview</AssessmentTitle>
        <CandidateCard />
        <MyAssessmentBlock>
          <AssessmentTitle>My Assessment</AssessmentTitle>
          <MyAssessmentBody>
            <NewAssessmentCard>
              <ImgBlock>
                <img src={add} alt="assessment-add" onClick={handleClick} />
              </ImgBlock>
              {showModal && 
            <AssessmentForm showModal={showModal} setShowModal={setShowModal}/>
              }
              <AssessmentTitle>New Assessment</AssessmentTitle>
              <AssessmentDesc>
                From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!
              </AssessmentDesc>
            </NewAssessmentCard>

            <AssignmentCard>
              <AssessmentImg>
                <img src={assignment} alt="assignment" />
                <img src={three_dots} alt="three-dots" />
              </AssessmentImg>
              <AssignmentTitleBlock>
                <AssignmentTitle>
                  Math Assessment
                </AssignmentTitle>
                <TitleDesc>
                  <Title>
                    Job
                  </Title>
                  <TitleDivider>|</TitleDivider>
                  <img src={calendar_today} alt="calendar" />
                  <DateDesc>20 Apr 2023</DateDesc>
                </TitleDesc>
              </AssignmentTitleBlock>
              <HrDotted />
              <FooterSection>
                <TimeDurationBlock>
                  <TimeSec><TimeTxt>
                    00</TimeTxt>
                    <TimeTxt>Duration</TimeTxt></TimeSec>

                  <QuestionSec><TimeTxt>
                    00</TimeTxt>
                    <TimeTxt>Question</TimeTxt></QuestionSec>
                </TimeDurationBlock>
                <ShareBlock>
                  <ShareBtn>
                    <img src={link} alt="share-icon" />
                    <ShareTxt>Share</ShareTxt>
                  </ShareBtn>
                  <Tag>
                    <TagTxt>LP</TagTxt>
                  </Tag>
                </ShareBlock>
              </FooterSection>
            </AssignmentCard>

            <AssignmentCard>
              <AssessmentImg>
                <img src={assignment} alt="assignment" />
                <img src={three_dots} alt="three-dots" />
              </AssessmentImg>
              <AssignmentTitleBlock>
                <AssignmentTitle>
                  Math Assessment
                </AssignmentTitle>
                <TitleDesc>
                  <Title>
                    Job
                  </Title>
                  <TitleDivider>|</TitleDivider>
                  <img src={calendar_today} alt="calendar" />
                  <DateDesc>20 Apr 2023</DateDesc>
                </TitleDesc>
              </AssignmentTitleBlock>
              <HrDotted />
              <FooterSection>
                <TimeDurationBlock>
                  <TimeSec><TimeTxt>
                    00</TimeTxt>
                    <TimeTxt>Duration</TimeTxt></TimeSec>

                  <QuestionSec><TimeTxt>
                    00</TimeTxt>
                    <TimeTxt>Question</TimeTxt></QuestionSec>
                </TimeDurationBlock>
                <ShareBlock>
                  <ShareBtn>
                    <img src={link} alt="share-icon" />
                    <ShareTxt>Share</ShareTxt>
                  </ShareBtn>
                  <Tag>
                    <TagTxt>LP</TagTxt>
                  </Tag>
                </ShareBlock>
              </FooterSection>
            </AssignmentCard>

          </MyAssessmentBody>


        </MyAssessmentBlock>
       
      </CardBody>

    </AssessmentCard>

  );
}


export default HomePageCard;






const AssessmentCard = styled(Card)`
display: flex;
padding: 20px;
flex-direction: column;
align-items: flex-start;

align-self: stretch;
border-radius: 0px 0px 12px 12px;
background: #FFF;
margin-left:20px;
`

const CardTitle = styled.p`
 color: var(--text-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 600;
margin-right:5px;
margin-top: 14px;
line-height: 140%; `;


const CardTitleBlock = styled(Card.Title)`
display:flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
`




const CardBody = styled(Card.Body)`
padding:20px;
`

const AssessmentTitle = styled.p`
color: var(--text-100, #1C4980);

font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 140%; `


const MyAssessmentBlock = styled.div`
margin-top:3rem;`

const NewAssessmentCard = styled.div`
display: flex;
padding: 30px;
flex-direction: column;
justify-content: center;
align-items: center;
margin-right:20px;
flex: 1 0 0;
align-self: stretch;
border-radius: 12px;
border: 1px dashed var(--system-stroke-2, #DADCE0);
background: var(--system-background, #F6F8FA);
`
const ImgBlock = styled.div`
background-color:white;
border-radius:50%;
height:70px;
width:70px;
justify-content:center;
display:flex;
`

const AssessmentDesc = styled.p`
color: var(--text-100, #1C4980);
text-align: center;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;`

const MyAssessmentBody = styled.div`
display:flex;
`

const AssessmentImg = styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-between;;`

const AssignmentCard = styled.div`
display: flex;
padding: 16px;
flex-direction: column;
margin-right:10px;
gap: 16px;
flex: 1 0 0;

border-radius: 12px;
border: 1px solid var(--system-stroke-2, #DADCE0);
background: var(--text-white, #FFF);
`

const AssignmentTitleBlock = styled.div`
`

const AssignmentTitle = styled.p`
color: var(--text-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 500;
margin:0;
line-height: 140%; `

const TitleDesc = styled.div`
display:flex;
flex-direction: row;
align-items: center;`

const Title = styled.p`
color: var(--text-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 14px;
font-style: normal;
margin:0;
font-weight: 600;
line-height: 140%;`

const TitleDivider = styled.span`
color:#DADCE0;
height:16px;
margin-left:5px;
margin-right:5px;`

const DateDesc = styled.p`
color: var(--primary-50, #8DA4BF);
font-family: Inter;
font-size: 12px;
font-style: normal;
margin:0;
font-weight: 500;
margin-left:10px;
line-height: normal;`

const HrDotted = styled.hr`
  border: none;
  border-top: 1px dotted #DADCE0;
  margin: 5px 0;
`;

const HrSeparator=styled.hr`
border: none;
border-top: 1px solid #DDE5EA;
margin:-11px 0 19px;
`;

const FooterSection = styled.div`
display: flex;
    justify-content: space-between;
    flex-direction: row;
`

const TimeDurationBlock = styled.div`
display:flex;
`

const TimeTxt = styled.p`
color: var(--text-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 12px;
font-style: normal;
margin:0;
font-weight: 500;
line-height: 140%; /* 16.8px */`

const QuestionSec = styled.div`
margin-left:10px;`

const TimeSec = styled.div`
`

const ShareBlock = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`

const ShareBtn = styled.div`
border-radius: 50px;
border: 1px solid var(--text-100, #1C4980);
background: var(--text-white, #FFF);
display: flex;
height: 30px;
padding: 2px 8px 2px 6px;
justify-content: center;
align-items: center;
gap: 4px;
`

const ShareTxt = styled.span`
color: #1C4980;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 140%; `

const Tag = styled.div`
border-radius: 50%;
border: 1px solid var(--text-white, #FFF);
background: var(--pastel-neon-blue, #6548EE);
display: flex;
width: 30px;
margin-left: 10px;
height: 30px;
padding: 5px 6px;
justify-content: center;
align-items: center;
gap: 10px;
flex-wrap: wrap;`

const TagTxt = styled.p`
color: #FFF;
text-align: center;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;`

const NavBar = styled.div`
display:flex;
`

const AssessmentTab = styled(Nav)`
margin-left:10px;`

const ActiveAssessment = styled(Nav.Link)`
.nav-link::active
{
color: #0073E6 !important; 
border-bottom-color: #0073E6 !important
}`