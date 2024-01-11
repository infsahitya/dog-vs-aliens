import { Raven } from "../classes";
import { ravenCanvas, ravenCollisionCanvas } from "../components/canvas";

const { CTX } = ravenCanvas;
const { CTX: CollisionCTX } = ravenCollisionCanvas;

let lastRavenTime: number = 0;
let nextRavenTime: number = 0;
const ravenInterval: number = 500;

let ravensCollection: Raven[] = [];

window.addEventListener("click", (e) => {
  const pixelColor = CollisionCTX.getImageData(e.x, e.y, 1, 1);
  console.log(pixelColor);
  ravensCollection.forEach(raven => {
    raven.ravenClickHandler([pixelColor.data[0], pixelColor.data[1], pixelColor.data[2]])
  })
});

function __ravenAnimate(timestamp: number) {
  CTX.clearRect(0, 0, ravenCanvas.WIDTH, ravenCanvas.HEIGHT);
  CollisionCTX.clearRect(0, 0, ravenCanvas.WIDTH, ravenCanvas.HEIGHT);

  ravensCollection = ravensCollection.filter((raven) => !raven.markForDeletion);

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

  [...ravensCollection].forEach((raven) => {
    raven.updateRaven(diffTime);
    raven.drawRaven();
  });

  requestAnimationFrame(__ravenAnimate);
}

export default __ravenAnimate;
