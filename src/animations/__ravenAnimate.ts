import { Raven } from "../classes";
import { ravenCanvas } from "../components/canvas";

const { CTX } = ravenCanvas;

let lastRavenTime: number = 0;
let nextRavenTime: number = 0;
const ravenInterval: number = 500;

let ravensCollection: Raven[] = [];

window.addEventListener("click", (e) => {
  const pixelColor = CTX.getImageData(e.x, e.y, 1, 1);
  console.log(pixelColor);
});

function __ravenAnimate(timestamp: number) {
  CTX.clearRect(0, 0, ravenCanvas.WIDTH, ravenCanvas.HEIGHT);

  const diffTime = timestamp - lastRavenTime;
  lastRavenTime = timestamp;
  nextRavenTime += diffTime;

  if (nextRavenTime > ravenInterval) {
    ravensCollection.push(new Raven());
    nextRavenTime = 0;

    ravensCollection.sort((a, b) => {
      return a.getDW() - b.getDW();
    });
  }

  console.log(ravensCollection);

  [...ravensCollection].forEach((raven) => {
    raven.updateRaven(diffTime);
    raven.drawRaven();
  });

  ravensCollection = ravensCollection.filter((raven) => !raven.crossedCanvas);

  requestAnimationFrame(__ravenAnimate);
}

export default __ravenAnimate;
