import "./styles/index.scss";
import {
  explosionCanvas,
  ravenCanvas,
  ravenCollisionCanvas,
} from "./components/canvas";
import { explosionAnimate, ravenAnimate } from "./animations";
import { RAVENGAME_AUDIO } from "./assets/audios";

const app: HTMLDivElement | null = document.querySelector("#app");

if (!app) throw new Error("Unable to extract div#app node from the DOM");

// app.appendChild(doggoCanvas.canvas);
// doggoPlayerAnimate();

// app.appendChild(parallaxCanvas.canvas);
// parallaxBgAnimate();

// app.append(enemyCanvas.canvas);
// enemyAnimate();

// app.append(explosionCanvas.canvas);
// explosionAnimate();

app.append(ravenCollisionCanvas.canvas);
app.append(ravenCanvas.canvas);
app.append(explosionCanvas.canvas);
ravenAnimate(0);
explosionAnimate();
const ravenGameAudio = new Audio();
ravenGameAudio.src = RAVENGAME_AUDIO;
ravenGameAudio.loop = true;
ravenGameAudio.volume = 0.1;
window.onclick = () => ravenGameAudio.play();

