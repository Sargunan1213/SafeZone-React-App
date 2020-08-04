import React from 'react';
import { Link } from "react-router-dom";

import banner from './static/banner.jpg';
import './styles.css';
class Header extends React.Component {
    state = {};
  
    render() {

        return (
            <div id='header'>
                <img className="banner-img" src={banner} alt="banner.png" />
                <div className='description'>
                    <h1> Welcome </h1>
                    <h3>
                        SafeZone provides a platform for COVID-19 frontline workers to access/rent quarantined rooms during the pandemic. 
                        Since frontline workers come in contact with the virus, they may not want to live in close proximity to members 
                        who are vulnerable or at risk. SafeZone also benefits the workers by reducing travelling distances to and from work.
                    </h3>
                    <Link to='/Posts'>Checkout avaliable homes</Link>
                </div>
            </div>
        );
    }
  }
  
  export default Header;