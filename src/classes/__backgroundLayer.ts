import { parallaxCanvas } from "../components/canvas";

interface BackgroundLayerProps {
  updateLayer: () => void;
  drawLayer: () => void;
}

class __backgroundLayer implements BackgroundLayerProps {
  private x: number = 0;
  private y: number = 0;
  private layerSpeed: number;
  private speedModifier: number;
  private layerImage: HTMLImageElement;
  private readonly layerWidth: number = 2400;
  private readonly layerHeight: number = 700;

  constructor(layerImage: HTMLImageElement, speedModifier: number) {
    this.layerImage = layerImage;
    this.speedModifier = speedModifier;
    this.layerSpeed = parallaxCanvas.layerBaseSpeed * this.speedModifier;
  }

  updateLayer() {
    this.layerSpeed = parallaxCanvas.layerBaseSpeed * this.speedModifier;
    
    if (this.x <= -this.layerWidth) this.x = 0;

    this.x -= this.layerSpeed;
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
      this.x + this.layerWidth,
      this.y,
      this.layerWidth,
      this.layerHeight,
    );
  }
}

export default __backgroundLayer;
