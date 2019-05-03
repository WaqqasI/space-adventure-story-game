import * as PIXI from "pixi.js";
import preloadResources from "./preloadResources.js";
import getTexture from "./getTexture.js";
import spaceshipURL from "./images/spaceship.png";
import draw from './draw.js';

const app = new PIXI.Application({width: 1000, height: 1000});
document.body.appendChild(app.view);


window.addEventListener("load", () => {
  // List of resources to load
  const resources = [
    {
      name: "spaceship",
      url: spaceshipURL
    }
  ];

  // Then load the images
  preloadResources(resources, () => {
    draw(app);
  });
});
