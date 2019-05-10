import stateManager from "./stateManager";

class EnterPlanet {
    constructor(app, cache) {
        this.app = app;
        this.cache = cache;
        const sprites = Object.values(cache.sprites);
        for (const i in sprites) {
            const sprite = sprites[i];
            console.log(sprite);
            sprite.visible = true;
        }
    }

    setup() {
        return undefined;
    }

    loop(delta) {
        this.interval = setInterval(() => stateManager.changeState(1, {}), 5000);
    }

    terminate() {
        const sprites = Object.values(this.cache.sprites);
        for (const i in sprites) {
            const sprite = sprites[i];
            sprite.visible = false;
        }
        clearInterval(this.interval);
        return this.cache;
    }
}

export default EnterPlanet;
