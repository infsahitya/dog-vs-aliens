import { SoundEffect_Explosion } from "../assets/audios";
import { EXPLOSION } from "../assets/sprites";

interface ExplosionProps {
  updateExplosion: () => void;
  drawExplosion: () => void;
}

class __explosion implements ExplosionProps {
  private sx: number = 0;
  private readonly sy: number = 0;
  private sw: number;
  private sh: number;
  private dy: number;
  private dx: number;
  private dw: number;
  private dh: number;
  private readonly spriteWidth: number = 200;
  private readonly spriteHeight: number = 179;
  private readonly staggerFrame: number = 5;
  private readonly explosionAudio: HTMLAudioElement = new Audio();
  private readonly explosionSprite: HTMLImageElement = new Image();

  constructor(posX: number, posY: number) {
    this.dx = posX;
    this.dy = posY;
    this.sw = this.spriteWidth;
    this.sh = this.spriteHeight;
    this.dw = this.spriteWidth / 2;
    this.dh = this.spriteHeight / 2;
    this.explosionSprite.src = EXPLOSION;
    this.explosionAudio.src = SoundEffect_Explosion;
  }

  updateExplosion() {}

  drawExplosion() {}
}
