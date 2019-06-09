import getTexture from "../Util/Graphics/getTexture";
import * as PIXI from "pixi.js";
import wallDetection from "../Util/Algorithms/wallDetection";
import enabler from "../Interface/Interfaces/TextBox/enabler";
import stateManager from "./stateManager";
import StoryEngine from "../Util/Algorithms/StoryEngine";
import story from "../story.json";

class GhostPlanet {
  constructor(app, cache) {
    this.app = app;
    this.cache = cache;
    this.sprites = cache.PlayState.sprites;
    this.cache.EnterPlanet.textBox.visible = true;
    this.bgExists = this.cache.GhostPlanet ? this.cache.GhostPlanet.bg : false;
    this.bg = this.bgExists || new PIXI.Sprite(getTexture("ghost-planet"));
    this.ghosts = this.cache.GhostPlanet
      ? this.cache.GhostPlanet.ghosts
      : undefined;
    if (!this.ghosts) {
      this.createGhosts();
    } else this.visualiseGhosts();

    enabler.resolve((state, props) => ({ visible: true }));
    this.runThroughStory();
  }

  runThroughStory() {
    this.engine = new StoryEngine(story, this.reducer(this.engine));
    const cc = this.engine.currentContext;
    enabler.resolve((state, props) => ({
      description: cc.description,
      options: cc.options
    }));
  }

  reducer(engine) {
    return (f, finished) => {
      f();
      const cc = this.engine.currentContext;
      enabler.resolve((state, props) => ({
        description: cc.description,
        options: cc.options
      }));
      if (finished) stateManager.changeState(1);
    };
  }

  createGhosts() {
    this.ghosts = [];
    const ghostText = getTexture("ghost");
    for (let i = 0; i < 5; i++) {
      this.ghosts.push(new PIXI.Sprite(ghostText));
    }
  }

  visualiseGhosts() {
    for (const i in this.ghosts) {
      this.ghosts[i].visible = true;
    }
  }

  setupGhosts(i) {
    this.ghosts[i].scale.set(0.2);
    this.ghosts[i].x = Math.floor(
      Math.random() * (this.app.renderer.width - this.ghosts[i].width)
    );
    this.ghosts[i].y = Math.floor(
      Math.random() * (this.bg.height - this.ghosts[i].height)
    );
    this.ghosts[i].vx = Math.floor(Math.random() * 5 - Math.random() * 10);
    this.ghosts[i].vy = Math.floor(Math.random() * 5 - Math.random() * 10);
  }

  setup() {
    const amountToEnlarge = this.app.renderer.width / this.bg.width;
    this.bg.width *= amountToEnlarge;
    this.bg.height *= amountToEnlarge;
    this.app.stage.removeChild(this.cache.EnterPlanet.textBox);
    this.bgExists || this.app.stage.addChild(this.bg);
    this.app.stage.addChild(this.cache.EnterPlanet.textBox);
    this.bg.visible = true;
    console.log(this.ghosts);
    for (const i in this.ghosts) {
      if (!this.cache.ghosts) {
        this.setupGhosts(i);
        this.app.stage.addChild(this.ghosts[i]);
      }
    }
  }

  loop() {
    for (const i in this.ghosts) {
      const ghost = this.ghosts[i];
      this.moveGhosts(ghost);
      this.changeDirection(ghost);
    }

    if (!this.terminated) requestAnimationFrame(this.loop.bind(this));
  }

  moveGhosts(ghost) {
    ghost.x += ghost.vx;
    ghost.y += ghost.vy;
  }

  changeDirection(ghost) {
    const hitWall = wallDetection(
      ghost.x,
      ghost.y,
      ghost.width,
      ghost.height,
      this.app.renderer.width,
      this.bg.height,
      ghost
    );
    if (hitWall) {
      ghost.vx = -ghost.vx;
      ghost.vy = -ghost.vy;
    }
  }

  terminate() {
    enabler.resolve(() => ({
      visible: false,
      options: [],
      description: ""
    }));
    this.terminated = true;
    this.bg.visible = false;
    this.cache.EnterPlanet.textBox.visible = false;
    for (const i in this.ghosts) {
      this.ghosts[i].visible = false;
    }

    this.cache.GhostPlanet = {
      ghosts: this.ghosts,
      bg: this.bg
    };
    return this.cache;
  }
}

export default GhostPlanet;
