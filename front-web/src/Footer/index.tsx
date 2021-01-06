import "./styles.css";
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';
import { ReactComponent as Youtube } from './youtube.svg';

function Footer () {
  return (
    <nav className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/ThiagoCedran/" target="_new">
          <Youtube />
        </a>
        <a href="https://www.linkedin.com/in/thiago-cedran-santos/" target="_new">
          <Linkedin />
        </a>
        <a href="https://www.instagram.com/thiagocdn/" target="_new">
          <Instagram />
        </a>
      </div>
    </nav>
  );
}

export default Footer;