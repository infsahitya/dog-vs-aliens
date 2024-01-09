import { Explosion } from "../classes";
import { explosionCanvas } from "../components/canvas";

const explosionsCollection: Explosion[] = [];

window.addEventListener("click", (e: MouseEvent) => {
  explosionsCollection.push(new Explosion(e.x, e.y));
});

function __explosionAnimate() {
  explosionCanvas.CTX.clearRect(
    0,
    0,
    explosionCanvas.WIDTH,
    explosionCanvas.HEIGHT,
  );

  explosionsCollection.forEach((explosion, index) => {
    explosion.updateExplosion();
    explosion.drawExplosion();

    if (explosion.positionX >= explosion.framesCount - 1) {
      explosionsCollection.splice(index, 1);
      --index;
    }
  });

  requestAnimationFrame(__explosionAnimate);
}

export default __explosionAnimate;
