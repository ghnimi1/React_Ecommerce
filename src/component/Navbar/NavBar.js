import React, { Component } from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  state={
    favorite:[],
    chart:[],
  }
  componentDidMount = () => {
    let favorite =  localStorage.getItem('phones')
    let chart =  localStorage.getItem('chart')
    this.setState({favorite:JSON.parse(favorite),chart:JSON.parse(chart)})
    };
  render() {
    return (
      <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-light" >
        <Link className="navbar-brand" to="/"><i className="fa fa-mobile fa-2x"><span>
          Phone</span></i></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <a className="nav-link" href="#">Informatique <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="/">Telephonie</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gaming</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="false" aria-expanded="true">
                Bureautique
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Accessoire Bureautiques</a>
                <a className="dropdown-item" href="#">Stylo</a>
                <a className="dropdown-item" href="#">Marqueurs</a>
              </div>
            </li>
            <li className="nav-item">
              <Link to='/contact' className="nav-link" href="#">Contact</Link>
            </li>
          </ul>
          
          <div className="form-inline my-lg-0">
            <Link to='login' style={{marginRight:'10px'}}>Connexion</Link>
            <Link to='create'>Créer un compte</Link>
            <Link to='/souhait'><i className="fa fa-heart fa-2x">
              <span className="badge badge-pill badge-danger">{this.state.favorite.length}</span></i></Link>
            <Link to='/panier'><i className="fa fa-cart-plus fa-2x">
              <span className="badge badge-pill badge-danger">{this.state.chart.length}</span></i></Link>
          </div>
        </div>
      </nav>
      </div>
      
    );
  }
}
