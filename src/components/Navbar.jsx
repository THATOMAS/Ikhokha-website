import React,{useState} from "react"
import styled, { keyframes, css } from "styled-components";
import HomePage from "./HomePage"
import Blog from "./Blog"
import {Mobile} from "../Responsive.js"

const LogoIcon = require('../assets/Logo.png')
const Open = require('../assets/open.png')
const Close = require('../assets/closeMenu.png')



const NavbarArticle = styled.article`
height:fit-content;
width:fit-content;
// background:red;

`

const NavbarContainer = styled.div`
top: 0px;
left: 0px;
width: 100%;
height: 60px;
box-shadow: 0px 2px 12px #00000029;
opacity:1;
// background:red;
display:flex;
align-items:center;
justify-content:center;
position:fixed;
background:white;
z-index:1;

${Mobile({
	display:'none'
})}


`


const LinkContainer = styled.div`
height:100%;
width:100%;
// background:blue;
display:flex;
align-items:center;
justify-content:center;



`


const Active = styled.div`
height:10px;
width:10px;
background:#3D86BF;
border-top-left-radius:50%;
border-top-right-radius:50%;
border-bottom-right-radius:0%;
border-bottom-left-radius:0%;
margin-bottom:-60px;
opacity:0;
transition:1.5s ease;

${Mobile({
display:'none',})}



`



const LinkBox = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
// background:orange;
height:100%;
width:150px;
margin-right:10px;
margin-left:10px;


${Mobile({
	display:'none',
})}


&:hover{
	${Active}{
		opacity:1;
	}
}

`


const LogoBox = styled.div`
display:flex;
align-items:center;
justify-content:center;
// background:orange;
height:100%;
width:150px;
margin-right:10px;
margin-left:10px;


`



const LinkText = styled.a`
font-family: Montserrat,sans serif;
font-weight:600;
font-size:20px ;
color: #394E5D;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;
position:fixed;
text-decoration:none;
${Mobile({
fontSize:'30px'
})}


}
`

const Logo = styled.a`
height:41px;
width:45px;
background:url(${LogoIcon});
cursor:pointer;
background-size:cover;
background-position:center;

${Mobile({
display:'none'
})}


`


// Mobile Code



const MobileNavbarContainer = styled.div`
top: 0px;
left: 0px;
width: 100%;
height: 57px;
box-shadow: 0px 2px 12px #00000029;
opacity:1;
display:none;
align-items:center;
justify-content:center;
position:fixed;
z-index:1;
margin-left:0px;
background:white;
${Mobile({
	display:'flex'
})}


`



const CloseAndOpenBox = styled.div`
height:fit-content;
width:fit-content;
left: 53px;
position:fixed;
height:20px;
width:27px;

`


const CloseAndOpen = styled.div`
background:url(${props=>props.show ? Close : Open });
background-size:contain;
background-repeat:no-repeat;
align-self:center;
justify-self:flex-start;
display:none;
height:100%;
width:100%;

${Mobile({
	alignSelf:'center',
	display:'flex'

})}


`




const LogoBoxTwo = styled.div`
display:flex;
align-items:center;
justify-content:center;
// background:orange;
height:41px;
width:47px;
display:none;
justify-self:center;
left: 50%;
position:fixed;
height:40px;
width:47px;
${Mobile({
	display:'flex',
})}

`


const MobileLogo = styled.a`
height:41px;
width:45px;
background:url(${LogoIcon});
cursor:pointer;
background-size:cover;
background-position:center;
display:none;;
${Mobile({
display:'flex',

})}


`



const DropDownMenu = styled.div`
height:100vh;
width:100%;
background:white;
position:fixed;
top:57px;
display:none;
z-index:1;
opacity:1;

${Mobile({
	display:'flex',
	flexDirection:'column',
	alignItems:'flex-start',
	justifyContent:'center'
})}


