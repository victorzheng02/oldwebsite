import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faInstagram
  
} from "@fortawesome/free-brands-svg-icons";
function Mediabox() {
  return (
    <div class="social-container">
      <a href="https://www.linkedin.com/in/victor-zheng-a4462a164/" target="_blank"
  className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size="3x" />
</a>
<a href="https://github.com/SmilestheSad" target="_blank" className="github social social">
  <FontAwesomeIcon icon={faGithub} size="3x" />
</a>
<a href="https://www.instagram.com/victorzheng231/" target="_blank"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="3x" />
</a>
<a href="https://www.facebook.com/victor.zheng.50" target="_blank"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="3x" />
</a>
    </div>
  );
}


export default Mediabox;