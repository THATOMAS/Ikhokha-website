import React from "react"
import styled from "styled-components"
import {Logos} from "./Logos"

const BlogContainer = styled.article`
height:100vh;
// background:blue;
scroll-snap-align: start;
display:flex;

`

const PageWrapper = styled.div`
height:100%;
width:100%;
// background:teal;
display:flex;
flex-direction:column;
`

const TrustedByBox = styled.div`
height:25%;
width:100%;
display:flex;
flex-direction:column;
// background:yellow;
margin-top:60px;
align-items:center;
justify-content:center;
`
const TrustedBy = styled.h1`
font-size:30px;
font-family:Montserrat;
color:#394E5D

`

const LogoBox = styled.div`
height:145px;
width:100%;
background: #F5F8FA;
display:flex;
justify-content:space-evenly;
align-items:center;
`

const Logo = styled.div`
height:100px;
width:100px;
background: url(${props=>props.image});
background-size:contain;
background-repeat:no-repeat;
background-position:center;

;
`

const BlogBoxContainer = styled.div`
height:75%;
width:100%;
// background:yellow;

`


const Blog = ({titleRef3})=>{
	return(
		<BlogContainer ref={titleRef3}>
			<PageWrapper>
				<TrustedByBox>
					<TrustedBy>
						We Are Trusted By
					</TrustedBy>
					<LogoBox>
							{Logos.map((singlelogo,index)=>{
								return(<Logo key={index} image={singlelogo.img}/>)
							})}
					</LogoBox>
				</TrustedByBox>
				<BlogBoxContainer>
				</BlogBoxContainer>
			</PageWrapper>
		</BlogContainer>
		)
}

export default Blog;