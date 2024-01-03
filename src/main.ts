import "./styles/index.scss";
import { doggoPlayerAnimate } from "./functions";
import { doggoCanvas } from "./data/constants";

const app: HTMLDivElement | null = document.querySelector("#app");

if (!app) throw new Error("Unable to extract div#app element from the DOM");

doggoPlayerAnimate(doggoCanvas.CTX);

app.appendChild(doggoCanvas.canvas);
