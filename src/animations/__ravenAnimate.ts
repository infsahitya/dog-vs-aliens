import { Raven } from "../classes";
import { ravenCanvas } from "../components/canvas";

const raven = new Raven();

function __ravenAnimate(timestamp: number) {
  ravenCanvas.CTX.clearRect(0, 0, ravenCanvas.WIDTH, ravenCanvas.HEIGHT);

  raven.updateRaven();
  raven.drawRaven();

  requestAnimationFrame(__ravenAnimate);
}

export default __ravenAnimate;
