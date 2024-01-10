interface RavenProps {
  updateRaven: () => void;
  drawRaven: () => void;
}

class __raven implements RavenProps {
  private readonly spriteWidth: number = 0;
  private readonly spriteHeight: number = 0;
  private sx: number = 0;
  private sy: number = 0;
  private sw: number = (this.spriteWidth / Math.random()) * 2.5 + 1;
  private sh: number = (this.spriteHeight / Math.random()) * 2.5 + 1;
  private dx: number;
  private dy: number;
  private dw: number;
  private dy: number;

  constructor() {}

  updateRaven() {}
  drawRaven() {}
}

export default __raven;
