function dogPlayerAnimate(
  canvasContext: CanvasRenderingContext2D,
  dogPlayerImage: HTMLImageElement,
  spriteWidth: number,
  spriteHeight: number,
  CANVAS_WIDTH: number,
  CANVAS_HEIGHT: number,
): void {
  canvasContext.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  canvasContext.drawImage(
    dogPlayerImage,
    0,
    0,
    spriteWidth,
    spriteHeight,
    0,
    0,
    CANVAS_WIDTH,
    CANVAS_HEIGHT,
  );

  requestAnimationFrame(() =>
    dogPlayerAnimate(
      canvasContext,
      dogPlayerImage,
      spriteWidth,
      spriteHeight,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
    ),
  );
}

export default dogPlayerAnimate;
