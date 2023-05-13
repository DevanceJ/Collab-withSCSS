import './App.scss';
import first from "./Assets/first.jpeg";
import second from "./Assets/second.png";
import third from "./Assets/third.jpeg";
import fourth from "./Assets/fourth.jpeg";
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init()
  },[]) 
  return (
    <>
    <div className="colab">
      <h1>Let's Collaborate</h1>
    </div>
    <div className="services">
      <div className="first" data-aos="fade-up" data-aos-duration="1500">
        <div className="text-first">
          <div className="allText">
        <h2>AI + RPA is what we do</h2>
        <p>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</p>
        <a className='link' href="/">AI + RPA Automation <span className='arrow'><FaArrowRight/></span>  </a>
          </div>
        </div>
        <div className="img-first">
          <img src={first} alt="firstIMG" />
        </div>
      </div>
      <div className="first" data-aos="fade-up" data-aos-duration="2000">
        <div className="text-first">
          <div className="allText">
        <h2>Make Bolder Choices</h2>
        <p>Digital focused strategies to realize market-changing ideas</p>
        <a className='link' href="/">Build Better Apps <span className='arrow'><FaArrowRight/></span> </a>
          </div>
        </div>
        <div className="img-first">
          <img src={second} alt="secondIMG" />
        </div>
      </div>
      <div className="first" data-aos="fade-up" data-aos-duration="2500">
        <div className="text-first">
          <div className="allText">
        <h2>Innovate with Speed</h2>
        <p>Create higher quality software, deliver on customer expectations and business goals</p>
        <a className='link' href="/">DevOps <span className='arrow'><FaArrowRight/></span> </a>
          </div>
        </div>
        <div className="img-first">
          <img src={third} alt="secondIMG" />
        </div>
      </div>
      <div className="first" data-aos="fade-up" data-aos-duration="2500">
        <div className="text-first">
        <div className="allText">
        <h2>Embrace Cloud</h2>
        <p>With Cloud-First accelerate innovation and optimize performance</p>
        <a className='link' href="/">Cloud Services <span className='arrow'><FaArrowRight/></span> </a>
          </div>
        </div>
        <div className="img-first">
          <img src={fourth} alt="secondIMG" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
