import "./styles/Portfolio3.css";
import portfolio3img from "./../../images/portfolio-3-img.jpg";

function Portfolio3(){
    return(
        <div className='portfolio3'>
            <div className="portfolio3-article" data-aos="flip-right">
                <div className="project3">Project 3</div>
                <div className="heading">
                    <h2>Video Conferencing website</h2>
                </div>
                <div className="paragraph">
                    <p>In the digital age, face-to-face communication has evolved beyond
                     geographical boundaries, and my video conferencing website will stand 
                     at the forefront of this transformative experience. With my robust platform for you,
                     users can connect, collaborate, and communicate effortlessly. My solution 
                     offers an intuitive interface, advanced features, and a secure environment,
                     making virtual meetings and interactions as productive and engaging as in-person ones.
                     I am dedicated to provide you a seamless video conferencing experience
                     that brings people together, fosters meaningful connections, and empowers
                     businesses and individuals to thrive in an interconnected world</p>
                </div>
                <div className="readmore-link">
                    <i class="fa-solid fa-arrow-right"></i>
                    <a href='#'>Read More</a>
                </div>
            </div>
            
            <div className="portfolio3-sample">
                <div className="web3-image">
                    <img src={portfolio3img}/>
                </div>
            </div>
            <div className="web3-extra"></div>

            <div className="viewall-btn">
                View all
            </div>

        </div>
    );
}

export default Portfolio3;