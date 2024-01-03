const canvas: HTMLCanvasElement = document.createElement("canvas");
const canvasClass: Attr = document.createAttribute("id");

canvasClass.value = "mainCanvas";
canvas.setAttributeNode(canvasClass);

const CTX: CanvasRenderingContext2D = canvas.getContext("2d")!;
const WIDTH = (canvas.width = 600);
const HEIGHT = (canvas.height = 600);

export default {
  canvas,
  CTX,
  WIDTH,
  HEIGHT,
};
