import styled from'styled-components';
import agenda from '../assets/images/agenda.svg';
import candidates from '../assets/images/candidates.svg';
import divider from '../assets/images/divider.svg';
import candidate_source from '../assets/images/candidate_source.svg';
import purpose from '../assets/images/purpose.svg';

function CandidateCard() {
    return(
        <>
        <CandidateCardContainer>

    <TotalAssessmentCard >
    <TotalAssessmentTitle>Total Assessment</TotalAssessmentTitle>
    <AssessmentDetails>
        <ImgContainer>
        <img src={agenda} alt="icon" style={{height:20,width:20}}/></ImgContainer>

<Count>34</Count>
    </AssessmentDetails>
    </TotalAssessmentCard>
    <CandidatesCard>
    <TotalAssessmentTitle>Candidates</TotalAssessmentTitle>
    <CandidateDetails>
       
        <img src={candidates} alt="icon" style={{height:40,width:40}}/>
        <CandidatureDetails>
            <CandidateBlock>
                <CandidateCount>11,954</CandidateCount>
                <CandidateActiveCount>+34</CandidateActiveCount>
            </CandidateBlock>
            <TotalCandidateCount>Total Candidate</TotalCandidateCount>
            
        </CandidatureDetails>
        <DividerBlock>
        <img src={divider} alt="divider"/>
        </DividerBlock>
        <CandidatureDetails>
            <CandidateBlock>
                <CandidateCount>1,19</CandidateCount>
                <CandidateActiveCount>+89</CandidateActiveCount>
            </CandidateBlock>
            <TotalCandidateCount>Who Attamped</TotalCandidateCount>
            
        </CandidatureDetails>
    </CandidateDetails>
    
    </CandidatesCard>
    <CandidatesCard>
    <TotalAssessmentTitle>Candidates Source </TotalAssessmentTitle>
    <CandidateDetails>
       
        <img src={candidate_source} alt="icon" style={{height:40,width:40}}/>
        <CandidatureDetails>
            <CandidateBlock>
                <CandidateCount>11,000</CandidateCount>
                <CandidateActiveCount>+84</CandidateActiveCount>
            </CandidateBlock>
            <TotalCandidateCount>E-mail</TotalCandidateCount>
            
        </CandidatureDetails>
        <DividerBlock>
        <img src={divider} alt="divider"/>
        </DividerBlock>
        <CandidatureDetails>
            <CandidateBlock>
                <CandidateCount>1,45</CandidateCount>
                <CandidateActiveCount>+89</CandidateActiveCount>
            </CandidateBlock>
            <TotalCandidateCount>Social Share</TotalCandidateCount>
            
        </CandidatureDetails>
        <DividerBlock>
        <img src={divider} alt="divider"/>
        </DividerBlock>
        <CandidatureDetails>
            <CandidateBlock>
                <CandidateCount>1,45</CandidateCount>
                <CandidateActiveCount>+89</CandidateActiveCount>
            </CandidateBlock>
            <TotalCandidateCount>Unique Links</TotalCandidateCount>
            
        </CandidatureDetails>
    </CandidateDetails>
    
    </CandidatesCard>
    <TotalPurposeCard>
    <TotalAssessmentTitle>Total Purpose</TotalAssessmentTitle>
    <AssessmentDetails>
 
        <img src={purpose} alt="icon" style={{height:40,width:40}}/>

<Count>34</Count>
    </AssessmentDetails>
    </TotalPurposeCard>

</CandidateCardContainer>
</>
    );
}
export default CandidateCard;

const CandidateCardContainer = styled.div`
backgroud-color:white;
display:flex;
flex-direction:row;
`

const TotalAssessmentCard = styled.div`
display:flex;
flex-direction:column;
border-top-left-radius: 12px;
border-bottom-left-radius: 12px;
border: 1px solid var(--system-stroke-2, #DADCE0);
background: var(--text-white, #FFF);
padding:29px;`

const TotalPurposeCard = styled.div`
display:flex;
flex-direction:column;
border-top-right-radius: 12px;
border-bottom-right-radius: 12px;
border: 1px solid var(--system-stroke-2, #DADCE0);
background: var(--text-white, #FFF);
padding:29px;`

const CandidatesCard = styled.div`
display:flex;
flex-direction:column;

border: 1px solid var(--system-stroke-2, #DADCE0);
background: var(--text-white, #FFF);
padding:29px;`

const TotalAssessmentTitle = styled.p`
color: var(--text-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 140%; `

const AssessmentDetails = styled.div`
display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
   

`

const CandidateDetails = styled. div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
align-content: center;
flex-wrap: wrap;
`


const Count = styled.p`
color: var(--text-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 140%;

margin-left:10px;`

const ImgContainer = styled.div`
display: flex;
width: 40px;
height: 40px;
padding: 10px;
justify-content: center;
align-items: center;
border-radius: 8px;
background: var(--accent-purple-light, #EBE8FD);
`


const TotalCandidateCount =styled.p`
color: #1C4980;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 16.8px */`

const CandidatureDetails = styled.div`
margin-left:10px;`

const CandidateCount = styled.p`
color: var(--text-100, #1C4980);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 20px;
font-style: normal;
margin:0;
font-weight: 700;
line-height: 140%; /* 28px */`

const CandidateActiveCount = styled.p`
color: var(--status-success, #05C165);
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
margin:0;
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: 140%; /* 1`

const CandidateBlock = styled.div`
display: flex;
flex-direction: row;
align-content: center;
justify-content: center;
align-items: center;
`

const DividerBlock = styled.div`
margin-left:10px;
margin-bottom:10px;`