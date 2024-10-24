import Header from "./sub-components/Header.js";
import EmailForm from "./sub-components/EmailForm.js"
import Footer from "./sub-components/Footer.js";

import './sub-components/styles/Contact.css'
function Contact() {
  return (
    <div className="Contact">

      <Header />
        <h1>Contact ME</h1>
        <EmailForm />
      <Footer />
    </div>
  );
}

export default Contact;