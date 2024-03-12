import React,{Suspense} from "react";
import {Link} from 'react-router-dom';
import { useRef,useState } from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Services } from "./Services";
import { Review } from "./Review/Review";
import { RateCard } from "./RateCard/RaateCard";
import logo from '../images/logo1.jpg'
import Image from 'react-bootstrap/Image';
import './Header.css';


const EnquireNow = React.lazy(() => import('./EnquireNow'));

const Header=()=> {
    const [menuOpen,setMenuOpen] = useState(false);
    const aboutus = useRef(null);
    const enquireNow=useRef(null);
    const home= useRef(null);
    const contact=useRef(null);
    const services=useRef(null);
    // const reviews = useRef(null);
    const ratecard = useRef(null);

    const scrollToSection = (elementRef)=>{
        window.scrollTo({
            top:elementRef.current.offsetTop - 80,
            behavior:'smooth'
        })
    }

    return(
        <div className="container1" >
            <nav>
                <div className="image_name">
                <div className="logo">
                <Image src={logo} width='40px' alt='Logo' loading='lazy'/>
                
                </div>
                <div className="title_name">Eagle Refrigeration, Pune</div>
                </div>
                <div className="menu" onClick={()=>setMenuOpen(!menuOpen)}>
                    {/* {menuOpen ? 
                    
                    <span style={{color:"#008A00",fontsize:"11pt"}}>    </span>
                    : 
                    <div className="menu">
                    <span ></span>
                    <span ></span>
                    <span ></span>
                    </div>
                    
                    } */}
                    
                </div>

                <ul className={menuOpen ? "open" : ""}>
                    <li onClick={()=> scrollToSection(home)} className="link">Home</li>
                    <li onClick={()=> scrollToSection(services)} className="link">Services</li>
                    <li onClick={()=> scrollToSection(enquireNow)} className="link">Enquiry</li>
                    {/* <li onClick={()=> scrollToSection(ratecard)} className="link">Rate-Card</li> */}
                    <li onClick={()=> scrollToSection(aboutus)} className="link">About Us</li>
                    

                </ul>
            </nav>

            <div>
                <div ref={home} className="home"><Home/></div>
            </div>

            <div>
                <Suspense fallback={ <div>loading...still reamins? ..call on -7350235050/8856935638</div>}>
                    <div ref={enquireNow} className="abooutus"><EnquireNow/></div>
                </Suspense>
            </div>

            <div>
                <div ref={services} className="services"><Services/></div>
            </div>

            <div>
                <div ref={ratecard} className="services"><RateCard/></div>
            </div>

            

            <div>
                <div ref={aboutus} className="aboutus"><About/></div>
            </div>

            {/* <div>
                <div ref={reviews} className="contactus"><Review/></div>
            </div> */}

            <div>
                <div ref={contact} className="contactus"><Contact/></div>
            </div>



        </div>
    )
}
export default Header;