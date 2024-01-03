import { parallaxCanvas } from "../data/constants";

interface BackgroundLayerProps {
  updateLayer: () => void;
  drawLayer: () => void;
}

class __backgroundLayer implements BackgroundLayerProps {
  private x: number;
  private y: number;
  private x2: number;
  private layerSpeed: number;
  private layerWidth: number;
  private layerHeight: number;
  private speedModifier: number;
  private layerImage: HTMLImageElement;

  constructor(layerImage: HTMLImageElement, speedModifier: number) {
    this.x = 0;
    this.y = 0;
    this.layerWidth = 2400;
    this.layerHeight = 700;
    this.x2 = this.layerWidth;
    this.layerImage = layerImage;
    this.speedModifier = speedModifier;
    this.layerSpeed = parallaxCanvas.layerBaseSpeed * this.speedModifier;
  }

  updateLayer() {
    this.layerSpeed = parallaxCanvas.layerBaseSpeed * this.speedModifier;
    if (this.x <= -this.layerWidth)
      this.x = this.layerWidth + (this.x2 - this.layerSpeed);
    if (this.x2 <= -this.layerWidth)
      this.x2 = this.layerWidth + (this.x - this.layerSpeed);

    this.x = Math.floor(this.x - this.layerSpeed);
    this.x2 = Math.floor(this.x2 - this.layerSpeed);
  }

  drawLayer() {
    parallaxCanvas.CTX.drawImage(
      this.layerImage,
      this.x,
      this.y,
      this.layerWidth,
      this.layerHeight,
    );
    parallaxCanvas.CTX.drawImage(
      this.layerImage,
      this.x2,
      this.y,
      this.layerWidth,
      this.layerHeight,
    );
  }
}

export default __backgroundLayer;
