import "./styles/index.scss";
import { explosionCanvas } from "./components/canvas";
import { explosionAnimate } from "./animations";

const app: HTMLDivElement | null = document.querySelector("#app");

if (!app) throw new Error("Unable to extract div#app node from the DOM");

// doggoPlayerAnimate();
// app.appendChild(doggoCanvas.canvas);

// parallaxBgAnimate();
// app.appendChild(parallaxCanvas.canvas);

// enemyAnimate();
// app.append(enemyCanvas.canvas);

explosionAnimate();
app.append(explosionCanvas.canvas);
