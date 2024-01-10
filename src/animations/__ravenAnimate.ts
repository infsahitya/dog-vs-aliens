import { Raven } from "../classes";
import { ravenCanvas } from "../components/canvas";

let lastRavenTime: number = 0;
let nextRavenTime: number = 0;
const ravenInterval: number = 500;
let ravensCollection: Raven[] = [];

function __ravenAnimate(timestamp: number) {
  ravenCanvas.CTX.clearRect(0, 0, ravenCanvas.WIDTH, ravenCanvas.HEIGHT);

  const diffTime = timestamp - lastRavenTime;
  lastRavenTime = timestamp;
  nextRavenTime += diffTime;

  if (nextRavenTime > ravenInterval) {
    ravensCollection.push(new Raven());
    nextRavenTime = 0;
  }

  [...ravensCollection].forEach((raven) => {
    raven.updateRaven();
    raven.drawRaven();
  });

  ravensCollection = ravensCollection.filter((raven) => !raven.crossedCanvas);

  requestAnimationFrame(__ravenAnimate);
}

export default __ravenAnimate;
