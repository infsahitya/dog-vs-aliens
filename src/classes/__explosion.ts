import { EXPLOSION } from "../assets/sprites";
import { explosionCanvas } from "../components/canvas";
import { SoundEffect_Explosion } from "../assets/audios";

interface ExplosionProps {
  updateExplosion: () => void;
  drawExplosion: () => void;
}

class __explosion implements ExplosionProps {
  readonly framesCount: number = 5;
  private readonly staggerFrame: number = 6;
  private readonly spriteWidth: number = 200;
  private readonly spriteHeight: number = 179;
  private readonly explosionAudio: HTMLAudioElement = new Audio();
  private readonly explosionSprite: HTMLImageElement = new Image();

  positionX: number = 0;
  private sw: number = this.spriteWidth;
  private sh: number = this.spriteHeight;
  private dx: number;
  private dy: number;
  private dw: number = this.spriteWidth / 2;
  private dh: number = this.spriteHeight / 2;
  private animationFramesCount: number = 0;

  constructor(posX: number, posY: number) {
    this.dx = posX;
    this.dy = posY;
    this.explosionSprite.src = EXPLOSION;
    this.explosionAudio.src = SoundEffect_Explosion;
  }

  updateExplosion() {
    if (this.animationFramesCount === 0) this.explosionAudio.play();

    this.positionX =
      Math.floor(this.animationFramesCount / this.staggerFrame) %
      this.framesCount;
  }

  drawExplosion() {
    explosionCanvas.CTX.drawImage(
      this.explosionSprite,
      this.positionX * this.spriteWidth,
      0,
      this.sw,
      this.sh,
      this.dx - this.spriteWidth / 4,
      this.dy - this.spriteHeight / 4,
      this.dw,
      this.dh,
    );

    ++this.animationFramesCount;
  }
}

export default __explosion;
