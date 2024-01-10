import { ENEMY_RAVEN } from "../assets/sprites";
import { ravenCanvas } from "../components/canvas";

interface RavenProps {
  updateRaven: () => void;
  drawRaven: () => void;
}

class __raven implements RavenProps {
  private readonly spriteWidth: number = 271;
  private readonly spriteHeight: number = 194;
  private readonly ravenSpeed: number = Math.random() * 10 + 1;
  private readonly ravenSprite: HTMLImageElement = new Image();
  private readonly sizeAspectRatio: number = Math.random() * 2.5 + 1;

  private sx: number = 0;
  private sy: number = 0;
  private sw: number = this.spriteWidth;
  private sh: number = this.spriteHeight;
  private dw: number = this.spriteWidth / this.sizeAspectRatio;
  private dh: number = this.spriteHeight / this.sizeAspectRatio;
  private dx: number = ravenCanvas.WIDTH;
  private dy: number = Math.random() * (ravenCanvas.HEIGHT - this.spriteHeight);

  constructor() {
    this.ravenSprite.src = ENEMY_RAVEN;
  }

  updateRaven() {
    this.dx -= this.ravenSpeed;
  }
  
  drawRaven() {
    ravenCanvas.CTX.drawImage(this.ravenSprite, this.sx, this.sy, this.sw, this.sh, this.dx, this.dy, this.dw, this.dh);
  }
}

export default __raven;
