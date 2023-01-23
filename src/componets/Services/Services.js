import './Services.css'
import { motion } from "framer-motion";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from './Card/Card';
import Resume from './ArbajResume.pdf'

const Services = ()=>{
  const transition = { duration: 1,type: "spring",};

    return (
<div className='services'>
    <div className='awesome'>
        <span>My Awesome</span>
        <span>Services</span>
        <span>
        develop the user interface. Web page development. <br />I can add basic fuctionality to your Website.
        </span>
        <a href={Resume} download>
        <button className='btn s-btn'> Download Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
    </div>
    <div className='cards'>
    <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Frant End"}
            detail={"HTML , CSS , ReactJS , Bootstrap"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Server End"}
            detail={"JavaScript, Nodejs, Express ,PHP , Laravel"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"DataBase"}
            detail={
              "MongoDB , MySQL "
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
    <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
    </div>
</div>
    );
}
export default Services ;