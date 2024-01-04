const canvas: HTMLCanvasElement = document.createElement("canvas");
const canvasID: Attr = document.createAttribute("id");

canvasID.value = "parallaxCanvas";
canvas.setAttributeNode(canvasID);

const CTX: CanvasRenderingContext2D = canvas.getContext("2d")!;
const WIDTH = (canvas.width = window.innerWidth);
const HEIGHT = (canvas.height = window.innerHeight);

let layerBaseSpeed: number = 10;

export default {
  canvas,
  CTX,
  WIDTH,
  HEIGHT,
  layerBaseSpeed,
};
