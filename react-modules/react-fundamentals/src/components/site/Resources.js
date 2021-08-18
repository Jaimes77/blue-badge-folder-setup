import React from "react";

const Resources = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <h1>React Resources</h1>
        <p>
          Below are some of the resources that we used throughout this app.
          Note: You'll have one challenge where you will be asked to make this
          page better.
        </p>
        <ul>
          <li>
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
            >
              React Router Dom
            </a>
          </li>
          <li>
            <a
              href="https://www.udemy.com/course/react-the=guide-incl-redux"
              target="_blank"
            >
              Samer Buna's Pluralsight Course for the GitHub API Starter
            </a>
          </li>
          <li>
            <a href="https://reactstrap.github.io/" target="_blank">
              ReactStrap for a Bootstrap Application
            </a>
          </li>
          <li>
            <a
              href="https://gorangajic.github.io/react-icons/fa.html"
              target="blank"
            >
              Font Awesome for React
            </a>
          </li>
          <li>
            <a
              href="https://github.com/bmorelli25/interactive-bitcoin-price-chart"
              target="_blank"
            >
              Bitcoin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mthorry/earthquakes-mapper"
              target="_blank"
            >
              Google Maps
            </a>
          </li>
          <li>
            <a
              href="https://neptunian.github.io/react-photo-gallery"
              target="_blank"
            >
              React Photo Gallery
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
