import React from "react";
import "../styles/Cards.css";

function Cards() {
  return (
    <div>
      <div class="flex-container">
        <div class="flex-item">
          <div class="flex-item-inner">
            <a href="#">
              <div class="card-front ">
                <div>
                  <h4>Total Runs</h4>
                  <p class="detail">120</p>
                </div>
                <i class="fa fa-pie-chart fa-3x tile-icon icon-white"></i>
              </div>
              <div class="card-back ">
                <p class="desc">
                  Pellentesque magna nunc, fermentum nec ipsum non, consequat
                  scelerisque dui.
                </p>
              </div>
            </a>
          </div>
        </div>

        <div class="flex-item">
          <div class="flex-item-inner">
            <a href="#">
              <div class="card-front ">
                <div>
                  <h4>Run Minutes</h4>
                  <p class="detail">$XXX,XXX</p>
                </div>
                <i class="fa fa-heart fa-3x tile-icon icon-white"></i>
              </div>
              <div class="card-back bg-magenta">
                <p class="desc">
                  Cras posuere consequat nisl, ut rhoncus odio finibus sit amet.
                  Sed consectetur dapibus.
                </p>
              </div>
            </a>
          </div>
        </div>

        <div class="flex-item">
          <div class="flex-item-inner">
            <a href="#">
              <div class="card-front ">
                <div>
                  <h4>Success Rate</h4>
                  <p class="detail">$XXX,XXX</p>
                </div>
                <i class="fa fa-chart-line fa-3x tile-icon icon-white"></i>
              </div>
              <div class="card-back ">
                <p class="desc">
                  Etiam imperdiet ullamcorper dolor sit amet molestie. Quisque
                  eu nibh in ligula.
                </p>
              </div>
            </a>
          </div>
        </div>

        <div class="flex-item">
          <div class="flex-item-inner">
            <a href="#">
              <div class="card-front ">
                <div>
                  <h4>Manual Runs</h4>
                  <p class="detail">$XXX,XXX</p>
                </div>
                <i class="fa fa-bar-chart fa-3x tile-icon icon-white"></i>
              </div>
              <div class="card-back ">
                <p class="desc">
                  Nullam porttitor dui quis commodo mattis. Fusce posuere, nisl
                  id ultrices pellentesque.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
