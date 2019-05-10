import * as PIXI from "pixi.js";
import preloadResources from "./Util/preloadResources.js";
import spaceshipURL from "./images/spaceship.png";
import planetsBgURL from "./images/planets.png";
import textBoxURL from "./images/textbox.png";
import stateManager from "./gameState/stateManager.js";

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
    },
    {
      name: "text-box",
      url: textBoxURL
    }
  ];

  // Then load the images
  preloadResources(resources, () => {
    stateManager.setup(app);
  });
});
