import "./styles/Introduction.css";
import heroimg from "./../../images/hero.png";

function Introduction(){
    return(
        <div className='introduction'>

            <div className="introducing-article" data-aos="flip-left">
                <div className="introducing">Introduction</div>
                <div className="heading">
                    <h1>Hello <br />I'm Ibraheem Shafi</h1>
                </div>
                <div className="paragraph">
                    <p>Since beginning my journey as a web developer
                    more then an year ago, I've done work for different educational institutes, indivisuals
                    and created a lots of digital products.</p>
                </div>
                <div className="introduction-contactbox" data-aos="fade-up">
                    Contact Me
                </div>
            </div>

            <div className="photo-box">
                <div className="photo-ring">
                    <div className="hexagon">
                        <div className="hexagon2"></div>
                    </div>
                    <div className="photo-ring-outer">
                        <div className="photo-small-rings top-left" data-aos="fade-right">React</div>
                        <div className="photo-small-rings top-right" data-aos="fade-left">Node</div>
                        <div className="photo-small-rings bottom-left" data-aos="fade-right">Express</div>
                        <div className="photo-small-rings bottom-right" data-aos="fade-left">MongoDB</div>
                        <div className="photo-ring-internal">
                            <div className="photo" data-aos="fade-up">
                                <img src={heroimg} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Introduction;