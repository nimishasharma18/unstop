import { useState } from "react";
import styled from "styled-components";

import search from '../assets/images/search.svg';
import filter from '../assets/images/filter.svg';
import bar from '../assets/images/bar.svg';
import add from '../assets/images/add.svg';
import link from '../assets/images/link.svg';
import three_dots from '../assets/images/three_dots.svg';
import calendar_today from '../assets/images/calendar_today.svg';
import assignment from '../assets/images/assignment.svg';

import AssessmentForm from './AssessmentForm';

const MyAssessment = () =>{
  const [showModal,setShowModal] = useState(false);

  const handleClick=()=>{
    setShowModal(true);

  }

    return(
<MyAssessmentBlock>
<Header>
<Title>My Assessment</Title>
<ImgBlock>
<img src ={search} alt="icons" height={22} width={22} />
<img src ={filter} alt="icons" height={22} width={22} />
<img src ={bar} alt="icons" height={22} width={22} />

</ImgBlock>
</Header>
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
          
                <AssignmentBlock>
                <img src={assignment} alt="assignment" />
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
                </AssignmentBlock>
              
        
               
                <img src={three_dots} alt="three-dots" />
              </AssessmentImg>
             
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
          
                <AssignmentBlock>
                <img src={assignment} alt="assignment" />
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
                </AssignmentBlock>
              
        
               
                <img src={three_dots} alt="three-dots" />
              </AssessmentImg>
             
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
          
                <AssignmentBlock>
                <img src={assignment} alt="assignment" />
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
                </AssignmentBlock>
              
        
               
                <img src={three_dots} alt="three-dots" />
              </AssessmentImg>
             
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
</MyAssessmentBlock>
    )
}

export default MyAssessment;

const MyAssessmentBlock = styled.div`
padding:22px;`

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
`

const Title = styled.p`
color: var(--text-100, #1C4980);
font-family: Inter;
font-size: 16px;
font-style: normal;
font-weight: 600;
margin:0;
line-height: normal;
`

const ImgBlock =styled.div`
`



const AssessmentTitle = styled.p`
color: var(--text-100, #1C4980);

font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 140%; `



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


const AssessmentDesc = styled.p`
color: var(--text-100, #1C4980);
text-align: center;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;`



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
margin-top:20px;
border-radius: 12px;
border: 1px solid var(--system-stroke-2, #DADCE0);
background: var(--text-white, #FFF);
`

const AssignmentTitleBlock = styled.div`
margin-left:10px;
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

const AssignmentBlock = styled.div`
display:flex;
`