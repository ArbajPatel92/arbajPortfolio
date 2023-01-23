import './Intro.css'
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png';
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from "framer-motion";


const Intro = () => {
    const transition = { duration: 2, type: "spring" };
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span className="i-first">Hy ! I AM</span>
                    <span className='i-second'>Arbaj Patel</span>
                    <span className="i-third">Fronted Developer with high level Programming Skills , Producting the Quality work</span>
                </div>
                <button className="i-btn btn">Hire me</button>
                <div className='i-icons'>
                    <a href='https://github.com/ArbajPatel92' target='_blank' rel='noreferrer'><img src={Github} alt='' /></a>
                    <a href='https://www.linkedin.com/in/arbaj-patel-668169231' target='_blank' rel='noreferrer'><img src={Linkedin} alt='' /></a>
                    <a href='https://www.instagram.com/mdarbaz_92/' target='_blank' rel='noreferrer'><img src={Instagram} alt='' /></a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img   src={boy} alt="" />
                <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatingDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>
                <div className='blur'></div>
                <div className='blur' style={{
                    background:'#C1F5FF',
                    top:'17rem',
                    width:'25rem',
                    left:'-9rem',
                    height:'15rem'
                }}></div>
            </div>
        </div>
    );
}
export default Intro;