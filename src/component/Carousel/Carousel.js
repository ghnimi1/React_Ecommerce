import React, { Component } from 'react';

export default class Carousel extends Component {
  render() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://web-assets-mk.s3.amazonaws.com/modules/homeslider/images/23839c1ab0c2bbc3fc791cd05bf9c21f88cd15bc_pc-gamer-msi-GF63-assassin.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://web-assets-mk.s3.amazonaws.com/modules/homeslider/images/6c86ccc15c6b939a31724d774ba85714eae9026f_Samsung-A20S-promotion.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://web-assets-mk.s3.amazonaws.com/modules/homeslider/images/a3f96aba07b1832c2d2fe7b020c5c182963eff5c_console-de-jeux-en-ligne.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
