import "./styles/Sidebuttons.css";

function Sidebuttons(){
    return(
        <div className='sidebuttons'>

            <div className="top-button  button">
                <i class="fa-solid fa-binoculars"></i>Browse Demos
            </div>
            <div className="mid-button button">
                <i class="fa-solid fa-bag-shopping"></i>  Buy Now!
            </div>
            <div className="bottom-button button">
                <i class="fa-solid fa-file-export"></i>Export Section
            </div>

        </div>
    );
}

export default Sidebuttons;