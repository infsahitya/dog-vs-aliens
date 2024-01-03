import { parallaxCanvas } from "./data/constants";
import "./styles/index.scss";

const app: HTMLDivElement | null = document.querySelector("#app");

if (!app) throw new Error("Unable to extract div#app element from the DOM");

// doggoPlayerAnimate(doggoCanvas.CTX);
// app.appendChild(doggoCanvas.canvas);

app.appendChild(parallaxCanvas.canvas);
