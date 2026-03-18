import { useState } from "react";

const logoDetail = [
  {
    name: "Meyer Marilla",
    numb: "123-456-7890",
    info: "info@mysite.com",
    street: "500 Terry Francine St.",
    address: "San Francisco, CA 94158",
    policy: "Privacy Policy",
    accessStatement: [
      {
        quickWrtUpi: "The Purpose of the following template is to assist you in writing your accessibility statement. Please note that you are responsible for ensuring that your site's statement meets the requirements of the local law in your area or region.",
        quickWrtUpii: "Note: This page currently has several sections. Once you complete editing the Accessibility Statement below, you need to delete this section.",

        linkAccess: [
          {
            word: "To learn more about this, check out our article",
            lnk: "https://support.wix.com/en/article/accessibility-adding-an-accessibility-statement-to-your-site",
          }
        ]
      }
    ]
  }
]

function Header({ name, handleShowMenu, showMenu }) {
  return(
    <header className="header">
      <label className="logo">
          {name}
      </label>
        
        <nav className="nav">
          <button onClick={handleShowMenu} className={showMenu ? "btn-open" : "menu-btn"}>
            {showMenu ? "X" : "="}
          </button>
          {showMenu && <Menu showMenu={showMenu} />}
        </nav>
    </header>
  );
}

export default function App() {
  const [showMenu, isShowMenu] = useState(false);

  const detail = logoDetail;

  function handleShowMenu() {
    isShowMenu((show)=> !show);
  }

  return(
    <div className="app">
      {detail.map((detail)=> 
        <>
          <Header name={detail.name} showMenu={showMenu} handleShowMenu={handleShowMenu} />
      
          <div className="first-content">
            <h1>
              Protecting the Future of Our Planet
            </h1>
            <p>
              Working with communities to conserve and restore nature
            </p>
            <span>
              Learn More
            </span>
          </div>
        
          <Mission detail={detail} />
          <Process />
          <FeedBack />
          <Contact />

          <Footer detail={detail} />
        </> 
      )}


      
    </div>
  );
}

function Menu({ showMenu }) {
  return(
    <nav className={showMenu ? "menu" : "open"}>
      <a href="#home" className="active">Home</a>
      <a href="#about">About</a>
      <a href="#blog">Blog</a>
    </nav>
  );
}

function Mission({ detail }) {
  return(
    <div className="mission">
      <h1>
        Our Mission
      </h1>
      <div className="wrtUps">
        <p>
          At {detail.name}, we are dedicated to environmental conservation and sustainability. Through education, advocacy, and conservation projects, we aim to create a healthy and sustainable future for all. Our visual direction is inspired by the natural beauty and fragility of our planet, with a color palette reflecting forest greens, sky blues, and earthy browns.
        </p>

        <a>Explore</a>

      </div>
    </div>
  );
}

function Process() {
  
}

function FeedBack() {
  
}

function Contact() {
  
}

function Footer({ detail }) {
  return(
    <footer className="footer">
      <label>
        {detail.name}
      </label>
      <nav>
        <a>{detail.numb}</a>
        <a>{detail.info}</a>
        <a>{detail.street}</a>
        <a>{detail.address}</a>
        <a>{detail.policy}</a>
        <a>Accessible statement</a>
      </nav>
      
        <p>@2023 by {detail.name}</p>
        <p>
          Powered and secured by <a>Wix</a>
        </p>
    </footer>
  );
}
