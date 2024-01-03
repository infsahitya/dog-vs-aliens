import "./styles/index.scss";
import DOG_PLAYER_SPRITE from "./assets/sprites/shadow_dog.png";

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

app.appendChild(canvas);
