import { BackgroundLayer } from "../classes";
import { parallaxCanvas } from "../components/canvas";
import { bgLayers } from "../constants";

const LAYER1 = new BackgroundLayer(bgLayers.bgLayer1, 0.2);
const LAYER2 = new BackgroundLayer(bgLayers.bgLayer2, 0.4);
const LAYER3 = new BackgroundLayer(bgLayers.bgLayer3, 0.6);
const LAYER4 = new BackgroundLayer(bgLayers.bgLayer4, 0.8);
const LAYER5 = new BackgroundLayer(bgLayers.bgLayer5, 1);

const LayersCollection: BackgroundLayer[] = [
  LAYER1,
  LAYER2,
  LAYER3,
  LAYER4,
  LAYER5,
];

function __parallaxBgAnimate() {
  parallaxCanvas.CTX.clearRect(
    0,
    0,
    parallaxCanvas.WIDTH,
    parallaxCanvas.HEIGHT,
  );

  LayersCollection.forEach((layer) => {
    layer.updateLayer();
    layer.drawLayer();
  });

  requestAnimationFrame(__parallaxBgAnimate);
}

export default __parallaxBgAnimate;
