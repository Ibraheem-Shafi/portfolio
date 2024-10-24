import "./styles/Skills.css";

function Skills(){
    return(
        <div className='skills'>

            <div className="skill-cards-box">
                <div className="skill-cards card-top-left" data-aos="zoom-in">
                    <div className="card-icon"><i class="fa-solid fa-cube"></i></div>
                    <div className="card-heading"><h3>E-commerce</h3></div>
                    <div className="card-discription">
                        Click, if you want to sell your amazing products online.
                    </div>
                </div>
                <div className="skill-cards card-top-right" data-aos="zoom-in">
                    <div className="card-icon"><i class="fa-solid fa-briefcase"></i></div>
                    <div className="card-heading"><h3>Business website</h3></div>
                    <div className="card-discription">
                        Click, if you want your clients to know about your business.
                    </div>
                </div>
                <div className="skill-cards card-bottom-left" data-aos="zoom-in">
                    <div className="card-icon"><i class="fa-solid fa-users"></i></div>
                    <div className="card-heading"><h3>Social Media</h3></div>
                    <div className="card-discription">
                        Click, if you want me to turn your ideas into reality.
                    </div>
                </div>
                <div className="skill-cards card-bottom-right" data-aos="zoom-in">
                    <div className="card-icon"><i class="fa-solid fa-user"></i></div>
                    <div className="card-heading"><h3>Portfolio Website</h3></div>
                    <div className="card-discription">
                        Click, if you want me to create you a fabulous Portfolio.
                    </div>
                </div>
            </div>

            <div className="skill-article" data-aos="flip-left">

            <div className="skill-title">My Skills</div>
                <div className="skill-heading">
                    <h2>Why Hire Me For Next Project?</h2>
                </div>
                <div className="skill-paragraph">
                    <p>Hire me for your next project because I embrace the evolving technological landscape, recognizing that it's reshaping society and learning. In this era, expertise in every field is less critical, with a world of information at our fingertips. Instead, I focus on adaptability, problem-solving, and collaboration, leveraging technology as a tool to excel in diverse tasks efficiently and effectively.</p>
                </div>

                <div className="skill-downloadcv">
                    Contact Me
                </div>

            </div>


        </div>
    );
}

export default Skills;