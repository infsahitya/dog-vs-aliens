export interface DogPlayerAnimateFunctionProps {
  canvasCTX: CanvasRenderingContext2D;
  dogPlayerImage: HTMLImageElement;
  sw: number;
  sh: number;
  dw: number;
  dh: number;
  frame: {
    X: number;
    Y: number;
    stagger: number;
  };
}

let animationFramesCount: number = 0;

function __dogPlayerAnimate({ ...props }: DogPlayerAnimateFunctionProps): void {
  const { canvasCTX, dogPlayerImage, sw, sh, dw, dh, frame } = props;

  canvasCTX.clearRect(0, 0, dw, dh);
  canvasCTX.drawImage(
    dogPlayerImage,
    frame.X * sw,
    frame.Y * sh,
    sw,
    sh,
    0,
    0,
    sw,
    sh,
  );

  if (animationFramesCount % frame.stagger === 0) {
    if (frame.X < 4) frame.X++;
    else frame.X = 0;
  }

  animationFramesCount++;
  requestAnimationFrame(() => __dogPlayerAnimate({ ...props }));
}

export default __dogPlayerAnimate;
