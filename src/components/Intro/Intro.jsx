import React from "react";
import "./intro.css";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Github from "../../img/github.png";
import vector1 from "../../img/Vector1.png";
import vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import crowned from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";

function Intro() {
  return (
    <div className="i-wraper d-flex">
      <div className="i-left d-flex">
        <div className="i-name d-flex">
          <span>Hy I'm</span>
          <span>Kibria Shanto</span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            sunt provident praesentium eaque veritatis nemo, ut exercitationem
            hic rerum, blanditiis eos animi? Nemo in sapiente voluptatum est?
            Rem, adipisci porro.
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-social-icon d-flex">
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right ">
        <img src={vector1} alt="" />
        <img src={vector2} alt="" />
        <img src={boy} alt="" />
      </div>
    </div>
  );
}

export default Intro;
