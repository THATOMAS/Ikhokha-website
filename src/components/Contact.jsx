import React from "react"
import styled from "styled-components"


const ContactPageContainer = styled.article`
height:100vh;
width:100vw;
// background:purple;
scroll-snap-align: start;
`

const ContactPageWrapper = styled.div`
height:100%;
width:100%;
display:flex;
flex-direction:column;
// background:red;
`

const GetInTouchBox = styled.div`
margin-top:60px;
height:40%;
width:100%;
background:#394E5D;
display:flex;
flex-direction:column;


`

const GetInTouchHeadingBox = styled.div`
height:25%;
width:100%;
// background:white;
margin-top:10px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

const Heading =styled.h1`
font-family:Montserrat;
font-size:25px;
// font-weight:bold;
color:white;
`

const Underline = styled.div`
height:2px;
width:120px;
border-radius:50%;
background:#A0CC4D;
margin-top:20px;
`

const InfoBoxes = styled.div`
height:75%;
display:flex;
flex-direction:row;

`

const Left = styled.div`
display:flex;
height:100%;
align-items:center;
justify-content:flex-start;
background:#182333;
flex:1;
flex-direction:column;
`

const IconBox = styled.div`
height:30%;
width:100%;
display:flex;
align-items:center;
justify-content:center;
align-self:flex-start;
background:red;
margin-top:0px;
`

const IconImage = styled.div`
height:80px;
width:80px;
background:white;
`

const ContactInfoBox = styled.div`
height:70%;
width:100%;
display:flex;
align-items:flex-start;
justify-content:center;
` 

const Title = styled.h3`
font-family:Montserrat;
font-size:25px;
color:white;
`

const Center = styled.div`
flex:1;
height:100%;
display:flex;
align-items:center;
justify-content:center;
background:#182333;
`


const Right = styled.div`
flex:1;
height:100%;
display:flex;
align-items:center;
justify-content:center;
background:#182333;
`

const SendUsEmailBox = styled.div`
margin-top:0px;
height:50%;
width:100%;
background:#00000029;
`





const Contact = ({titleRef4})=>{
	return(
		<ContactPageContainer ref={titleRef4}>
			<ContactPageWrapper>
				<GetInTouchBox>
					<GetInTouchHeadingBox>
						<Heading>
							GET IN TOUCH WITH US
						</Heading>
						<Underline/>
					</GetInTouchHeadingBox>
					<InfoBoxes>
					<Left>
						<IconBox>
							<IconImage/>
						</IconBox>
						<ContactInfoBox>
							<Title>ADDRESS</Title>
						</ContactInfoBox>
					</Left>
					<Center/>
					<Right/>
					</InfoBoxes>
				</GetInTouchBox>
				<SendUsEmailBox>
				</SendUsEmailBox>
			</ContactPageWrapper>
		</ContactPageContainer>
		)
}

export default Contact;