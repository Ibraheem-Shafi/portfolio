import "./styles/Portfolio1.css";
import portfolio1img from "./../../images/project1.png";

function Portfolio1(){
    return(
        <div className='portfolio1'>
            <div className="portfolio1-article" data-aos="flip-right">
                <div className="project1">Project 1</div>
                <div className="heading">
                    <h2>Eastern Store</h2>
                </div>
                <div className="paragraph">
                    <p>In today's digital age, businesses have transitioned online,
                         and e-commerce has become a central pillar of the retail landscape.
                         My e-commerce website stands as a robust platform, featuring an Admin panel
                         for comprehensive control, a Seller panel for partner empowerment, 
                         and essential features such as Cart and Wishlist. I am dedicated to
                         enhancing the online shopping experience with a user-friendly design,
                         security, and performance, offering a seamless environment for customers and sellers alike.</p>
                </div>
                <div className="readmore-link">
                    <i class="fa-solid fa-arrow-right"></i>
                    <a href='#'>See Details</a>
                </div>
            </div>
            
            <div className="portfolio1-sample">
                <div className="web1-image">
                    <img src={portfolio1img}/>
                </div>
            </div>
            <div className="web1-extra"></div>
        </div>
    );
}

export default Portfolio1;