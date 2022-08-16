import React,{useRef} from "react"
import styled from "styled-components"
import Navbar from "./components/Navbar"
import HomePage from "./components/HomePage"
import Products from "./components/Products"
import Blog from "./components/Blog"
import Contact from "./components/Contact"


const LogoIcon = require("./assets/Logo.png")


const WebPage = styled.section`
height:fit-content;

`



const App = ()=>{

const titleRef1 = useRef();
const titleRef2 = useRef();
const titleRef3 = useRef();
const titleRef4 = useRef();


  const toHome = () =>{
    titleRef1.current.scrollIntoView({"behaivour":"smooth"});
  }

  const toProducts = ()=> {
    titleRef2.current.scrollIntoView({"behaivour":"smooth"});
  }


  const toBlog =()=> {
    titleRef3.current.scrollIntoView({"behaivour":"smooth"});
  }


  const toContact =() => {
     titleRef4.current.scrollIntoView({"behaivour":"smooth"});
  }

	return(
		<WebPage>
			<Navbar toHome={toHome} toProducts={toProducts} toBlog={toBlog} toContact={toContact} />
			<HomePage ref ={titleRef1} titleRef1={titleRef1}/>
			<Products ref={titleRef2} titleRef2={titleRef2}/>
			<Blog ref={titleRef3} titleRef3={titleRef3}/>
			<Contact ref={titleRef4} titleRef4={titleRef4}/>
		</WebPage>

		)
}

export default App;

