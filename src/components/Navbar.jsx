import React,{useState} from "react"
import styled from "styled-components"
import HomePage from "./HomePage"
import Blog from "./Blog"

const LogoIcon = require('../assets/Logo.png')

const NavbarContainer = styled.div`
top: 0px;
left: 0px;
width: 100%;
height: 60px;
box-shadow: 0px 2px 12px #00000029;
opacity: 1;
// background:red;
display:flex;
align-items:center;
justify-content:center;
position:fixed;
`

const LinkContainer = styled.div`
height:100%;
width:fit-content;
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


}
`

const Logo = styled.a`
height:41px;
width:45px;
background:url(${LogoIcon});
cursor:pointer;
`




const Navbar = ({toHome,toProducts,toBlog,toContact})=>{


	return(
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
					<Logo href="/"/>
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

)
}

export default Navbar;