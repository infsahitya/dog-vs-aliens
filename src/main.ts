import "./styles/index.scss";
import { dogPlayerAnimate } from "./functions";
import { mainCanvas } from "./data/constants";

const app: HTMLDivElement | null = document.querySelector("#app");

if (!app) throw new Error("Unable to extract div#app element from the DOM");

dogPlayerAnimate(mainCanvas.CTX);

app.appendChild(mainCanvas.canvas);
