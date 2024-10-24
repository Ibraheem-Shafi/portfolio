import "./styles/Portfolio2.css";
import portfolio2img from "./../../images/project2.png";

function Portfolio2(){
    return(
        <div className='portfolio2'>

            <div className="portfolio2-article" data-aos="flip-left">
                <div className="project2">Project 2</div>
                <div className="heading">
                    <h2>Cloud Institute</h2>
                </div>
                <div className="paragraph">
                    <p>In today's fast-paced digital era, educational institutions have adapted to
                         the online landscape to provide a dynamic learning environment.
                          I am goint to make you an institute that stands as a beacon of knowledge
                           and innovation, boasting a versatile e-learning platform equipped with an Admin
                            panel for efficient administrative control and a Student portal to empower
                             your learners. Your institute will have essential features, including
                              interactive classrooms, resource libraries, and progress tracking,
                               to foster a seamless and enriching educational experience.
                                My commitment to user-friendly design, security, and high-performance
                                 technology ensures that both students and educators benefit
                                  from an educational journey that's both accessible and enriching.</p>
                </div>
                <div className="readmore-link">
                    <i class="fa-solid fa-arrow-right"></i>
                    <a href='#'>Read More</a>
                </div>
            </div>
            
            <div className="portfolio2-sample">
                <div className="web2-image">
                    <img src={portfolio2img}/>
                </div>
            </div>
            <div className="web2-extra"></div>
        </div>
    );
}

export default Portfolio2;