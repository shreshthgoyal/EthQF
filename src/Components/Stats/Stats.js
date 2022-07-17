import "./Stats.css";
import React from "react";
import CountTo from 'react-count-to';
import {Link} from "react-router-dom";

class Stats extends React.Component {
  
    render() {
      
      var {icon, title, number} = this.props;
    
      var iconStyle = {
        color: `#fff`,  
        background: this.props.color,
      };
      
      var titleStyle = {
        color: this.props.color
      };
      
      return (
        <div id="container">
                      <section className="portfolio">
        <div className="portfolio__container container container--px">
          <div className="portfolio__text">
            <h1 className="portfolio__subtitle subtitle-primary">{title}</h1>
        <h2 className="features__title title-primary"><CountTo to= {number} speed={1000} digits={1}/> ETH</h2>
      </div> 
      <div className="portfolio__footer">
             <Link to="/sponsor" className="portfolio__link cta cta--link">
              Become a sponsor
              <svg className="testimonial__link__icon cta--link-icon" viewBox="0 0 17 14" aria-hidden="true" focusable='false'>
                <path d="M1 7.375L16 7.375M16 7.375L10.375 1.75M16 7.375L10.375 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link><br></br>
            <div style={{ fontSize : "20px" }}>Matching round starts automatically as soon as matching pool hits 15 ETH.</div>
          </div>    
          </div>
          </section>
        </div>
      )
    }
  }

export default Stats;