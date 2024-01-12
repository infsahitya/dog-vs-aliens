import { ravenCanvas } from "../components/canvas";
import { ravenAttackPlayerScore } from "../states";

const { CTX } = ravenCanvas;

function __drawRavenAttackPlayerLost() {
  CTX.fillStyle = 'rgba(0, 0, 0, 0.5)';
  CTX.fillRect(0, 0, ravenCanvas.WIDTH, ravenCanvas.HEIGHT);

  CTX.fillStyle = 'white';
  CTX.font = 'bold 40px Arial';
  CTX.textAlign = 'center';
  CTX.textBaseline = 'middle';

  const GAMEOVER_TEXT = "GAME OVER!";
  const GAMEOVER_TEXT_posY = ravenCanvas.HEIGHT / 2 - 20;
  CTX.fillText(GAMEOVER_TEXT, ravenCanvas.WIDTH / 2, GAMEOVER_TEXT_posY);

  CTX.font = '20px Arial';

  const SCORE_TEXT = `Your score is ${ravenAttackPlayerScore}`;
  const SCORE_TEXT_posY = ravenCanvas.HEIGHT / 2 + 20;
  CTX.fillText(SCORE_TEXT, ravenCanvas.WIDTH / 2, SCORE_TEXT_posY);
}

export default __drawRavenAttackPlayerLost;