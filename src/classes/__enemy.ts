import { enemyCanvas } from "../components/canvas";
import { PositionCoordinatesProps } from "../constants/__doggo";
import enemies, { EnemyTypeProps } from "../constants/__enemies";

interface EnemyProps {
  updateEnemy: () => void;
  drawEnemy: () => void;
}

class __enemy implements EnemyProps {
  private sx: number;
  private sy: number;
  private sw: number;
  private sh: number;
  private speed: number;
  private framesCount: number;
  private staggerFrame: number;
  private enemySprite: HTMLImageElement;
  private animationFramesCount: number = 0;
  private animationStates: PositionCoordinatesProps[];

  constructor(enemy: EnemyTypeProps[keyof EnemyTypeProps]) {
    this.sx = Math.random() * enemyCanvas.WIDTH;
    this.sy = Math.random() * enemyCanvas.HEIGHT;
    this.sw = enemy.spriteWidth;
    this.sh = enemy.spriteHeight;
    this.enemySprite = enemy.sprite;
    this.staggerFrame = enemy.staggerFrames;
    this.framesCount = enemy.spriteFramesCount;

    enemy.initAnimationStates();
    this.animationStates = enemy.spriteAnimationStates.location;
    this.speed = Math.random() * 4 - 2;
  }

  updateEnemy() {
    this.sx += this.speed;
    this.sy += this.speed;
  }

  drawEnemy() {
    const frame: PositionCoordinatesProps = { x: 0, y: 0 };
    let position: number = Math.floor(this.animationFramesCount / this.staggerFrame) % this.framesCount;

    frame.x = this.animationStates[position].x;

    enemyCanvas.CTX.drawImage(
      this.enemySprite,
      frame.x,
      frame.y,
      this.sw,
      this.sh,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
    );

    this.animationFramesCount++;
  }
}

export default __enemy;
