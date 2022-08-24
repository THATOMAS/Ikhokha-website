import React,{useState,useEffect} from "react"
import styled from "styled-components"
import "../index.css"
import {Mobile} from "../Responsive"


const CloseLogo = require("../assets/close.png")

const Close = styled.div`
height:30px;
width:30px;
border:1px solid black;
border-radius:50%;
position:relative;
bottom:15px;
left:15px;
background:white;
opacity: ${props=>props.show ? "1":"0"};
background:url(${CloseLogo});
background-size:cover;
background-position:center;


${Mobile({
display:'none'
})}


`


const BlogContainer = styled.div`
height:250px;
width:fit-content;
transform : scale(${props=>props.enlarge ? "2":"1"});
z-index : ${props=>props.enlarge ? "3":"0"};
background:white;
transition:0.5s ease-in-out all;
flex-direction:column;
box-shadow: 0px 2px 16px #00000029;

${Mobile({
	transform:'scale(1)'
})}

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
margin-top:16px;
margin-bottom:-5px;
color: #394E5D;
opacity: 1;
`

const BlogText = styled.p`
font-family:Montserrat;
font-size:16px;
color: #394E5D;
margin-top:16px;
`




export const SingleBlogRowOne = ({id,image,title,info})=>{

	const [enlarge,setEnlarge] = useState(false)
	const [show,setShow] = useState(false)



	const clicked = ()=> {
			setEnlarge(!enlarge)
			setShow(!show)}
	


	return(	<BlogContainer className="BlogContainer" onClick={(id)=>{clicked(id)}} enlarge={enlarge} >
				<BlogImage image={image}>
					<Close  show={show}/>
				</BlogImage>
				<Title>{title} #{id}</Title>
				<BlogText>{info}</BlogText>
			</BlogContainer>
			)
}


export const SingleBlogRowTwo = ({id,image,title,info})=>{

	const [enlarge,setEnlarge] = useState(false)
	const [show,setShow] = useState(false)

	const clicked = (id)=> {
		if(id == id){
			setEnlarge(!enlarge)
			setShow(!show)
		}
		return
	}

	const close = (id)=> {
	if(id == id){
			setEnlarge(false)
		}
		return
		
	}



	return(	<BlogContainer onClick={(id)=>{clicked(id)}} enlarge={enlarge}>
				<BlogImage image={image}>
					<Close close={(id)=>close(id)} show={show}/>
				</BlogImage>
				<Title>{title} #{id}</Title>
				<BlogText>{info}</BlogText>
			</BlogContainer>
			)
}


