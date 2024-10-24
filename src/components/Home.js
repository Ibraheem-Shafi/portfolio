import Header from "./sub-components/Header.js";
import Introduction from "./sub-components/Introduction.js";
import Skills from "./sub-components/Skills.js";
import Portfolio1 from "./sub-components/Portfolio1.js";
import Portfolio2 from "./sub-components/Portfolio2.js";
import Portfolio3 from "./sub-components/Portfolio3.js";
import Numbers from "./sub-components/Numbers.js";
import Ceos from "./sub-components/Ceos.js";
import Concluding from "./sub-components/Concluding.js";
import Footer from "./sub-components/Footer.js";
import ScrollButton from "./sub-components/ScrollButton.js";
import Sidebuttons from "./sub-components/Sidebuttons.js";

function Home() {
  return (
    <div className="Home">

      <Header />
      <Introduction />
      <Skills />
      <Portfolio1 />
      <Portfolio2 />
      <Portfolio3 />
      <Numbers />
      <Ceos />
      <Concluding />
      <Footer />
      <ScrollButton />
      <Sidebuttons />
    </div>
  );
}

export default Home;