import "./styles/Header.css";
import logo from "./../../images/portfolio-logo.jpg";
import { Link } from "react-router-dom";

function Header(){

     const ShowMenu = () => {
	  
        var styleShowMenu = {
                
                "position" : "absloute",
                "display" : "inline-block",
               /* "height" : "200px",
                "width" : "200px",*/
                "padding" : "20px",
                "border-top-left-radius" : "15px",
                "border-bottom-left-radius" : "15px",
                "right" : "0px",
                "background" : "#141517",
                "display" : "flex",
                "flex-direction" : "column",
                "justify-content" : "center",
                "opacity" : "0.99",
                "z-index" : "5"
                
            };
            
            var objShowMenu = document.querySelector(".menu");
            Object.assign(objShowMenu.style, styleShowMenu);
            
         
            var styleShowCrossIcon = {
                
                "position" : "absloute",
                "display" : "inline-block",
                "z-index" : "6"
                
            };

            var objShowCrossIcon = document.querySelector(".menu-cross-icon");
            Object.assign(objShowCrossIcon.style, styleShowCrossIcon);

         
          var styleShowMenuItem = {
                
                "display" : "inline-block",
                "color" : "white",
                "border-bottom" : "0px",
                "z-index" : "6"
                
            };
            
            var objShowMenuItem1 = document.querySelector(".menuitem1");
            Object.assign(objShowMenuItem1.style, styleShowMenuItem);
                
            var objShowMenuItem2 = document.querySelector(".menuitem2");
            Object.assign(objShowMenuItem2.style, styleShowMenuItem);
            
            var objShowMenuItem3 = document.querySelector(".menuitem3");
            Object.assign(objShowMenuItem3.style, styleShowMenuItem);
        }

        const HideMenu = () => {
	  
            var styleShowMenu = {
                    
                    "display" : "none",
            
                };
                
                var objShowMenu = document.querySelector(".menu");
                Object.assign(objShowMenu.style, styleShowMenu);

                var styleHideCrossIcon = {
                
                    "display" : "none",
                    
                };
    
                var objHideCrossIcon = document.querySelector(".menu-cross-icon");
                Object.assign(objHideCrossIcon.style, styleHideCrossIcon);

        }

    return(
        <div className='header'>

            <div className='logo'>
                <img src={logo}/>
            </div>

            <div className='menu'>
                <Link to='/' className="menuitem1">Home</Link>
                {/* <Link to='#' className="menuitem2">Projects</Link> */}
                <Link to='/contact' className="menuitem3">Contact</Link>
            </div>

            <div className="header-contactbox">
                <Link to="/contact">Contact Me</Link>
            </div>

            <div className="menu-icon" onClick={ShowMenu}>
                <i class="fa-solid fa-bars"></i>
            </div>

            <div className="menu-cross-icon" onClick={HideMenu}>
                <i class="fa-regular fa-circle-xmark"></i>
            </div>

        </div>
    );
}

export default Header;