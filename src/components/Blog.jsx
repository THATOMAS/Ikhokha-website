import React,{useState} from "react"
import styled from "styled-components"
import {Logos} from "./Logos"
import {RowOne,RowTwo} from "./BlogData"
import {SingleBlogRowOne,SingleBlogRowTwo} from "./SingleBlog"

const BlogContainer = styled.article`
height:100vh;
// background:blue;
scroll-snap-align: start;
display:flex;
// opacity:0.45;
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
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const ReadMoreButton = styled.div`
height:38px;
width:140px;
background: #FFFFFF 0% 0% no-repeat padding-box;
border: 1px solid #3D86BF;
border-radius: 32px;
opacity: 1;
cursor:pointer;
margin-top:20px;
display:flex;
justify-content:center;
align-items:center;
margin-top:80px;
`

const ReadMoreText = styled.p`
font: normal normal 600 14px/18px Montserrat;
letter-spacing: 0px;
color: #4285BC;
opacity: 1;
`

const BlogBoxWrapper = styled.div`
height:fit-content;
width:fit-content;
// background:green;
display:flex;
flex-direction:column;
`


const BlogBoxRowOne = styled.div`
height:fit-content;
width:100%;
// background:blue;
margin-bottom:10px;
display:flex;
flex-direction:row;
flex-wrap:no-wrap;
`


const SingleBlogBox = styled.div`
width:282px;
height:fit-content;
// background:red;
margin:10px;
display:flex;
flex-direction:column;
background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 2px 16px #00000029;
border-radius: 4px;
opacity: 1;
cursor:pointer;
transition: 0.1s ease-in-out all;

// &:hover{
// 	transform:scale(1.1)
}




`



const BlogImage = styled.div`
height:144px;
width:100%;
background: url(${props=>props.image});
display:flex;
align-items:flex-start;
justify-content:flex-end;
`

const Title = styled.h4`
font-weight:600;
font-size:20px;
font-family:Montserrat;
margin-top:6px;
margin-bottom:-5px;
color: #394E5D;
opacity: 1;
`

const BlogText = styled.p`
font-family:Montserrat;
font-size:16px;
color: #394E5D;
`

const BlogBoxRowTwo = styled.div`
height:200px;
width:100%;
// background:purple;
margin-bottom:10px;
display:${props=>props.seemore ? "flex" : "none"};
flex-direction:row;
flex-wrap:no-wrap;
`


const Blog = ({titleRef3})=>{

	const [seemore,setSeemore] = useState(true)
	const readmore = ()=>{
		setSeemore(!seemore)
	}


 

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
					<BlogBoxWrapper>
						<BlogBoxRowOne>
							{RowOne.map((blog)=>{
								return(
									<SingleBlogBox key={blog.id} >
										<SingleBlogRowOne id={blog.id} image={blog.image} title={blog.Title} info={blog.info}/>
									</SingleBlogBox>
									)
							})}
						</BlogBoxRowOne>
						<BlogBoxRowTwo seemore={seemore}>
							{RowTwo.map((blog)=>{
								return(
									<SingleBlogBox key={blog.id} >
										<SingleBlogRowTwo id={blog.id} image={blog.image} title={blog.Title} info={blog.info}/>
									</SingleBlogBox>
									)
							})}
						</BlogBoxRowTwo >
					</BlogBoxWrapper>
					<ReadMoreButton onClick={()=>readmore()}>
						<ReadMoreText>
							{seemore ? "See Less" : "Read More"}
						</ReadMoreText>
					</ReadMoreButton>
				</BlogBoxContainer>
			</PageWrapper>
		</BlogContainer>
		)
}

export default Blog;