import "./styles/Numbers.css";

function Numbers(){
    return(
        <div className="numbers-component-outer">

                <div className="right-ring-outer">
                    <div className="right-ring-internal"></div>
                </div>

            <div className='numbers-component'>

                <div className='numbers-box'>
                    <div className="number first">
                        <span className="big-numbers">56</span>
                        <span className="numbers-discription">Happy Clients</span>
                    </div>

                    <div className="number second">
                        <span className="big-numbers">87</span>
                        <span className="numbers-discription">Projects Done</span>
                    </div>

                    <div className="number third">
                        <span className="big-numbers">16</span>
                        <span className="numbers-discription">Awards Winning</span>
                    </div>

                    <div className="number fourth">
                        <span className="big-numbers">7</span>
                        <span className="numbers-discription">Years Experience</span>
                    </div>
                </div>
            </div>

            <div className="left-ring-outer"></div>

        </div>
    );
}

export default Numbers;