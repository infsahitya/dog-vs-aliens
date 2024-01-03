const canvas: HTMLCanvasElement = document.createElement("canvas");
const canvasID: Attr = document.createAttribute("id");

canvasID.value = "parallaxCanvas";
canvas.setAttributeNode(canvasID);

const CTX: CanvasRenderingContext2D = canvas.getContext("2d")!;
const WIDTH = (canvas.width = 600);
const HEIGHT = (canvas.height = 500);

export default {
  canvas,
  CTX,
  WIDTH,
  HEIGHT,
};
