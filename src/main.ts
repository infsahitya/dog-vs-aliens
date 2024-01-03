import { parallaxCanvas } from "./data/constants";
import { parallaxBgAnimate } from "./functions";
import "./styles/index.scss";

const app: HTMLDivElement | null = document.querySelector("#app");

if (!app) throw new Error("Unable to extract div#app element from the DOM");

// doggoPlayerAnimate(doggoCanvas.CTX);
// app.appendChild(doggoCanvas.canvas);

parallaxBgAnimate();
app.appendChild(parallaxCanvas.canvas);
