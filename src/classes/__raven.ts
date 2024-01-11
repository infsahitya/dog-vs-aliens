import { ENEMY_RAVEN } from "../assets/sprites";
import { ravenCanvas, ravenCollisionCanvas } from "../components/canvas";
import { updateRavenAttackPlayerScore } from "../animations/__ravenAnimate";
import { Explosion } from ".";
import { explosionsCollection } from "../animations/__explosionAnimate";

type RavenColorProps = Record<"red" | "green" | "blue", number>;

interface RavenProps {
  getDW: () => number;
  getDH: () => number;
  drawRaven: () => void;
  updateRaven: (diffTime: number) => void;
  ravenCollision: (colors: [number, number, number]) => void;
}

const {
  CTX,
  WIDTH: RAVENCANVAS_WIDTH,
  HEIGHT: RAVENCANVAS_HEIGHT,
} = ravenCanvas;
const { CTX: CollisionCTX } = ravenCollisionCanvas;

class __raven implements RavenProps {
  private readonly spriteWidth: number = 271;
  private readonly spriteHeight: number = 194;
  private readonly framesCount: number = 6;
  private readonly ravenSpeed: number = Math.random() * 10 + 1;
  private readonly ravenSprite: HTMLImageElement = new Image();
  private readonly staggerFrame: number = Math.random() * 5 + 2;
  private readonly sizeAspectRatio: number = Math.random() * 2.5 + 1.5;

  private currentSpritePosition: number = 0;
  private positionY: number = Math.random() * 5 - 2.5;
  private sw: number = this.spriteWidth;
  private sh: number = this.spriteHeight;
  private dw: number = this.spriteWidth / this.sizeAspectRatio;
  private dh: number = this.spriteHeight / this.sizeAspectRatio;
  private dx: number = RAVENCANVAS_WIDTH;
  private dy: number = Math.random() * (RAVENCANVAS_HEIGHT - this.spriteHeight);
  private animationFramesCount: number = 0;
  private readonly ravenBoxColors: RavenColorProps = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
  };
  private readonly boxColor: string = `rgb(${this.ravenBoxColors.red}, ${this.ravenBoxColors.green}, ${this.ravenBoxColors.blue})`;

  private timeSinceLastFlap: number = 0;
  private flapInterval: number = 100;

  markForDeletion: boolean = false;

  constructor() {
    this.ravenSprite.src = ENEMY_RAVEN;
  }

  getDW = () => this.dw;
  getDH = () => this.dh;

  ravenCollision(pixelColors: [number, number, number]) {
    if (
      this.ravenBoxColors.red === pixelColors[0] &&
      this.ravenBoxColors.green === pixelColors[1] &&
      this.ravenBoxColors.blue === pixelColors[2]
    ) {
      this.markForDeletion = true;
      explosionsCollection.push(new Explosion(this.dx, this.dy, this.dw, this.dh));
      updateRavenAttackPlayerScore();
    }
  }

  updateRaven(diffTime: number) {
    if (this.dy < 0 || this.dy > RAVENCANVAS_HEIGHT - this.spriteHeight / 3) {
      this.positionY = -this.positionY;
    }

    this.dx -= this.ravenSpeed;
    this.dy += this.positionY;
    this.timeSinceLastFlap += diffTime;

    if (this.dx < 0 - this.spriteWidth) this.markForDeletion = true;

    if (this.timeSinceLastFlap > this.flapInterval) {
      this.currentSpritePosition =
        Math.floor(this.animationFramesCount / this.staggerFrame) %
        this.framesCount;

      this.timeSinceLastFlap = 0;
    }

    ++this.animationFramesCount;
  }

  drawRaven() {
    CollisionCTX.fillStyle = this.boxColor;
    CollisionCTX.fillRect(this.dx, this.dy, this.dw, this.dh);

    CTX.drawImage(
      this.ravenSprite,
      this.currentSpritePosition * this.spriteWidth,
      0,
      this.sw,
      this.sh,
      this.dx,
      this.dy,
      this.dw,
      this.dh,
    );
  }
}

export default __raven;
