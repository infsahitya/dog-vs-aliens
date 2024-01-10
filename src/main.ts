import "./styles/index.scss";
import { ravenCanvas, ravenCollisionCanvas } from "./components/canvas";
import { ravenAnimate } from "./animations";

const app: HTMLDivElement | null = document.querySelector("#app");

if (!app) throw new Error("Unable to extract div#app node from the DOM");

// doggoPlayerAnimate();
// app.appendChild(doggoCanvas.canvas);

// parallaxBgAnimate();
// app.appendChild(parallaxCanvas.canvas);

// enemyAnimate();
// app.append(enemyCanvas.canvas);

// explosionAnimate();
// app.append(explosionCanvas.canvas);

ravenAnimate(0);
app.append(ravenCollisionCanvas.canvas);
app.append(ravenCanvas.canvas);
