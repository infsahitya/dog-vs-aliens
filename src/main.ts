import { parallaxCanvas } from "./data/constants";
import { parallaxBgAnimate } from "./functions";
import "./styles/index.scss";

const app: HTMLDivElement | null = document.querySelector("#app");

if (!app) throw new Error("Unable to extract div#app element from the DOM");

// window.addEventListener("load", () => doggoPlayerAnimate(doggoCanvas.CTX));
// app.appendChild(doggoCanvas.canvas);

window.addEventListener("load", () => parallaxBgAnimate());
app.appendChild(parallaxCanvas.canvas);
