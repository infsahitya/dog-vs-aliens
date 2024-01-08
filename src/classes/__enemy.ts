import { enemyCanvas } from "../components/canvas";
import { EnemyTypeProps } from "../constants/__enemies";
import { PositionCoordinatesProps } from "../constants/__doggo";

interface EnemyProps {
  updateEnemy: () => void;
  drawEnemy: () => void;
}

class __enemy implements EnemyProps {
  private sw: number;
  private sh: number;
  private dx: number;
  private dy: number;
  private dw: number;
  private dh: number;
  private speed: number;
  private framesCount: number;
  private staggerFrame: number;
  private enemySprite: HTMLImageElement;
  private animationFramesCount: number = 0;
  private animationStates: PositionCoordinatesProps[];
  private frame: PositionCoordinatesProps = { x: 0, y: 0 };
  private animationType: EnemyTypeProps[keyof EnemyTypeProps]["animationType"];

  private angle: number;
  private angleSpeed: number;
  private curveLength: number;

  constructor(enemy: EnemyTypeProps[keyof EnemyTypeProps]) {
    this.sw = enemy.spriteWidth;
    this.sh = enemy.spriteHeight;
    this.dx = Math.random() * (enemyCanvas.WIDTH - this.sw); // always sets the x coordinates of enemy inside canvas width
    this.dy = Math.random() * (enemyCanvas.HEIGHT - this.sh); // always sets the y coordinates of enemy inside canvas height
    this.dw = enemy.spriteWidth / 2.5; // Dividing sprite width with 2.5 signifies how many times I want to reduce the width of original width in order to be used while drawing image area.
    this.dh = enemy.spriteHeight / 2.5; // Dividing sprite height with 2.5 signifies how many times I want to reduce the height of original width in order to be used while drawing image area.
    this.enemySprite = enemy.sprite;
    this.animationType = enemy.animationType;
    this.framesCount = enemy.spriteFramesCount;
    this.staggerFrame = Math.floor(Math.random() * 3 + 1);

    this.animationStates = enemy.spriteAnimationStates.location;
    this.speed =
      this.animationType === "wiggle"
        ? 0
        : this.animationType === "curve"
        ? Math.random() * 4 + 1
        : this.animationType === "toggling"
        ? Math.random() * 4 + 1
        : 0;

    this.angle = 0;
    this.angleSpeed =
      this.animationType === "curve"
        ? Math.random() * 0.2
        : Math.random() * 1.5 + 0.5;
    this.curveLength =
      this.animationType === "curve"
        ? Math.random() * 7
        : Math.random() * 200 + 50;
  }

  updateEnemy() {
    switch (this.animationType) {
      case "wiggle":
        this.speed = Math.random() * 5 - 2.5; // this.speed inside updateEnemy() method defines values locally to get random values at each render for defining wiggle animation type.
        this.dx += this.speed;
        this.dy += this.speed;
        break;
      case "curve":
        this.dx -= this.speed; // decrementing this.speed to move enemy from right to left
        this.dy += this.curveLength * Math.sin(this.angle);
        this.angle += this.angleSpeed;
        this.dx = this.dx + this.dw < 0 ? enemyCanvas.WIDTH : this.dx; // resets enemy animation again from most right to left when the enemy crosses the canvas width.
        break;
      case "toggling":
        this.dx =
          this.curveLength * Math.sin(this.angle * (Math.PI / 90)) +
          (enemyCanvas.WIDTH / 2 - this.dw / 2);
        this.dy =
          this.curveLength * Math.cos(this.angle * (Math.PI / 270)) +
          (enemyCanvas.HEIGHT / 2 - this.dh / 2);
        this.angle += this.angleSpeed;
        this.dx = this.dx + this.dw < 0 ? enemyCanvas.WIDTH : this.dx; // resets enemy animation again from most right to left when the enemy crosses the canvas width.
        break;
    }
  }

  drawEnemy() {
    const position: number =
      Math.floor(this.animationFramesCount / this.staggerFrame) %
      this.framesCount;

    this.frame.x = this.animationStates[position].x;

    enemyCanvas.CTX.drawImage(
      this.enemySprite,
      this.frame.x, // (sx): source origin on x coordinate, this.frame.x changes to display the current iterated sprite
      this.frame.y, // (sy): source origin on y coordinate, this.frame.y is constant 0 because sprite variaion in only present horizontally.
      this.sw, // (sw): source width, the original width of enemy sprite to be mentioned so that it can be fitted inside drawImage() area.
      this.sh, // (sh): source height, the original height of enemy sprite to be mentioned so that it can be fitted inside drawImage() area.
      this.dx, // (dx): destination origin on x coordinate, justifies where the enemy sprite has be be drawn along x-axis.
      this.dy, // (dy): destination origin on y coordinate, justifies where the enemy sprite has be be drawn along y-axis.
      this.dw, // (dw): destination width, the width of the area drawn be drawImage() method, in which enemy sprite will be drawn.
      this.dh, // (dh): destination height, the width of the area drawn be drawImage() method, in which enemy sprite will be drawn.
    );

    this.animationFramesCount++;
  }
}

export default __enemy;
