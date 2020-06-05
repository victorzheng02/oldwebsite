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
  <FontAwesomeIcon icon={faLinkedin} size="4x" />
</a>
<a href="https://github.com/SmilestheSad" target="_blank" className="github social">
  <FontAwesomeIcon icon={faGithub} size="4x" />
</a>
<a href="https://www.instagram.com/victorzheng231/" target="_blank"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="4x" />
</a>
<a href="https://www.facebook.com/victor.zheng.50" target="_blank"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="4x" />
</a>
    </div>
  );
}


export default Mediabox;