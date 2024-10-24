import "./styles/Footer.css";
import logo from "./../../images/portfolio-logo.jpg";

function Footer(){
    return(
        <div className='footer'>

            <div className="footer-logo">
                <img src={logo}/>
            </div>

            <div className="copyright-notice">
                 © 2023 Ibraheem . All rights reserved.
            </div>

            <div className="icons">
                <div className="twitch-icon">
                    <a href="https://www.facebook.com/profile.php?id=61551244410905" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>
                </div>
                <div className="linkedin-icon">
                    <a href="https://www.linkedin.com/in/ibraheem-shafi-1716b5296/" target="_blank" rel="noopener noreferrer">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="instagram-icon">
                    <a href="https://www.instagram.com/ibraheem_shafi_yam/?hl=en" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
                <div className="whatsapp-icon">
                    <a href="https://api.whatsapp.com/send?phone=923369701396" target="_blank" rel="noopener noreferrer">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Footer;