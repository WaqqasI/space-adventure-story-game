import * as PIXI from "pixi.js";
import preloadResources from "./Util/preloadResources.js";
import spaceshipURL from "./images/spaceship.png";
import planetsBgURL from "./images/planets.png";
import stateManager from "./gameState/stateManager.js";
import App from "./Interface/App.js";
import * as ReactDOM from "react-dom";
import React from 'react'

const canvasElement = document.getElementById("canvas");
const app = new PIXI.Application({ width: 960, height: 540 });
canvasElement.appendChild(app.view);

window.addEventListener("load", () => {
  // List of resources to load
  const resources = [
    {
      name: "spaceship",
      url: spaceshipURL
    },
    {
      name: "planets",
      url: planetsBgURL
    }
  ];

  // Then load the images
  preloadResources(resources, () => {
    stateManager.setup(app);
  });

    ReactDOM.render(<App/>, document.getElementById('root'))

});


