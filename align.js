export class Align {
    static scaleToGameW(obj, per, scene) {
        obj.displayWidth = scene.game.config.width * per;
        obj.scaleY = obj.scaleX;
    }
    static scaleToGameH(obj, per, scene) {
        obj.displayHeight = scene.game.config.height * per;
        obj.scaleX = obj.scaleY;
    }
    static centerH(obj, scene) {
        obj.x = scene.game.config.width / 2 - obj.displayWidth / 2;
    }
    static centerV(obj, scene) {
        obj.y = scene.game.config.height / 2 - obj.displayHeight / 2;
    }
    static center2(obj, scene) {
        obj.x = scene.game.config.width / 2 - obj.displayWidth / 2;
        obj.y = scene.game.config.height / 2 - obj.displayHeight / 2;
    }
    static center(obj, scene) {
        obj.x = scene.game.config.width / 2;
        obj.y = scene.game.config.height / 2;
    }
}