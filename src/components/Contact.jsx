import React from "react"
import styled from "styled-components"
import {ContactInfo} from "./Data"

const ContactPageContainer = styled.article`
height:fit-content;
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
height:40vh;
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

const SingleBox = styled.div`
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
// background:red;
margin-top:0px;
`

const IconImage = styled.div`
height:60px;
width:60px;
background:url(${props=>props.image});
background-size:contain;
background-repeat:no-repeat;
background-position:center;
`

const ContactInfoBox = styled.div`
height:70%;
width:100%;
display:flex;
align-items:center;
justify-content:flex-start;
flex-direction:column;
// background:yellow
` 

const Title = styled.h3`
font-family:Montserrat;
font-size:25px;
color:white;
margin-top:15px;
justify-self:flex-start;
`

const InfoOne = styled.p`
font-family:Montserrat;
font-size:20px;
color:white;
margin-top:15px;
`


const InfoTwo = styled.p`
font-family:Montserrat;
font-size:20px;
color:white;
margin-top:15px;
`

const InfoThree = styled.p`
font-family:Montserrat;
font-size:20px;
color:white;
margin-top:15px;
`

const SendUsEmailBox = styled.div`
margin-top:0px;
height:75vh;
width:100%;
background:#00000029;
display:flex;
align-items:center;
justify-content:space-evenly;
flex-direction:column;
`


const HeadingTwo =styled.h1`
font-family:Montserrat;
font-size:45px;
// font-weight:bold;
color:#182333;
margin-top:-10px;
`

const EmailForm = styled.form`
height:450px;
width:900px;
border-radius:10px;
display:flex;
flex-direction:column;
background:white;
justify-content:center;
align-items:center;
`

const Input = styled.input`
font-size:25px;
// font-weight:bolder;
font-family:Montserrat;
color:black;
width:90%;
height:50px;
border-radius:5px;
border: 1px solid #3D86BF;
box-shadow: 0px 2px 16px #00000029;
margin-top:10px;
margin-bottom:10px;

`

const InputTwo = styled.input`
font-size:25px;
// font-weight:bolder;
font-family:Montserrat;
color:black;
width:90%;
height:100px;
border-radius:5px;
border: 1px solid #3D86BF;
box-shadow: 0px 2px 16px #00000029;
margin-top:2px;
margin-bottom:2px;

`

const Button = styled.button`
height:50px;
width:150px;
margin-top:10px;
margin-bottom:10px;
border:1px solid #A0CC4D;
background:#A0CC4D;
box-shadow: 0px 2px 16px #A0CC4D;
cursor:pointer;
`

const ButtonText = styled.p`
font-size:30px;
font-weight:bold;
font-family:Montserrat;
color:black;

`

const Contact = ({titleRef4})=>{
	return(
		<ContactPageContainer ref={titleRef4}>
			<ContactPageWrapper>
				<GetInTouchBox>
					<GetInTouchHeadingBox>
						<Heading>
							GET IN TOUCH WITH US
						</Heading >
						<Underline/>
					</GetInTouchHeadingBox>
					<InfoBoxes>{
						ContactInfo.map((info,index)=>{
							return(
					<SingleBox key={index}>
						<IconBox>
							<IconImage image={info.image}/>
						</IconBox>
						<ContactInfoBox>
							<Title>{info.Title}</Title>
							<InfoOne>{info.info1}</InfoOne>
							<InfoTwo>{info.info2}</InfoTwo>
							<InfoThree>{info.info3}</InfoThree>
						</ContactInfoBox>
					</SingleBox>)
						})
					}
					</InfoBoxes>
				</GetInTouchBox>
				<SendUsEmailBox>
					<HeadingTwo >
						MESSAGE US
					</HeadingTwo>
					<EmailForm>
						<Input placeholder=" First Name* "/>
						<Input placeholder=" Last Name* "/>
						<Input placeholder=" Email* "/>
						<Input placeholder=" Phone Number "/>
						<Input type="text" placeholder=" What can we do for you ?  "/>
						<Button type="submit"><ButtonText>SEND</ButtonText></Button>																

					</EmailForm>
				</SendUsEmailBox>
			</ContactPageWrapper>
		</ContactPageContainer>
		)
}

export default Contact;