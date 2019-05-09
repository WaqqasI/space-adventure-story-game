/**
 * Detects if sprite is hitting walls.
 * @param {number} x Sprite x coordinate
 * @param {number} y sprite y coordinate
 * @param {number} width sprite width
 * @param {number} height sprite height
 * @param {number} appWidth renderer width
 * @param {number} appHeight renderer height
 * @param {object} sprite
 */
const wallDetection = (x, y, width, height, appWidth, appHeight, sprite) => {
    // Side Walls
    if (x + width / 2 >= appWidth) {
        sprite.x = appWidth - width / 2;
    }
    if (x - width / 2 <= 0) {
        sprite.x = width / 2;
    }

    // up and down walls
    if (y + height / 2 >= appHeight) {
        sprite.y = appHeight - height / 2;
    }
    if (y - height / 2 <= 0) {
        sprite.y = height / 2;
    }
};

export default wallDetection;
