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

  currentSpritePosition: number = 0;
  private sw: number = this.spriteWidth;
  private sh: number = this.spriteHeight;
  private dx: number;
  private dy: number;
  private dw: number;
  private dh: number;
  private animationFramesCount: number = 0;

  constructor(
    posX: number,
    posY: number,
    originWidth: number,
    originHeight: number,
  ) {
    this.dx = posX;
    this.dy = posY;
    this.dw = originWidth;
    this.dh = originHeight;
    this.explosionSprite.src = EXPLOSION;
    this.explosionAudio.src = SoundEffect_Explosion;
  }

  updateExplosion() {
    if (this.animationFramesCount === 0) this.explosionAudio.play();

    this.currentSpritePosition =
      Math.floor(this.animationFramesCount / this.staggerFrame) %
      this.framesCount;
  }

  drawExplosion() {
    explosionCanvas.CTX.drawImage(
      this.explosionSprite,
      this.currentSpritePosition * this.spriteWidth,
      0,
      this.sw,
      this.sh,
      this.dx,
      this.dy,
      this.dw,
      this.dh,
    );

    ++this.animationFramesCount;
  }
}

export default __explosion;
