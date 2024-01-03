import "./styles/index.scss";
import { dogPlayerAnimate } from "./functions";
import DOG_PLAYER_SPRITE from "./assets/sprites/shadow_dog.png";
import { DogPlayerAnimateFunctionProps } from "./functions/__dogPlayerAnimate";

const app: HTMLDivElement = document.querySelector("#app")!;

const canvas: HTMLCanvasElement = document.createElement("canvas");
const canvasClass: Attr = document.createAttribute("id");

canvasClass.value = "mainCanvas";
canvas.setAttributeNode(canvasClass);

const mainCanvasCTX: CanvasRenderingContext2D = canvas.getContext("2d")!;
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);

const dogPlayerImage: HTMLImageElement = new Image();
dogPlayerImage.src = DOG_PLAYER_SPRITE;
const spriteWidth: number = 575;
const spriteHeight: number = 523;
const animationFrames: DogPlayerAnimateFunctionProps["frame"] = {
  X: 0,
  Y: 5,
  stagger: 5,
};

dogPlayerAnimate({
  canvasCTX: mainCanvasCTX,
  dogPlayerImage: dogPlayerImage,
  sw: spriteWidth,
  sh: spriteHeight,
  dw: CANVAS_WIDTH,
  dh: CANVAS_HEIGHT,
  frame: animationFrames,
});

app.appendChild(canvas);
