const canvas: HTMLCanvasElement = document.createElement("canvas");
const canvasID: Attr = document.createAttribute("id");

canvasID.value = "enemyCanvas";
canvas.setAttributeNode(canvasID);

const CTX: CanvasRenderingContext2D = canvas.getContext("2d")!;
const WIDTH = (canvas.width = window.innerWidth);
const HEIGHT = (canvas.height = window.innerHeight);

export default {
  canvas,
  CTX,
  WIDTH,
  HEIGHT,
};
