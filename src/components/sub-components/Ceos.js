import "./styles/Ceos.css";
import portrait1 from "./../../images/ceo-img.jpg";
import portrait2 from "./../../images/ceo-img2.jpg";

function Ceos(){
    /*if(document.next.checked == true)
    {
        portrait2 = ceoimage
    }else{
        portrait1 = ceoimage
    }*/
    return(
        <div className='Ceos'>

            <div className="profile">
                
                <div className="portrait-extra"></div>
                <div className="portrait">
                    <img src={portrait1} />
                </div>
                
                <div className="profile-article-box">
                    <div className="comas">"</div>
                    <div className="profile-article">
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
                        Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz,
                        bad nymph, for quick jigs vex!
                    </div>
                    <div className="ceo-name">
                        Amman Payne
                    </div>
                    <div className="ceo-post">
                        CEO of Figma
                    </div>
                </div>

            </div>

            {/*<div id="next">
                <input type="checkbox" />
            </div>*/}

        </div>
    );
}

export default Ceos;