`


const MobileLinkBox = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:flex-start;
// background:orange;
height:100px;
width:50%;
margin-bottom:31px;
display:none;
margin-left:63px;
position:static;

${Mobile({
	display:'flex',
})}


`



const MobileActive = styled.div`
height:10px;
width:10px;
background:#3D86BF;
border-radius:50%;
display:none;
position:relative;
right:15px;
border-radius:50%;
left:50px;
top:${props=>props.top}px;
// top:185px;

${Mobile({
display:'flex',
})}


`




const Navbar = ({toHome,toProducts,toBlog,toContact})=>{


const [show,setShow] = useState(false)
const [top,setTop] = useState('55')


const MobileLinks = [{
	parameter : "#HOME",
	name:'Home',
	id:1,
},{
	parameter : "#PRODUCTS",
	name:'Products',
	id:2,
},{
	parameter : "#BLOG",
	name:'Blog',
	id:3,
},{
	parameter : "#CONTACT",
	name:'Contact',
	id:4}]



const Toggle = (id)=>{
	setShow(!show)
	if(id === 1){
		setTop("55")
		toHome()
	}
	else if(id === 2){
		toProducts()
		setTop("185")
	}
	else if(id === 3){
		toBlog()
		setTop("315")
	}
	else if(id === 4){
		toContact()
		setTop("450")
	}
}

	return(<NavbarArticle>
		<NavbarContainer>
			<LinkContainer>
				<LinkBox  onClick={()=>toHome()}>
					<LinkText href="#Home"  >
						Home
					</LinkText>
					<Active />
				</LinkBox>

				<LinkBox onClick={()=>toProducts()}>
					<LinkText href="#Products">
						Products
					</LinkText>
					<Active />
				</LinkBox>
				
				<LogoBox onClick={()=>toHome()}>
					<Logo href="#Home"/>
				</LogoBox>
				
				<LinkBox onClick={()=>toBlog()}>
					<LinkText href="#Blog">
						Blog
					</LinkText>
					<Active />
				</LinkBox>

				<LinkBox onClick={()=>toContact()}>
					<LinkText href="#Contact" >
						Contact
					</LinkText>
					<Active/>
				</LinkBox>
			</LinkContainer>
		</NavbarContainer>
		

		<MobileNavbarContainer>
			<CloseAndOpenBox>
				<CloseAndOpen show={show} onClick={()=>Toggle()}/>
			</CloseAndOpenBox>
			
			<LogoBoxTwo onClick={()=>toHome()}>
				<MobileLogo href="#Home" />
			</LogoBoxTwo>
		</MobileNavbarContainer>


		<DropDownMenu style ={{display:`${show? "flex":"none"}`}}>
			<MobileActive top={top}/>
			{MobileLinks.map(({...singleLink})=>{

				const {id,name,parameter,toWhere} = singleLink
				return(				
					<MobileLinkBox  key={singleLink.id} >
							<LinkText href={parameter} onClick={()=>Toggle(id)} >
								{name}
							</LinkText>
					</MobileLinkBox>)	
			})}
		</DropDownMenu>
</NavbarArticle>)
}

export default Navbar;





{/*
			<MobileLinkBox  onClick={()=>toHome()}   >
					<LinkText href="#Home" onClick={(id)=>Toggle(id)} >
						Home
					</LinkText>
			</MobileLinkBox>

				<MobileLinkBox  onClick={()=>toProducts()} >
					<LinkText href="#Products" onClick={(id)=>Toggle(id)}>
						Products
					</LinkText>
				</MobileLinkBox>
				

				<MobileLinkBox onClick={()=>toBlog()}  >
					<LinkText href="#Blog" id={"3"} onClick={(id)=>Toggle(id)}>
						Blog
					</LinkText>
					
				</MobileLinkBox>

				<MobileLinkBox onClick={()=>toContact()}  >
					<LinkText href="#Contact" id={"4"} onClick={(id)=>Toggle(id)}>
						Contact
					</LinkText>
					
				</MobileLinkBox>*/}