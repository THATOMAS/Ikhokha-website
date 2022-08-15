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


`
const Active = styled.div`
height:10px;
width:10px;
background:#394E5D;
border-radius:50%;
margin-bottom:-60px;
display:none;
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
`

const Logo = styled.a`
height:41px;
width:45px;
background:url(${LogoIcon});
cursor:pointer;
`

const Navbar = ()=>{

   const [click, setClick] = useState(true)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)


	return(
		<NavbarContainer>
			<LinkContainer>
				<LinkBox click={click}>
					<LinkText href="#Home">
						Home
					</LinkText>
					<Active/>
				</LinkBox>

				<LinkBox>
					<LinkText href="#Products">
						Products
					</LinkText>
					<Active/>
				</LinkBox>
				
				<LogoBox>
					<Logo href="/"/>
				</LogoBox>
				
				<LinkBox>
					<LinkText href="#Blog">
						Blog
					</LinkText>
					<Active/>
				</LinkBox>

				<LinkBox>
					<LinkText href="#Contact">
						Contact
					</LinkText>
					<Active/>
				</LinkBox>

			</LinkContainer>
		</NavbarContainer>

)
}

export default Navbar;