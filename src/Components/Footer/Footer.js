import './Footer.css';
import {NavLink} from 'react-router-dom';
const Footer = () => {
    return (
   <div>
       <footer className="footer">
  <div className="footer__container container container--px flex">
    <div className="footer__header flex">
      <a href="#" className="footer__brand" title="Back to the homepage">ETH QF</a>

      <div className="footer__social-icons social-icons flex">
        <a href="#" className="social-icons__link social-icons__link--facebook">
          <i className='bx bxl-facebook'></i>
          <span className="visually-hidden">Facebook</span>
        </a>
        <a href="#" className="social-icons__link social-icons__link--twitter">
          <i className='bx bxl-twitter' ></i>
          <span className="visually-hidden">Twitter</span>
        </a>
        <a href="#" className="social-icons__link social-icons__link--youtube">
          <i className='bx bxl-youtube' ></i>
          <span className="visually-hidden">YouTube</span>
        </a>
      </div>
    </div>

    <nav className="footer__inner flex">
      <ul className="footer__list list" role="menu">
        <h3 className="list__title"><NavLink
              exact="true"
              to="/"
              activeclassname="active"
              className="nav-links"
            >Home</NavLink></h3>
      </ul>
      <ul className="footer__list list" role="menu">
        <h3 className="list__title"><NavLink
              exact="true"
              to="/sponsor"
              activeclassname="active"
              className="nav-links"
             
            >Contribute</NavLink></h3>
      </ul>
      <ul className="footer__list list" role="menu">
        <h3 className="list__title"><NavLink
              exact="true"
              to="/projects"
              activeclassname="active"
              className="nav-links"
              
            >
              Projects
            </NavLink></h3>
      </ul>
      <ul className="footer__list list" role="menu">
        <h3 className="list__title"><NavLink
              exact="true"
              to="/sponsor"
              activeclassname="active"
              className="nav-links"
              >
              Sponsor
            </NavLink></h3>
      </ul>
    </nav>
    <p className="footer__text">© 2020 Batch IMT - Team5</p>
  </div>
</footer>
   </div>
    )
}

export default Footer;